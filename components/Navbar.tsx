import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full min-h-[50px] py-3 px-10 bg-dark text-white flex justify-between items-center gap-4">
      <div>
        <Link href="/">
          <h1 className="text-xl font-bold">CovertComm</h1>
        </Link>
      </div>

      <div>
        <Link href="/sign-in">
          <h1 className="text-sm font-semibold">Sign In</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
