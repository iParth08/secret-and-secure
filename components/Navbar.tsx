import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/users/1">Users 1</Link>
      <Link href="/users/2">Users 2</Link>
      <Link href="/chatroom/group_3">Group 3</Link>
      <Link href="/chatroom/group_4">Group 4</Link>
      <Link href="/private-line/shyam">Shyam Chat</Link>
      <Link href="/private-line/lucifer">Lucifer Chat</Link>
    </div>
  );
};

export default Navbar;
