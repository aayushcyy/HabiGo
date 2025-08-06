import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Person1 from "../../public/images/person1.webp";
import Person3 from "../../public/images/person3.webp";
import Person4 from "../../public/images/person4.webp";
import { CalendarDays } from "lucide-react";
import type { CustomDate } from "../types/next-pwa.d.ts";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const dates: CustomDate[] = [
  {
    dateN: 6,
    day: "Wed",
  },
  {
    dateN: 7,
    day: "thu",
  },
  {
    dateN: 8,
    day: "fri",
  },
  {
    dateN: 9,
    day: "sat",
  },
  {
    dateN: 10,
    day: "sun",
  },
  {
    dateN: 11,
    day: "mon",
  },
  {
    dateN: 12,
    day: "tue",
  },
  {
    dateN: 13,
    day: "wed",
  },
];

export default function Home() {
  return (
    <div className="text-[#010409] w-full h-screen flex-col flex bg-[var(--secondary-bg)]">
      <Header />
      {/* Notification */}
      <section className="w-full flex justify-between px-3 pt-2 pb-1">
        <div className="bg-white flex justify-between h-32 w-full px-4 py-3 rounded-lg">
          <div className="w-full h-full flex flex-col justify-between items-start rounded-lg relative">
            <div className="flex flex-col">
              <p className="text-2xl font-medium">Best Runners!</p>
              <p className="text-sm text-[#868686]">Ending in 23hrs</p>
            </div>
            <div className="flex items-end justify-center w-32 relative">
              <div className="w-8 h-8 overflow-hidden rounded-full absolute left-[72px] bottom-0 bg-[var(--ternary-bg)] text-center text-[var(--primary-bg)] font-medium text-xs flex items-center justify-center border-white border-[2px]">
                +2
              </div>
              <div className="w-8 h-8 border-white border-[2px] overflow-hidden rounded-full absolute left-12 bottom-0">
                <Image
                  src={Person4}
                  alt=""
                  height={600}
                  width={600}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-8 h-8 border-white border-[2px] overflow-hidden rounded-full absolute left-6 bottom-0">
                <Image
                  src={Person3}
                  alt=""
                  height={600}
                  width={600}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-8 h-8 border-white border-[2px] overflow-hidden rounded-full absolute left-0 bottom-0">
                <Image
                  src={Person1}
                  alt=""
                  height={600}
                  width={600}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col relative justify-between gap-5 items-end">
            <div className="text-center flex text-[8px] justify-center items-center rounded-full px-1.5 gap-1.5 font-medium text-white bg-orange-600">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <p>Live</p>
            </div>
          </div>
        </div>
      </section>
      {/* Date section */}
      <section className="w-full h-20 flex justify-between items-center">
        <ScrollArea className="w-[75%] rounded-md whitespace-nowrap scrollbar-hidden">
          <div className="flex gap-3">
            {dates.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl h-16 w-13 border-2 border-[var(--primary-border)] bg-white justify-center text-xl text-[var(--primary-text)] border-[] font-semibold"
              >
                <p>{item.dateN}</p>
                <p className="text-xs uppercase font-medium">{item.day}</p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="w-20 h-15 px-3 flex items-center">
          <div className="bg-white h-full border-2 border-[var(--primary-border)] rounded-lg w-full px-3 flex items-center justify-center">
            <CalendarDays className="" />
          </div>
        </div>
      </section>
      <section className="w-full h-20 bg-green-700 px-3 py-2">
        <div className="w-full h-full bg-white rounded-lg flex">
          <div>
            <div></div>
          </div>
          <div>
            <p>Your daily goals almost done!🔥</p>
            <p>1 of 4 completed</p>
          </div>
        </div>
      </section>
    </div>
  );
}
