import LogLevel from "../Logger/LogLevel.js";
import Server from "../main.js";
import Queue from "./Queue.js";
import fetch from 'node-fetch';
import formData from 'form-data';
import fs from 'fs';
import Config from "../Config/Config.js";

export default class QueueManager {
    constructor() {
        this.queueId = 0;
        this.queues = [];
        this.inProgress = false;
    }

    newClip(client, data) {
        if(data.url == null || !data.url.toLowerCase().endsWith(".hbr2") || data.byUser == null || data.byUser.username == null || data.byUser.id == null || data.time == null)
            return;

        if(this.countQueueByPlayer(client.id, data.byUser.id ) >= Config.LIMIT_CLIP_BY_USER)
            return;

        this.queueId++;
        const queue = new Queue(this.queueId, client, data);
        this.queues.push(queue);

        const order = this.getOrder(queue.id);
        if(order > 1)
            queue.client.sendPlayerMsg(`Your clip has been added in queue, your place is [${order}/${this.queues.length}].`, queue.byUser.id, 0xffd20a);

        Server.logger.sendLog(LogLevel.INFO, `New clip in queue [${this.queueId}] by ${data.byUser.username}.`);
        this.progressQueue();
    }

    progressQueue() {
        if(this.inProgress)
            return;

        const queue = this.queues[0];

        if(queue == null)
            return;

        this.inProgress = true;
        const instance = this;

        queue.progressClip().then((data) => {
            Server.page.goto('http://google.com');
            Server.logger.sendLog(LogLevel.SUCCESS, `Clip [${queue.id}] by ${queue.byUser.username} created.`);

            const form = new formData();
            form.append('file', fs.createReadStream('./clip/clip.gif'));
            form.append('content', `New clip by ${queue.byUser.username}.`);

            fetch(`https://discord.com/api/webhooks/${queue.client.webHook}?wait=true`, {
                method: "POST",
                body: form,
                headers: form.getHeaders()
            }).then((response) => response.json()).then((dataMsg) => {
                queue.client.sendPlayerMsg(`Clip uploaded with success. See #clips channel of our Discord for get it!`, queue.byUser.id, 0xffd20a);
                try {
                    fs.unlinkSync(`./clip/clip.gif`);
                } catch(e) {}
                instance.finishQueue(queue.id);
                instance.inProgress = false;
                instance.progressQueue();
                //console.log(dataMsg)
            }).catch((e) => {
                try {
                    fs.unlinkSync(`./clip/clip.gif`);
                } catch(e) {}
                Server.logger.sendLog(LogLevel.ERROR, `Impossible to send clip in discord channel: ${e.toString()}`);
                queue.client.sendPlayerMsg(`An error occured with your clip.`, queue.byUser.id, 0xff4a4a, null, 2);
                instance.finishQueue(queue.id);
                instance.inProgress = false;
                instance.progressQueue();
            })
        }).catch((e) => {   
            Server.page.goto('http://google.com');         
            Server.logger.sendLog(LogLevel.ERROR, `Impossible to fetch clip [${queue.id}] by ${queue.byUser.username}: ${e.toString()}.`);
            queue.client.sendPlayerMsg(`An error occured with your clip.`, queue.byUser.id, 0xff4a4a, null, 2);
            try {
                fs.unlinkSync(`recs/${queue.id}.hbr2`);
                fs.unlinkSync(`./clip/clip.gif`);
            }
            catch(e) {}

            if(queue.intervalCheck != null)
                clearInterval(queue.intervalCheck);
            instance.finishQueue(queue.id);
            instance.inProgress = false;
            instance.progressQueue();
        });
    }

    countQueueByPlayer(clientId, userId) {
        let count = 0;
        this.queues.forEach((queue) => {
            if(queue.client.id == clientId && queue.byUser.id == userId)
                count++;
        })

        return count;
    }
    
    getOrder(queueId) {
        let count = 0;

        this.queues.forEach((queue) => {
            count++;

            if(queue.id == queueId)
                return count;
        });
        
        return count;
    }

    finishQueue(queueId) {
        this.queues.forEach(function (queue, index, object) {
            if (queue.id == queueId)
               object.splice(index, 1);
        });
    }
}