import log from "../lib/logger";
import { TaksAttributes } from "../model/tasks.model";
import { create, findAll, findOne } from "../repo/tasks.repo";



const createTask = async (task: any) => {
    try {
        let checkTask = await findOne({ jobId: task.jobId });
        if (checkTask) {
            log.info("Task already exists");
            return false;
        }
        let newTask = await create(task);
        return newTask;

    } catch (error) {
        log.error(error);
        throw new Error((error as Error).message);
    }
}
const getSchedule = async () => {
    try {
        let tasks = await findAll({});
        tasks = tasks.sort((a, b) => {
            if (a.priority > b.priority) {
                return 1;
            } else if (a.priority < b.priority) {
                return -1;
            } else {
                let h1 = {
                    hour: parseInt(a.time_stamp.split(":")[0]),
                    minute: parseInt(a.time_stamp.split(":")[1])
                }
                let h2 = {
                    hour: parseInt(b.time_stamp.split(":")[0]),
                    minute: parseInt(b.time_stamp.split(":")[1])
                }
                if (h1.hour > h2.hour) {
                    return 1;
                } else if (h1.hour < h2.hour) {
                    return -1;
                } else {
                    if (h1.minute > h2.minute) {
                        return 1;
                    } else if (h1.minute < h2.minute) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
            }

        });
        let temp = tasks;
        let temp1:any[]=[];
        tasks.forEach((task,index)=>{
            if(task.dep!=="nil"){
                temp1.push(task);
                temp.splice(index,1);
            }
        })  
        temp1.forEach((task)=>{
            let dep = parseInt(task.dep);
            let depIndex = temp.findIndex((t)=>t.jobId===dep);
            log.info(depIndex);
            if(depIndex!==-1){
                temp.splice(depIndex+1,0,task);
            }
        });
        return temp;
    } catch (error) {
        log.error(error);
        throw new Error((error as Error).message);
    }
}
export { createTask, getSchedule };