"use client";
import Link from "next/link";
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
const Header = () => {
  const { user } = useUser(); // Clerkからユーザー情報を取得

  return (
    <nav className="flex justify-between items-center px-2 py-2">
      <div className="flex items-center justify-center gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        {user && (user.username || user.fullName || "User")}
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
