import { io, Socket } from "socket.io-client";

export const socket_url =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3007";

// Declare a variable to hold the socket instance
export let socket: Socket | null = null;

export const initSocket = async (): Promise<Socket> => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4000", {
      transports: ["websocket", "polling"],
      reconnection: true,
      timeout: 10000,
    });

    return new Promise((resolve, reject) => {
      socket?.on("connect", () => {
        console.log("Socket connected:", socket?.id);
        resolve(socket!);
      });

      socket?.on("connect_error", (err) => {
        console.error("Socket connection error:", err.message);
        reject(err);
      });
    });
  }

  if (socket.connected) {
    return socket;
  }

  return new Promise((resolve, reject) => {
    socket?.on("connect", () => resolve(socket!));
    socket?.on("connect_error", reject);
  });
};

export default initSocket;
