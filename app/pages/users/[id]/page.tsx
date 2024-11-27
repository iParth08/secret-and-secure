import React from "react";

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return <div>UserProfile {id}</div>;
};

export default UserProfile;
