import { object, string, ref, number } from "yup";

// const taskCreateSchema = {
//     reqType: "POST",
//     reqPath: "/api/sms/add-task",
// }

const taskCreateSchema = object({
    body: object({
        time_stamp:string().required("Time Stamp is required"),
        jobId: number().required("Job Id is required"),
        dep: string().required("Dependency is required"),
        priority: number().required("Priority is required")
        .max(3, "Priority must be between 1 and 3")
        .min(1, "Priority must be between 1 and 3"),
    }),
    headers: object({
        "content-type": string().required()
        .equals(["application/json"]),
    })
})

export { taskCreateSchema };