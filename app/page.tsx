"use client";

import PointCounter from "./components/pointCounter";
import { useGameStore } from "@/store/game";
import Image from "next/image";
import { useEffect, useState } from "react";
import RuleBtn from "./components/rule";

export default function Home() {
  const isPicked = useGameStore((state) => state.isPicked);
  const setIsPicked = useGameStore((state) => state.setIsPicked);
  const picked = useGameStore((state) => state.pickedItem);
  const addPoint = useGameStore((state) => state.addPoints);
  const setPicked = useGameStore((state) => state.setPickedItem);
  const points = useGameStore((state) => state.points);
  const [isLoading, setIsLoading] = useState(true);
  const [housePick, setHousePick] = useState("");
  const [isWinner, setIsWinner] = useState<boolean | null>(null);

  const handlePick = (pick: string) => {
    console.log(pick);
    setIsLoading(true);
    setIsPicked(true);
    setPicked(pick);
    const housePick = ["rock", "paper", "scissors"];
    const randomPick = housePick[Math.floor(Math.random() * housePick.length)];
    setHousePick(randomPick);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) handleCheckWinner();
  }, [isLoading, housePick, picked]);

  const handleCheckWinner = () => {
    if (picked === housePick) {
      setIsWinner(null);
    } else if (
      (picked === "rock" && housePick === "scissors") ||
      (picked === "scissors" && housePick === "paper") ||
      (picked === "paper" && housePick === "rock")
    ) {
      addPoint(1);
      setIsWinner(true);
    } else {
      if (points > 0) addPoint(-1);
      setIsWinner(false);
    }
  };

  const handleReset = () => {
    setIsPicked(false);
    setIsWinner(null);
  };
  return (
    <div className=" w-full h-full justify-between flex sm:py-28 py-14 flex-col items-center">
      <PointCounter />
      {!isPicked ? (
        <div
          style={{ backgroundImage: `url(/images/bg-triangle.svg)` }}
          className="sm:w-96 sm:h-96 w-[16rem] h-[16rem] flex flex-col relative bg-contain bg-center bg-no-repeat"
        >
          <button
            onClick={() => handlePick("paper")}
            className=" sm:size-[13rem] size-[9rem] absolute top-[-60px] left-[-60px] rounded-full flex justify-center border-b-[10px] items-center bg-gradient-to-r from-[hsl(230,89%,62%)] border-indigo-700 to-[hsl(230,89%,65%)]"
          >
            <div className=" absolute sm:size-[10.5rem] h-[7rem] w-[7rem] border-t-[10px] bg-white rounded-full" />
            <Image
              src="/images/icon-paper.svg"
              alt="Paper"
              width={80}
              height={80}
              className=" z-10 sm:w-[80px] w-[50px] sm:h-[80px] h-[50px]"
            />
          </button>
          <button
            onClick={() => handlePick("scissors")}
            className=" sm:size-[13rem] size-[9rem] absolute border-b-[10px] top-[-60px] right-[-60px] rounded-full flex justify-center items-center bg-gradient-to-r from-[hsl(390,89%,49%)] border-amber-700 to-[hsl(40,84%,53%)]"
          >
            <div className=" absolute sm:size-[10.5rem] h-[7rem] w-[7rem] border-t-[10px] bg-white rounded-full" />
            <Image
              src="/images/icon-scissors.svg"
              alt="Scissors"
              width={80}
              height={80}
              className=" z-10 sm:w-[80px] w-[50px] sm:h-[80px] h-[50px]"
            />
          </button>
          <button
            onClick={() => handlePick("rock")}
            className=" sm:size-[13rem] size-[9rem] absolute border-b-[10px] bottom-[-60px] right-0 left-0 mx-auto rounded-full flex justify-center items-center bg-gradient-to-r from-[hsl(349,71%,52%)] border-rose-700 to-[hsl(349,70%,56%)]"
          >
            <div className=" absolute sm:size-[10.5rem] h-[7rem] w-[7rem] border-t-[10px] bg-white rounded-full" />
            <Image
              src="/images/icon-rock.svg"
              alt="Rock"
              width={80}
              height={80}
              className=" z-10 sm:w-[80px] w-[50px] sm:h-[80px] h-[50px]"
            />
          </button>
        </div>
      ) : (
        <div className=" flex justify-between relative w-[70rem]">
          <div className=" flex flex-col items-center gap-y-24">
            <h1 className=" text-3xl">YOU PICKED</h1>
            <div className=" flex  items-center gap-y-10">
              {isWinner && (
                <>
                  <div className=" size-[19.5rem] absolute bg-white/15 rounded-full scale-[1.65]" />
                  <div className=" size-[19.5rem] absolute bg-white/10 rounded-full scale-[2.15]" />
                  <div className=" size-[19.5rem] absolute bg-white/5 rounded-full scale-[2.7]" />
                </>
              )}
              <div
                className={` size-[19.5rem] bg-black border-b-[15px] rounded-full flex justify-center items-center ${
                  picked === "scissors"
                    ? "bg-gradient-to-r from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)] border-amber-700"
                    : picked === "rock"
                    ? "bg-gradient-to-r from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)] border-rose-700"
                    : "bg-gradient-to-r from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] border-indigo-700"
                }`}
              >
                <div className=" size-[15rem] bg-white border-t-[10px] absolute rounded-full" />
                <Image
                  src={`/images/icon-${picked}.svg`}
                  alt={picked}
                  width={80}
                  height={80}
                  className=" z-10"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-y-24">
            <h1 className=" text-3xl">THE HOUSE PICKED</h1>
            <div className=" flex flex-col items-center gap-y-10">
              {!isWinner && (
                <>
                  <div className=" size-[19.5rem] absolute bg-white/15 rounded-full scale-[1.65]" />
                  <div className=" size-[19.5rem] absolute bg-white/10 rounded-full scale-[2.15]" />
                  <div className=" size-[19.5rem] absolute bg-white/5 rounded-full scale-[2.7]" />
                </>
              )}
              <div
                className={` size-[19.5rem] z-10 rounded-full ${
                  !isLoading && "border-b-[15px]"
                } flex justify-center items-center ${
                  !isLoading
                    ? housePick === "scissors"
                      ? "bg-gradient-to-r from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)] border-amber-700"
                      : housePick === "rock"
                      ? "bg-gradient-to-r from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)] border-rose-700"
                      : "bg-gradient-to-r from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] border-indigo-700"
                    : " bg-transparent "
                }`}
              >
                <div
                  className={` size-[15rem]  ${
                    !isLoading ? "border-t-[15px] bg-white " : " bg-black/20"
                  }  absolute rounded-full`}
                />
                {!isLoading && (
                  <Image
                    src={`/images/icon-${housePick}.svg`}
                    alt={picked}
                    width={80}
                    height={80}
                    className=" z-10"
                  />
                )}
              </div>
            </div>
          </div>
          <div className=" absolute left-0 right-0 mx-auto w-max bottom-0 my-auto h-max top-0 flex flex-col items-center gap-y-5">
            {isWinner === null ? (
              <h1 className=" font-bold text-5xl">DRAW</h1>
            ) : isWinner ? (
              <h1 className=" font-bold text-5xl">YOU WIN</h1>
            ) : (
              <h1 className=" font-bold text-5xl">YOU LOSE</h1>
            )}
            <button
              onClick={() => handleReset()}
              className=" bg-white tracking-widest text-black hover:text-red-500 transition-colors px-20 py-4 rounded-md"
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
      <RuleBtn />
    </div>
  );
}
