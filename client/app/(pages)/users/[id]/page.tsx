"use client";

import { socket } from "@/lib/socket";
import React, { useEffect, useState } from "react";

const UserProfile = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    //fetch params
    const fetchId = async () => {
      const data = await params;
      setId(data.id);

      //note:send username to socket
      if (socket) {
        socket.emit("online-user", data.id);
        socket.emit("ping", "user profile");
      }
    };

    fetchId();

    return () => {
      socket?.off("online-user");
      socket?.off("ping");
    };
  }, []);

  return <div>UserProfile {id}</div>;
};

export default UserProfile;
