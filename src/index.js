import './server/events/index.js';
import './server/shared/middlewares/index.js';
import { server } from './server/Server.js';
import { config } from 'dotenv';
import { Knex } from './server/database/knex/Enviroment.js';
config();

const PORT = process.env.SERVER_PORT || 3000;

Knex.migrate.latest()
.then(() => {

    Knex.seed.run()
        .then(() => {
            startServer();
        })
        .catch(error => console.log(error));
})
.catch(error => console.log(error));

const startServer = async () => {
    server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};