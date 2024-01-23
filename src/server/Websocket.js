import { server } from "./Server.js";
import { Server as SocketIO} from 'socket.io';

export const io = new SocketIO(server);