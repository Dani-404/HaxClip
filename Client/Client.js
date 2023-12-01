import Server from "../main.js";

export default class Client {
    constructor(data) {
        this.id = data.id;
        this.socket = data.socket;
        this.webHook = data.webHook;

        this.initEvents();
    }

    initEvents() {
        const instance = this;

        this.socket.on('close', () => Server.clientManager.destroyClient(instance.id));

        this.socket.on('message', function message(data) {
            if(data == null)
                return;

            const dataParsed = JSON.parse(data);
            if(dataParsed.key == null)
                return;

            switch(dataParsed.key) {
                case "newClip": {
                    Server.queueManager.newClip(instance, dataParsed.data);
                    break;
                }
            }
        });
    }

    sendPlayerMsg(msg, playerId, color, style = null, sound = 0) {
        this.sendMsg('playerMsg', {
            msg: msg,
            playerId: playerId,
            color: color,
            style: style,
            sound: sound
        })
    }

    sendMsg(key, data = null) {
        this.socket.send(JSON.stringify({key: key, data:data}));
    }

    destroy() {

    }
}