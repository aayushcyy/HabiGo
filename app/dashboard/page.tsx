"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Person1 from "../../public/images/person1.webp";
import Person3 from "../../public/images/person3.webp";
import Person4 from "../../public/images/person4.webp";
import Person5 from "../../public/images/person5.webp";
import Person6 from "../../public/images/person6.webp";
import { CalendarDays, Clock, Check } from "lucide-react";
import type { CustomDate } from "../types/next-pwa.d.ts";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { habits } from "../Data/data";

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
    dateN: 6,
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="text-[#010409] w-full min-h-screen flex-col flex bg-[var(--color-bg-secondary)]">
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
              <div className="w-8 h-8 overflow-hidden rounded-full absolute left-[72px] bottom-0 bg-[var(--color-bg-secondary)] text-center text-[var(--color-primary-dark)] font-medium text-xs flex items-center justify-center border-white border-[2px]">
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
      {/* Reminder */}
      <section className="w-full h-20 px-3 py-2">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg flex px-4 items-center gap-3">
          <div>
            <div>
              <AnimatedCircularProgressBar
                className="h-10 w-10 text-[12px]"
                max={100}
                min={0}
                value={25}
                gaugePrimaryColor="#fff"
                gaugeSecondaryColor="#fff"
              ></AnimatedCircularProgressBar>
            </div>
          </div>
          <div className="text-xs flex flex-col gap-1">
            <p className="text-base font-medium">
              Your daily goals almost done!🔥
            </p>
            <p>1 of 4 completed</p>
          </div>
        </div>
      </section>
      {/* Challenges */}
      <section className="w-full flex px-3 flex-col mt-2 gap-1">
        <div className="flex w-full justify-between items-center font-semibold">
          <p>Challenges</p>
          <p className="uppercase text-xs font-semibold text-[var(--color-primary-dark)]">
            View all
          </p>
        </div>
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <div className="w-full h-16 bg-white rounded-lg border-[2px] border-gray-200 flex justify-between items-center px-4 py-1.5">
                <div className="flex gap-3 h-full items-center">
                  <div className="flex rounded-full items-center">
                    <Clock className="size-6" color="#1D4ED8" />
                  </div>
                  <div className="flex flex-col text-xs font-medium text-[var(--color-text-secondary)]">
                    <p className="text-lg font-semibold">Best Runners!🏃‍♂️</p>
                    <p>5 days 13 hours left</p>
                  </div>
                </div>
                <div className="flex flex-col text-xs text-[var(--color-text-secondary)] font-medium gap-1">
                  <div className="flex items-end justify-end relative">
                    <div className="w-6 h-6 border-white border-[2px] overflow-hidden rounded-full -mr-1.5 bottom-0">
                      <Image
                        src={Person4}
                        alt=""
                        height={600}
                        width={600}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="w-6 h-6 border-white border-[2px] overflow-hidden rounded-full bottom-0">
                      <Image
                        src={Person3}
                        alt=""
                        height={600}
                        width={600}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div>2 friends joined</div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full bg-white rounded-lg border-[2px] border-gray-200 flex justify-between items-center px-4 py-1.5">
                <div className="flex gap-3 h-full items-center">
                  <div className="flex rounded-full items-center">
                    <Clock className="size-6" color="#1D4ED8" />
                  </div>
                  <div className="flex flex-col text-xs font-medium text-[var(--color-text-secondary)]">
                    <p className="text-lg font-semibold">
                      Fit for Life Challenge
                    </p>
                    <p>21 hours left</p>
                  </div>
                </div>
                <div className="flex flex-col text-xs text-[var(--color-text-secondary)] font-medium gap-1">
                  <div className="flex items-end justify-end relative">
                    <div className="w-6 h-6 border-white border-[2px] overflow-hidden rounded-full -mr-1.5 bottom-0">
                      <Image
                        src={Person5}
                        alt=""
                        height={600}
                        width={600}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="w-6 h-6 border-white border-[2px] overflow-hidden rounded-full bottom-0 -mr-1.5">
                      <Image
                        src={Person3}
                        alt=""
                        height={600}
                        width={600}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="w-6 h-6 border-white border-[2px] overflow-hidden rounded-full bottom-0">
                      <Image
                        src={Person6}
                        alt=""
                        height={600}
                        width={600}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div>3 friends joined</div>
                </div>
              </div>{" "}
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full bg-white rounded-lg border-[2px] border-gray-200 flex justify-between items-center px-4 py-1.5">
                <div className="flex gap-3 h-full items-center">
                  <div className="flex rounded-full items-center">
                    <Clock className="size-6" color="#1D4ED8" />
                  </div>
                  <div className="flex flex-col text-xs font-medium text-[var(--color-text-secondary)]">
                    <p className="text-lg font-semibold">Readers Master📖</p>
                    <p>1 days 5 hours left</p>
                  </div>
                </div>
                <div className="flex flex-col text-xs text-[var(--color-text-secondary)] font-medium gap-1">
                  <div className="flex items-end justify-end relative">
                    <div className="w-6 h-6 border-white border-[2px] overflow-hidden rounded-full -mr-1.5 bottom-0">
                      <Image
                        src={Person4}
                        alt=""
                        height={600}
                        width={600}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="w-6 h-6 border-white border-[2px] overflow-hidden rounded-full bottom-0 -mr-1.5">
                      <Image
                        src={Person3}
                        alt=""
                        height={600}
                        width={600}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="w-6 h-6 border-white border-[2px] overflow-hidden rounded-full bottom-0">
                      <Image
                        src={Person1}
                        alt=""
                        height={600}
                        width={600}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div>3 friends joined</div>
                </div>
              </div>{" "}
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="w-full flex justify-center items-center mt-0.5 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={`rounded-full ${
                current === index + 1
                  ? "w-1.5 h-1.5 bg-gray-300"
                  : "w-1 h-1 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
      {/* Habits */}
      <section className="w-full h-[50vh] flex px-3 flex-col gap-1">
        <div className="flex w-full justify-between items-center font-semibold">
          <p>Challenges</p>
          <p className="uppercase text-xs font-semibold text-[var(--color-primary-dark)]">
            View all
          </p>
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          {habits.map((item, index) => (
            <div
              key={index}
              className="w-full h-16 bg-white rounded-lg border-[2px] border-gray-200 flex justify-between items-center px-4 py-1.5"
            >
              <div className="flex gap-3 h-full items-center">
                <div className="flex justify-center bg-white items-center border-[1px] border-blue-200 h-9 w-9 rounded-full">
                  {item.emoji}
                </div>
                <div className="flex flex-col text-xs font-medium text-[var(--color-text-secondary)]">
                  <p className="text-base font-semibold">{item.title}</p>
                  <p>{item.subTitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-5 text-xs text-[var(--color-text-secondary)] font-medium">
                {/* People following this habit */}
                <div className="flex items-end justify-end relative">
                  {item.peopleFollow.slice(0, 2).map((personImg, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 border-white border-[2px] overflow-hidden rounded-full -mr-1.5 bottom-0"
                    >
                      <Image
                        src={personImg}
                        alt=""
                        height={600}
                        width={600}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}

                  {item.peopleFollow.length > 2 && (
                    <div className="w-8 h-8 border-white border-[2px] bg-blue-50 text-center flex items-center justify-center overflow-hidden rounded-full bottom-0 font-semibold text-blue-600">
                      +{item.peopleFollow.length - 2}
                    </div>
                  )}
                </div>
                {/* Mark Done */}
                <div
                  className={`w-8 h-8 flex items-center justify-center text-center rounded-lg border transition-all ease-in-out duration-300 ${
                    item.completed
                      ? `border-blue-300 bg-blue-50`
                      : `border-gray-200`
                  }`}
                >
                  <Check
                    className={`size-5 ${
                      item.completed ? `text-blue-600` : `text-gray-600`
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
