"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { audiowide } from "../lib/fonts";

const Frontpage : React.FC = () => {
    const words = [
        {
          text: "Hi,",
        },
        {
          text: "my",
        },
        {
          text: "name",
        },
        {
          text: "is",
        },
        {
          text: "Satvik .",
          className: "text-[#53FFE5] dark:text-[#53FFE5]",
        },
      ];
    return (
        <div className="pl-50 pt-53 pb-48">
            <TypewriterEffectSmooth words={words}/>
            <div  className={`text-gray-400 max-w-2xl mt-4 text-justify font-bold text-[20px] ${audiowide.className}`}>
                I&apos;m a full-stack developer and machine learning enthusiast with a strong knack for problem solving. I enjoy tackling real-world challenges through code and continuously learning to build efficient, reliable solutions across various technologies.
            </div>
        </div>
        
    )
}
export default Frontpage
