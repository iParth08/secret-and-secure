"use client";

import React, { useEffect, useState } from "react";

const PrivateLine = ({ params }: { params: Promise<{ username: string }> }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchId = async () => {
      const data = await params;
      setId(data.username);
    };
    fetchId();
  }, [params]);

  return <div>PrivateLine {id}</div>;
};

export default PrivateLine;
