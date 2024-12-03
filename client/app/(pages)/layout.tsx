"use client";
import Navbar from "@/components/Navbar";
import initSocket from "@/lib/socket";
import React, { useEffect } from "react";
import { Socket } from "socket.io-client";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // initiate socket
    let socket: Socket;
    const connectSocket = async () => {
      try {
        socket = await initSocket();
      } catch (error) {
        console.log("Error connecting to socket:", error);
      }
    };

    connectSocket();

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
