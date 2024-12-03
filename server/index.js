import express from "express";
import { createServer } from "node:http";
import cors from "cors";
import { setUpSocket } from "./socket/socket.js";

const app = express();
const PORT = 4000;

// Create a single HTTP server that can be used by both Express and Socket.IO
const httpServer = createServer(app);

// Enable CORS
app.use(cors("*"));

// Initialize Socket.IO
setUpSocket(httpServer);

// Express route
app.get("/", (req, res) => {
  res.send("<h1>Hello, I am Parth's Server</h1>");
});

// Start the server
httpServer.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
