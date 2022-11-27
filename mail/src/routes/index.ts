import { Express } from "express";
import taskRoute from "./task.route";

export default function (app: Express) {
    app.use(taskRoute());
}