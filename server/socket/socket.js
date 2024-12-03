import { Server } from "socket.io";

export const setUpSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000", //todo: change this to Frontend's URL
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Socket connected");

    socket.on("online-user", (id) => {
      console.log("User online: ", id);
    });

    socket.on("ping", (place) => {
      console.log("Pong from: ", place);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
