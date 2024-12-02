"use client";

import React, { useEffect, useState } from "react";

const UserProfile = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchId = async () => {
      const data = await params;
      setId(data.id);
    };
    fetchId();
  }, [params]);

  return <div>UserProfile {id}</div>;
};

export default UserProfile;
