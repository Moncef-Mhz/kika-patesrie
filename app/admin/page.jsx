"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { FaRegBell } from "react-icons/fa";

function AdminPage() {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-6xl md:text-4xl text-2xl text-background">
          Welcome
        </h1>
        <div>
          <div className="relative">
            <FaRegBell size={20} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400  rounded-full">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
            </div>
          </div>
          <img src={session?.user.image} alt={session?.user.name} />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
