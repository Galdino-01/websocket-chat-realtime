import { io } from '../Websocket.js';
import disconnect from './Disconnect.js';

io.on('connection', (socket) => {

    console.log(`User connection: ${socket.id}`);

    disconnect(socket);

});