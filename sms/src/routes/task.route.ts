import { Router, Request, Response} from "express";
import { addTaskHandler, getTaskHandler } from "../controller/task.controller";
import { validate } from "../middleware";
import { taskCreateSchema } from "../schema/task.schema";

export default function () {
    const router = Router();
    router.post('/api/sms/add-task',validate(taskCreateSchema),addTaskHandler);
    router.get('/api/sms',getTaskHandler);
    return router;
}