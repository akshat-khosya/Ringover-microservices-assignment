import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import db from "../lib/db";

export interface TaksAttributes {
    jobId: number;
    taskType: string;
    dep: string;
    priority: number;
    time_stamp: string;
}
class Task extends Model<TaksAttributes>{
    declare jobId: number;
    declare taskType: string;
    declare dep: string;
    declare priority: number;
    declare time_stamp: string;
}
Task.init({
    jobId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    taskType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    time_stamp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db,
    modelName: 'tasks',
    timestamps: false,
});


export default Task;




