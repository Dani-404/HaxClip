import LogLevel from "../Logger/LogLevel.js";
import Server from "../main.js";
import fs from 'fs';
import https from 'https';

export default class Queue {
    constructor(id, client, data) {
        this.id = id;
        this.client = client;
        this.url = data.url;
        this.byUser = data.byUser;
        this.time = data.time;
        this.intervalCheck = null;
        this.clipUploaded = false;
        this.error = false;
    }

    async progressClip() {
        Server.logger.sendLog(LogLevel.INFO, `Progressing clip by [${this.id}] by ${this.byUser.username}.`);
        this.client.sendPlayerMsg(`We are traiting your clip...`, this.byUser.id, "0xffd20a");

        await Server.page.goto('https://www.haxball.com/replay?v=3');
        Server.page.on('console', msg => {
            if(msg.text() == "Success")
                this.clipUploaded = true;
            else if(msg.text()  == "Error")
                this.error = true;
        });

        const file = await fs.createWriteStream(`recs/${this.id}.hbr2`);
        const request = await this.getUrl(this.url);
        await request.pipe(file);

        const iframeElement = await Server.page.waitForSelector('iframe#gameframe');
        const frame = await iframeElement.contentFrame();

        await this.sleep(2500);
        const uploadForm = await frame.$("#replayerfile");
        await uploadForm.uploadFile(file.path);
        await this.sleep(2500);
        await this.checkError("Impossible to upload file");

        let timeOk;
        if(parseInt(this.time) < 15)
            timeOk = 0;
        else
            timeOk = parseInt(this.time) - 15;

        const timecodeInput = await frame.$("#timecode");
        await timecodeInput.type(timeOk.toString());
        const recordButton = await frame.$("#startSearch");
        await recordButton.click();
        await this.clipDone();
        await this.sleep(1000);
        await fs.unlinkSync(`recs/${this.id}.hbr2`);
    }

    clipDone() {
        const instance = this;

        return new Promise((resolve, reject) => {
            this.intervalCheck = setInterval(() => {
                if(instance.clipUploaded)
                {
                    clearInterval(instance.intervalCheck);
                    resolve();
                }
                else if(instance.error) {
                    clearInterval(instance.intervalCheck);
                    reject("Impossible to get timer");
                }
            }, 1000);
        })
    }

    checkError(error) {
        return new Promise((resolve, reject) => {
            if(this.error)
                reject(error);
            else
                resolve();
        })
    }

    getUrl(url) {
        return new Promise((resolve, reject) => {
            const request = https.get(url, function(response) {
                resolve(response);
            });

            request.on('error', function(err) {
                reject(err);
            });
        })
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}