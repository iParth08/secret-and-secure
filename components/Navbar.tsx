import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="pages/users/1">Users 1</Link>
      <Link href="pages/users/2">Users 2</Link>
      <Link href="pages/users/3">Users 3</Link>
    </div>
  );
};

export default Navbar;
