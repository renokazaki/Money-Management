import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-2">
      <div>
        <h1 className="flex text-2xl font-bold">Hello User!</h1>
      </div>
      <div className="mr-4">
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/calender">Calender</Link>
      </div>
    </nav>
  );
};

export default Header;
