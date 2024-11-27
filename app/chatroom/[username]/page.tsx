import React from "react";

const UserChatRoom = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const username = (await params).username;
  return <div>UserChatRoom, {username}</div>;
};

export default UserChatRoom;
