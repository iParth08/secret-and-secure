"use client";

import initSocket from "@/lib/socket";
import React, { useEffect, useState } from "react";

const UserProfile = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    // initiate socket
    const socket = initSocket();

    //fetch params
    const fetchId = async () => {
      const data = await params;
      setId(data.id);

      //note:send username to socket
      socket.emit("online-user", data.id);
    };

    fetchId();
  }, []);

  return <div>UserProfile {id}</div>;
};

export default UserProfile;
