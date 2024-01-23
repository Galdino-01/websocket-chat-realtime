import { io } from "../Websocket.js";

io.use((socket, next) => {
    next();
});