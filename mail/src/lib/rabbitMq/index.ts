import amqplib from 'amqplib';
import log from '../logger';


class Queue {
    private channel: amqplib.Channel | null;
    private connection: amqplib.Connection | null;

    constructor() {
        this.channel = null;
        this.connection = null;
    }

    async init(queueName:string) {
        try {
            this.connection = await amqplib.connect('amqp://localhost');
            this.channel = await this.connection.createChannel();
            await this.channel.assertQueue(queueName);
        } catch (error) {
            log.error(error);
        }

    }

    async sendToQueue(queueName:string,message: string) {
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