"use client";

import React, { useState } from "react";
import { MessageCircle, UserRound } from "lucide-react";
import { format } from "date-fns";

export default function Header() {
  const today = format(new Date(), "d MMM");
  return (
    <div className="w-full flex flex-col px-3 py-3 gap-10">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 bg-[#C4C4C4] rounded-full flex items-center justify-center text-2xl">
          <UserRound />
        </div>
        <div className="flex flex-col text-center justify-center">
          <h1 className="text-lg font-semibold">Hello, Aayush</h1>
          <p className="text-[#868686] text-xs font-medium">Today {today}</p>
        </div>
        <div className="flex items-center justify-center">
          <MessageCircle />
        </div>
      </div>
    </div>
  );
}
