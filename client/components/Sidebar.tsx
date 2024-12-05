"use client";

import { CircleChevronLeft, CircleChevronRight, House } from "lucide-react";
import React, { useState } from "react";

//! testing purposes
import { friends, currentUser } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getInitials } from "@/lib/specials";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isActiveID, setIsActiveID] = useState<string>("");
  const [onlineFriends, setOnlineFriends] = useState<Set<string>>(new Set());
  return (
    <div className="max-w-[300px] min-w-fit max-h-[700px] border-4 rounded-lg border-zinc-800 m-2 ">
      <nav>
        <section className="flex items-center gap-5 p-5 ">
          <Avatar
            className={cn(" h-20 w-20 cursor-pointer", !isOpen && "h-14 w-14")}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              {getInitials(currentUser?.name || "")}
            </AvatarFallback>
          </Avatar>
          <div
            className={cn(
              "flex flex-col justify-center items-center ",
              isOpen ? "display" : "hidden"
            )}
          >
            <strong>{currentUser?.name}</strong>
            <span className="text-muted-foreground">
              @{currentUser?.username}
            </span>
          </div>
        </section>
        <Separator />
        <section className="overflow-y-auto max-h-[560px]">
          {friends &&
            friends.map((friend) => (
              <div
                key={friend.userId}
                className={cn(
                  "hover:border-b-2 flex justify-start items-center gap-4 px-4 py-2 mt-2 h-fit w-full",
                  isActiveID === friend.userId && "border-l-4 border-lime-500"
                )}
                onClick={() => setIsActiveID(friend.userId)}
              >
                <Avatar>
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>{getInitials(friend.name)}</AvatarFallback>
                </Avatar>

                <div
                  className={cn(
                    " flex justify-between items-center gap-4 w-full h-fit",
                    isOpen ? "display" : "hidden"
                  )}
                >
                  <div className="flex flex-col text-center">
                    <h2 className="font-bold">{friend.name}</h2>
                    <span className="text-sm text-muted-foreground">
                      @{friend.username}
                    </span>
                  </div>

                  {friend.msgCount !== 0 && (
                    <span className="text-sm bg-lime-300 rounded-full w-8 h-8 flex items-center justify-center">
                      {friend.msgCount}
                    </span>
                  )}
                </div>
                <div
                  className={`ml-auto h-[10px] w-[10px] rounded-full flex-shrink-0 ${
                    onlineFriends.has(friend.username)
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                ></div>
              </div>
            ))}
        </section>
      </nav>
    </div>
  );
};

export default Sidebar;
