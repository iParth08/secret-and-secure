"use client";

import Sidebar from "@/components/Sidebar";
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
  }, [params]);

  return (
    <div className="flex w-full min-h-fit gap-5">
      <Sidebar />
      <div>UserProfile {id}</div>
    </div>
  );
};

export default UserProfile;
