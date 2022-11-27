import config from "./lib/config/default";
import createServer from "./lib/app";
import log from "./lib/logger";
import Queue from "./lib/rabbitMq";
import sequelize from "./lib/db";
import routes from "./routes";


const port = config.get('PORT') as number;

const app = createServer();

let queue = new Queue();





app.listen(port, async () => {
    log.info(`Server started on port ${port}`);
    routes(app);
    sequelize.authenticate()
        .then(() => {
            log.info('Connection has been established successfully.');
        })
        .catch(err => {
            log.error('Unable to connect to the database:', err);
        });

    queue.consume('tasks');
});