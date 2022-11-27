import log from "../logger";
import mysql from "mysql2";
import config from "../config/default";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    config.get('DB_NAME') as string,
    config.get('DB_USER') as string,
    config.get('DB_PASSWORD') as string,
    {
        host: config.get('DB_HOST') as string,
        port: config.get('DB_PORT') as number,
        dialect: 'mysql',
        dialectOptions:{
            ssl:{
                rejectUnauthorized:true,
                minVersion: 'TLSv1.2',

            }
        }
    }
);

export default sequelize;
