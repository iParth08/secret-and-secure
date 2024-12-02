"use client";

import React, { useEffect, useState } from "react";

const Chatroom = ({ params }: { params: Promise<{ group: string }> }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchId = async () => {
      const data = await params;
      setId(data.group);
    };
    fetchId();
  }, [params]);

  return <div>Chatroom {id}</div>;
};

export default Chatroom;
