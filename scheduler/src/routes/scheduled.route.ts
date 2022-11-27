import { Router, Request, Response} from "express";
import { getSchedulerhandler } from "../controller/scheduled.controller";


export default function () {
    const router = Router();
    router.get('/api/scheduler',getSchedulerhandler);
    return router;
}