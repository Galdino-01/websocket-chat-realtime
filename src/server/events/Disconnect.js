async function disconnect(socket) {
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
}

export default disconnect;