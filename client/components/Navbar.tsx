import Link from "next/link";
import React, { useState } from "react";
import AddFriend from "./AddFriend";
import { Button } from "./ui/button";
import { MessageCircleCode } from "lucide-react";

const Navbar = () => {
  // const [session, setSession] = useState(null);
  const isUserLoggedIn = true; //!testing only
  return (
    <header className="w-full min-h-[50px] py-3 bg-white text-dark border-b-4 border-zinc-800 flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between gap-4">
        <div>
          <Link href="/">
            <h1 className="text-lg font-bold flex items-center gap-2">
              <MessageCircleCode className="size-10" />
              CovertComm
            </h1>
          </Link>
        </div>

        <div className="flex gap-4">
          <Link href="/chatroom/masti-group">
            <h3 className="text-sm font-semibold">Group</h3>
          </Link>

          <Link href="/chatroom/masti-group2">
            <h3 className="text-sm font-semibold">Group 2</h3>
          </Link>

          <Link href="/private-line/Lucifer">
            <h3 className="text-sm font-semibold">Luci-Online</h3>
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {isUserLoggedIn ? (
            <AddFriend />
          ) : (
            <Link href="/sign-in">
              <Button
                variant="outline"
                className="text-sm text-black font-semibold"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
