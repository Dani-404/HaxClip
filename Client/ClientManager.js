import LogLevel from "../Logger/LogLevel.js";
import Server from "../main.js";
import Client from "./Client.js";

export default class ClientManager {
    constructor() {
        this.clients = {};
        this.clientId = 0;
    }

    newClient(socket, webHook) {
        this.clientId++;
        const client = new Client({id: this.clientId, socket: socket, webHook: webHook});
        this.clients[client.id] = client;
        Server.logger.sendLog(LogLevel.INFO, `New client connection [${this.clientId}].`);
    }

    destroyClient(clientId) {
        if(!this.clients.hasOwnProperty(clientId))
            return;

        const client = this.clients[clientId];
        client.destroy();
        
        delete this.clients[clientId];
        Server.logger.sendLog(LogLevel.INFO, `Client diconnection [${clientId}].`);
    }
}