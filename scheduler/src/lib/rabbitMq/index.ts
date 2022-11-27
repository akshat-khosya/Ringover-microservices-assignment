import amqplib from 'amqplib';
import { TaksAttributes } from '../../model/tasks.model';
import { createTask } from '../../service/task.service';
import log from '../logger';
import {getSchedule} from '../../service/task.service';
import redis from '../redis';

class Queue {
    private channel: amqplib.Channel | null;
    private connection: amqplib.Connection | null;

    constructor() {
        this.channel = null;
        this.connection = null;
    }

    async init(queueName: string) {
        try {
            this.connection = await amqplib.connect('amqp://localhost');
            this.channel = await this.connection.createChannel();
            await this.channel.assertQueue(queueName);
        } catch (error) {
            log.error(error);
        }

    }
    async consume(queueName: string) {
        if (!this.channel) {
            await this.init(queueName);
        }

        if (this.channel) {

            this.channel.consume(queueName, async (msg) => {
                if (msg !== null) {
                    let task = JSON.parse(msg.content.toString()) as TaksAttributes;
                    if (this.channel) {
                        this.channel.ack(msg);
                    }
                    await createTask(task);
                    let data = await getSchedule();
                    await redis.set("schedule", JSON.stringify(data));
                    // redis.quit();
                    return;
                }
            });
        }
    }
    async sendToQueue(queueName: string, message: string) {
        if (this.channel) {
            this.channel.sendToQueue(queueName, Buffer.from(message));
        }
    }

    async close() {
        if (this.channel) {
            await this.channel.close();
        }
        if (this.connection) {
            await this.connection.close();
        }
    }
}

export default Queue;