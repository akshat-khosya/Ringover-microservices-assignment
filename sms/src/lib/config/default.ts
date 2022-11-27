import env from 'dotenv';

class Config{
    _config: Record<string, any>;
    constructor(){
        env.config();
        this._config={
            PORT:8081
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