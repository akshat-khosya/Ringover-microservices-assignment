
import log from "../lib/logger";
import Task, { TaksAttributes } from "../model/tasks.model";
const findOne = async (query:any)=>{
    try {
        const task = await Task.findOne({where:query});
        return task;
    } catch (error) {
        log.error(error);
        throw new Error((error as Error).message);
    }
}

const create = async (task:TaksAttributes)=>{
    try {
        let newTask = await Task.create(task);
        return newTask;
    } catch (error) {
        log.error(error);
        throw new Error((error as Error).message);
    }
}
const findAll = async(query:any)=>{
    try {
        let tasks = await Task.findAll({where:query});
        return tasks;
    } catch (error) {
        log.error(error);
        throw new Error((error as Error).message);
    }
}

export { findOne, create,findAll };