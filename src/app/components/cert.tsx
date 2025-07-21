"use client";

import { orbitron } from "../lib/fonts";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FiExternalLink,FiX } from "react-icons/fi";
import { useState } from "react";

const Cert : React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const certifications = [
        {
            number:"01",
          image: "/aws-certified.png",
          title: "AWS Certified Solutions Architect Associate",
        },
        {
            number:"02",
            image: "/ibm-fullstack.png",
            title: "IBM Full Stack Software Developer",
        },
        {
            number:"03",
            image: "/angular.jpg",
            title: "Learning Angular",
        },
        {
            number:"04",
            image: "/Defy 3rd Place Winner.jpg",
            title: "Defy Hackathon 3rd Place Winner",
        },
        {
            number:"05",
            image: "/sql.png",
            title: "SQL for Data Science",
        },
        {
            number:"06",
            image: "/conser.png",
            title: "Conservation Economics",
        },
        {
            number:"07",
            image: "/wild.png",
            title: "Wild Life Ecology",
        },
        {
            number:"08",
            image: "/privacy.png",
            title: "Privacy and Security in Online Social Media",
        },


      ];
      
    return (
        <div className="pl-50 pb-20 pt-23 max-w-5xl">
            <span className={`text-[#53FFE5]  text-4xl ${orbitron.className}`}>03.</span>
            <span className={`text-gray-300  text-4xl  group-hover:text-white pl-2 ${orbitron.className}`}>Certifications and Achievements</span>
            <div className="pt-10 pb-10">
                {
                    certifications.map((item,index) => (
                        <div key={index} className="pl-8 pt-2 flex text-xl">
                            <span  className={`text-gray-300 w-12 ${orbitron.className}`}>{item.number}.</span>
                            <p className="text-gray-400 pl-5">{item.title}</p>
                        </div>
                    ))
                }

            </div>
            <div>
                <div className="flex justify-end">
                <button
                    onClick={() => setShowPopup(true)}
                    className="ml-3 text-[#53FFE5] hover:text-white transition cursor-pointer"
                    aria-label="Open certifications popup"
                >
                    <FiExternalLink size={22} />
                </button>
                </div>
                <InfiniteMovingCards
                    items={certifications}
                    direction="right"
                    speed="normal"
                />
            </div>
            {showPopup && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
                <div className="bg-gray-900 p-6 rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto scrollbar-hidden">
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl text-white font-semibold">All Certifications</h2>     
                    <button
                        onClick={() => setShowPopup(false)}
                        className="text-white hover:text-red-400 transition"
                    >
                        <FiX size={24}/>
                    </button>               
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {certifications.map((cert, index) => (
                        <div key={index} className=" pl-2 pr-2 pb-4 rounded-lg shadow text-center">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-75 h-60 object-contain "
                        />
                        <p className="text-white text-sm">{cert.title}</p>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            )}

        </div>
    )
}
export default Cert;