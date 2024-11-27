import React from "react";

const GroupChat = async ({
  params,
}: {
  params: Promise<{ group: string }>;
}) => {
  const group_name = (await params).group;
  return <div>GroupChat, {group_name}</div>;
};

export default GroupChat;
