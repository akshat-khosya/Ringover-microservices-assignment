import env from 'dotenv';
import log from '../logger';

class Config{
    _config: Record<string, any>;
    constructor(){
        env.config();
        this._config={
            PORT:8082,
            DB_PORT:process.env.PORT,
            DB_NAME:process.env.DATABASE,
            DB_USER:process.env.R_USER,
            DB_PASSWORD:process.env.PASSWORD,
            DB_HOST:process.env.HOST,
        };
    }
    get(key:string):any{
        const val:any = this._config[key]??null;
        if(!val){
            throw new Error(`Config key ${key} not found`);
        }
        return val;
    }
    set(key:string,val:any):void{
        this._config[key]=val;
    }
}

const config = new Config();

export default config;