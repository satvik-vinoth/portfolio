"use client"
import { audiowide, orbitron } from "../lib/fonts"
import {CardContainer, CardItem } from "../components/ui/3d-card";

const About : React.FC = () => {
    return (
        <div className="pl-50 pb-20 pt-23" >
            <div className="flex items-center">
            <span className={`text-[#53FFE5]  text-4xl ${orbitron.className}`}>01.</span>
            <span className={`text-gray-300  text-4xl group-hover:text-white pl-2 ${orbitron.className}`}>About Me</span>
            </div>
            <div   className={`text-gray-400 pt-10 font-bold text-[20px] text-justify max-w-2xl ${audiowide.className}`}>
                <CardContainer className="inter-var">
                
                <CardItem translateZ="100" className="w-full ">
                <img src="/satvik1.jpg" className="float-left w-[300px] h-auto mr-6 mb-4" />
                </CardItem>
                </CardContainer>
                <p>
                    Hello! I&apos;m Satvik, a final-year B.Tech Computer Science student at VIT, Chennai with a CGPA of <span className="text-[#53FFE5]">9.31 </span>. I&apos;m a full-stack developer and machine learning enthusiast with a strong passion for problem solving. Over the past few years, I&apos;ve worked on a variety of projects from intelligent chatbots to scalable web apps honing my skills in both software development and AI.
                </p>

                <p className="pt-4">
                    I enjoy diving deep into new technologies, participating in hackathons, and collaborating on innovative ideas. I&apos;m also actively exploring areas like Generative AI, system design, and cloud-native development.
                </p>
                </div>

        </div>
    )
}
export default About