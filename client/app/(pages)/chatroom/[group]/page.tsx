"use client";

import { socket } from "@/lib/socket";
import React, { useEffect, useState } from "react";

const Chatroom = ({ params }: { params: Promise<{ group: string }> }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchId = async () => {
      const data = await params;
      setId(data.group);

      if (socket) {
        socket.emit("online-user", data.group);
        socket.emit("ping", "group chatroom");
      }
    };
    fetchId();
    return () => {
      socket?.off("online-user");
      socket?.off("ping");
    };
  }, [params]);

  return <div>Chatroom {id}</div>;
};

export default Chatroom;
