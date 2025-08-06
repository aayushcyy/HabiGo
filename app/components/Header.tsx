"use client";

import React, { useState } from "react";
import { MessageCircle, UserRound } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import Person from "../../public/images/person4.webp";

export default function Header() {
  const today = format(new Date(), "d MMM");
  return (
    <div className="w-full flex flex-col px-3 py-3 gap-10">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-full bg-[#C4C4C4] overflow-hidden flex items-center justify-center text-2xl">
          <Image
            src={Person}
            alt=""
            width={600}
            height={600}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col text-center justify-center">
          <h1 className="text-lg font-semibold">Hello, Aayushi</h1>
          <p className="text-[#868686] text-xs font-medium">Today {today}</p>
        </div>
        <div className="flex items-center justify-center">
          <MessageCircle />
        </div>
      </div>
    </div>
  );
}
