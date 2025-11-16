"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoginOutBtn() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("loggedIn");
    // Defer the state update to avoid the lint warning
    queueMicrotask(() => {
      setLoggedIn(stored === "true");
    });
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    window.localStorage.setItem("loggedIn", "false");
  };

  if (loggedIn === null) return null;

  if (loggedIn) {
    return (
      <div>
        <Button
          className="rounded-xl bg-white text-cyan-600 hover:bg-gray-100"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href="/login">
        <Button
          variant="ghost"
          className="rounded-xl text-white hover:bg-white/20"
        >
          <User className="mr-2 h-4 w-4" />
          Sign In
        </Button>
      </Link>
      <Link href="/register">
        <Button className="rounded-xl bg-white text-cyan-600 hover:bg-gray-100">
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
