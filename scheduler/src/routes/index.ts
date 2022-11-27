import { Express } from "express";
import scheduledRoute from "./scheduled.route";


export default function (app: Express) {
    app.use(scheduledRoute());
}