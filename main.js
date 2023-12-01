import { WebSocketServer } from 'ws';
import ClientManager from './Client/ClientManager.js';
import Logger from './Logger/Logger.js';
import LogLevel from './Logger/LogLevel.js';
import QueueManager from './Queue/QueueManager.js';
import Config from './Config/Config.js';
import path from 'path';
import puppeteer from 'puppeteer';

let Server;

class App {
    constructor() {
        this.ws;
        this.clientManager = new ClientManager();
        this.logger = new Logger();
        this.queueManager = new QueueManager();
        this.browser;
        this.page;
    }

    async init() {
        const pathToExtension = path.join(process.cwd(), 'HaxReplay');
        this.browser = await puppeteer.launch({
            product: 'chrome',
            headless: "new",
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });

        this.page = await this.browser.newPage();

        const client = await this.page.target().createCDPSession()
        await client.send('Page.setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: path.join(process.cwd(), 'clip'),
        })

        await Server.page.goto('http://google.com');
        
        this.ws = await new WebSocketServer({
            port: 8091
        });

        const instance = this;

        this.ws.on('connection', function connection(socket, data) {
            const urlParams = new URLSearchParams(data.url.substring(1));

            const key = urlParams.get('key');

            if(key == null || key != Config.API_KEY)
                return socket.close();

            const webHook = urlParams.get('webHook');
            if(webHook == null)
                return socket.close();;

            instance.clientManager.newClient(socket, webHook);
        });

        this.logger.sendLog(LogLevel.SUCCESS, "Server started.")
    }
}

Server = new App();
export default Server;
Server.init().catch((e) => Server.logger.sendLog(LogLevel.ERROR, e.toString()));