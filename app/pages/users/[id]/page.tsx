import React from "react";

const UserProfile = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>UserProfile {id}</div>;
};

export default UserProfile;
