"use client";

import Image from "next/image";
import { useState } from "react";

export default function RuleBtn() {
  const [showRules, setShowRules] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowRules(true)}
        className="bg-blue-500 border sm:absolute bottom-8 right-8 bg-transparent text-white  py-2 px-10 rounded-xl"
      >
        RULES
      </button>
      {showRules && (
        <div className=" absolute z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
          <div className=" bg-white gap-y-14 w-full sm:w-[30rem] h-full sm:h-[30rem] sm:rounded-xl flex flex-col items-center justify-start sm:p-10 p-20">
            <div className=" flex sm:flex-row flex-col items-center justify-between w-full h-full sm:h-max">
              <h1 className=" text-darkText text-3xl font-bold">RULES</h1>
              <button onClick={() => setShowRules(false)}>
                <Image
                  src="/images/icon-close.svg"
                  width={20}
                  height={20}
                  alt="close"
                />
              </button>
            </div>
            <Image
              src="/images/image-rules.svg"
              width={330}
              height={330}
              alt="rules"
              className=" absolute top-0 bottom-0 my-auto left-0 right-0 mx-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
