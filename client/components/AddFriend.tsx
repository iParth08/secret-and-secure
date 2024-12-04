"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/specials";

//! testing purpose only
import { friends as filteredUsers, currentUser } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  LogOut,
  UserPlus,
  ShieldCheck,
  UserRoundCheck,
  CircleUserRound,
} from "lucide-react";

type Friend = {
  userId: string;
  name: string;
  username: string;
  avatar: string;
};
const AddFriend = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  //   const [filteredUsers, setFilteredUsers] = useState<Friend[]>([]);
  // const [currentUser, setCurrentUser] = useState<Friend | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    //todo: search and filter friends
  };

  const handleAddFriend = (username: string) => {};
  const handleRemoveFriend = (username: string) => {};

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <div className="flex items-center gap-2 text-black text-sm font-semibold">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                {getInitials(currentUser?.name || "")}
              </AvatarFallback>
            </Avatar>
            <span className="text-white">{currentUser?.name}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-5 mr-5 border-4 border-zinc-900">
          <DropdownMenuLabel className="flex justify-around items-center gap-2">
            <Link href={`/users/${currentUser?.userId}`}>
              <Button variant={"outline"}>
                <CircleUserRound />
                Profile
              </Button>
            </Link>
            <Button variant={"outline"}>
              <ShieldCheck />
              Secure
            </Button>
            <Button className="bg-crimson">
              <LogOut />
              Logout
            </Button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            <div className="flex flex-col items-center gap-2 w-[300px]">
              <h2>Search Friends</h2>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full border h-[40px] border-gray-300 rounded-md px-4 py-1 mb-2 focus:bg-zinc-800 focus:text-white"
              />
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex flex-col items-center gap-2 max-h-[300px] overflow-y-scroll">
              {filteredUsers &&
                filteredUsers.map((user) => (
                  <div
                    key={user.userId}
                    className="hover:border-b-2 flex justify-between items-center gap-2 w-[300px] p-2"
                  >
                    <Avatar>
                      <AvatarImage src="https://github.com/shadocn.png" />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col text-center">
                      <h2 className="font-bold">{user.name}</h2>
                      <span className="text-sm text-muted-foreground">
                        @{user.username}
                      </span>
                    </div>

                    <div>
                      {friends.some(
                        (friend) => friend.username === user.username
                      ) ? (
                        <Button
                          className="bg-green-600 hover:bg-red-500"
                          onClick={() => handleRemoveFriend(user.username)}
                        >
                          <UserRoundCheck />
                        </Button>
                      ) : (
                        <Button
                          className="hover:bg-green-600"
                          onClick={() => handleAddFriend(user.username)}
                        >
                          <UserPlus />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AddFriend;
