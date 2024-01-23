import './server/events/index.js';
import './server/middlewares/index.js';
import { server } from './server/Server.js';
import { config } from 'dotenv';
config();

const PORT = process.env.SERVER_PORT || 3000;

const startServer = async () => {
    server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};

startServer();