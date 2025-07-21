"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { orbitron } from "../lib/fonts"


const Experience : React.FC = () => {
    const [active, setActive] = useState("optus");
    const companies = [
        { id: "optus", label: "Optus Intelligence" },
        { id: "srip", label: "SRIP" },
      ];
      
      const details : Record<string, { role: string; company: string; date: string; points: string[] }> = {
        optus: {
          role: "Web Development Intern",
          company: "Optus Intelligence",
          date: "3rd June 24 - 31st July 24",
          points: [
            "Designed and launched a user-centric, responsive website.",
            "Collaborated with the design team to implement the company’s branding and visual identity on the website.",
          ],
        },
        srip: {
          role: "Research Intern",
          company: "VIT Chennai",
          date: "June 2024 - July 2024",
          points: [
            "Worked on a project Automated Evaluation System which was supported by Ministry of Electronics and Information Technology (MeitY),Government of India.",
            "Developed a novel solution for predicting the number of paraphrases a sentence can generate using a customized BERT-based approach integrated with linguistic features.",
          ],
        },
      };
    const selected = details[active];
    return (
        <div className="pl-50 pb-20 pt-23 max-w-2xl">
            <span className={`text-[#53FFE5]  text-4xl ${orbitron.className}`}>02.</span>
            <span className={`text-gray-300  text-4xl group-hover:text-white pl-2 ${orbitron.className}`}>Experience</span>
            <div className="flex gap-8 pt-15">

            <div className="flex flex-col  pl-4 ">
                {companies.map((c) => (
                <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`py-2 px-4 text-left transition cursor-pointer
                    ${
                    active === c.id
                        ? "text-[#53FFE5] border-l-2 border-[#53FFE5]"
                        : "text-gray-300 border-l-2 border-transparent hover:text-[#53FFE5] hover:border-[#53FFE5]"
                    }`}
                >
                    {c.label}
                </button>
                ))}
            </div>

            <div className="w-full">
                <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-xl font-bold text-gray-200">
                    {selected.role}{" "}
                    </h2>
                    <span className="text-[#53FFE5]">@ {selected.company}</span>
                    
                    <p className="text-gray-400 text-sm mb-4">{selected.date}</p>

                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {selected.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                    </ul>
                </motion.div>
                </AnimatePresence>
            </div>

            </div>
        </div>
    )
}
export default Experience