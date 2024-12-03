// import { io } from "socket.io-client";

// export const socket_url =
//   process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3007";

// const socket = io(socket_url, {
//   transports: ["websocket", "polling"],
// });

// export default socket;

import { io, Socket } from "socket.io-client";

export const socket_url =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3007";

// Declare a variable to hold the socket instance
let socket: Socket | null = null;

// Initialize the socket connection only if it's not already initialized
export const initSocket = (): Socket => {
  if (!socket) {
    socket = io(socket_url, {
      transports: ["websocket", "polling"], // Prefer WebSocket over polling
      reconnection: true, // Auto-reconnect on failure
      timeout: 10000, // Connection timeout
    });
  }

  return socket;
};

export default initSocket;
