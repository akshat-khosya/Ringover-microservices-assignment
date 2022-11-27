import { Request, Response } from "express";
import log from "../lib/logger";
import Queue from "../lib/rabbitMq";
import redis from "../lib/redis";

let queueName = "tasks";

const addTaskHandler = async (req: Request, res: Response) => {
    try {
        let queue = new Queue();
        await queue.init(queueName);
        let data={
            taskType:'mail',
            ...req.body
        }
        queue.sendToQueue(queueName,JSON.stringify(data));
        await queue.close();
        res.status(200).json({msg: "Task added successfully"});
    } catch (error) {
        log.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
};
const getTaskHandler = async (req: Request, res: Response) => {
    try {
        log.info("getting")
        let data = await redis.get("schedule") as string;
        let temp = JSON.parse(data) as any[];
        let result = temp.filter((item) => item.taskType === 'mail');
        res.status(200).json(result);
    } catch (error) {
        log.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }

};

export { addTaskHandler,getTaskHandler };