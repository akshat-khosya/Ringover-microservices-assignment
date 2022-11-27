import { Router, Request, Response} from "express";
import { addTaskHandler, getTaskHandler } from "../controller/task.controller";
import { validate } from "../middleware";
import { taskCreateSchema } from "../schema/task.schema";

export default function () {
    const router = Router();
    router.post('/api/mail/add-task',validate(taskCreateSchema),addTaskHandler);
    router.get('/api/mail',getTaskHandler);
    return router;
}