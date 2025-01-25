"use client";

import { useGameStore } from "@/store/game";
import Image from "next/image";

export default function PointCounter() {
  const points = useGameStore((state) => state.points);
  return (
    <div className="border-[3px] sm:h-[10rem] h-[8rem] rounded-xl border-opacity-20 border-white sm:w-[50rem] w-[90%] flex items-center justify-between">
      <Image
        src="/images/logo.svg"
        width={200}
        height={200}
        alt="logo"
        className=" sm:pl-5 pl-7 sm:w-[200px] w-[130px] sm:h-auto h-auto"
      />
      <div className=" flex flex-col items-center sm:h-[8rem] h-[6rem] w-sm:[12rem] w-[7rem] rounded-xl justify-center bg-white text-black sm:mr-6 mr-3">
        <h1 className=" text-sm font-bold tracking-wider text-scoreText">
          SCORE
        </h1>
        <p className=" sm:text-7xl text-6xl font-bold text-headerOutline">
          {points}
        </p>
      </div>
    </div>
  );
}
