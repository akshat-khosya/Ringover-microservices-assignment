import { Request, Response } from "express";
import log from "../lib/logger";
import { getSchedule } from "../service/task.service";


const getSchedulerhandler = async(req: Request, res: Response) => {
    try {
        let result = await getSchedule();
        return res.status(200).json(result);
    } catch (error) {
        log.error(error);
        return res.status(500).json({ msg:"Server error" });
    }
}

export { getSchedulerhandler };