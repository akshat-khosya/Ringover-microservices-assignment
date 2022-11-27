import config from "./lib/config/default";
import createServer from "./lib/app";
import log from "./lib/logger";
import routes from "./routes";



const port = config.get('PORT') as number;

const app = createServer();

app.listen(port,()=>{
    log.info(`Server started on port ${port}`);
    routes(app);
});