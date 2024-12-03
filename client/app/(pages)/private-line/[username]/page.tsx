"use client";

import { socket } from "@/lib/socket";
import React, { useEffect, useState } from "react";

const PrivateLine = ({ params }: { params: Promise<{ username: string }> }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchId = async () => {
      const data = await params;
      setId(data.username);

      if (socket) {
        socket.emit("online-user", data.username);
        socket.emit("ping", "private line");
      }
    };
    fetchId();
    return () => {
      socket?.off("online-user");
      socket?.off("ping");
    };
  }, [params]);

  return <div>PrivateLine {id}</div>;
};

export default PrivateLine;
