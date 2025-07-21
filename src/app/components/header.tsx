import React from "react"
import { inter } from "../lib/fonts"
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { orbitron } from "../lib/fonts";
import { MdEmail } from "react-icons/md";

const Navitems = [
    {number:'01',name:'Home',href:'#home'},
    {number:'02',name:'About',href:'#about'},
    {number:'03',name:'Experience',href:'#exp'},
    {number:'04',name:'Certifications',href:'#cert'},
    {number:'05',name:'Projects',href:'#proj'},
]
const Header: React.FC = () => {
    return (
        <>
        <div className="flex pl-8 pr-8 pt-4 fixed top-0 left-0 w-full z-50 bg-[#0A0F1A]">
        
            <div>
                <img src='\logo.png' className="hover:scale-110 transition w-18 "></img>
            </div>
            <div className={`flex gap-8 items-center pl-24 ${inter.className}`}>
                {Navitems.map((item,index) => (
                    <a key={index} href={item.href} className="group transition text-inherit no-underline">
                        <span className={`text-[#53FFE5] ${orbitron.className}`}>{item.number}.</span>
                        <span className={`text-[#AEB9D3] group-hover:text-white pl-2 ${orbitron.className}`}>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
        <div className="fixed bottom-0 left-14 flex flex-col items-center gap-4 text-[#53FFE5] z-100">
        <a href="https://leetcode.com/u/satvikvinoth272/"  target="_blank" className="hover:scale-110 transition pt-2 text-[#53FFE5]">   <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg></a>
        <a href="https://www.linkedin.com/in/satvik-vinoth/" target="_blank" className="hover:scale-110 transition pt-2"><FaLinkedinIn size={20} /></a>
        <a href="https://github.com/satvik-vinoth" target="_blank" className="hover:scale-110 transition pt-2"><FaGithub size={20} /></a>
        <a href="mailto:satvikvinoth272@gmail.com" className="hover:scale-110 transition pt-2 text-[#53FFE5]"><MdEmail size={20} /></a>

        <div className="border-l-2 border-[grey] h-34 mt-4"></div>
        </div>

        <div className="fixed top-0 right-14 flex flex-col items-center gap-4 text-[#53FFE5] z-100">
        <div className="border-l-2 border-[grey] h-34 md-4"></div>
        <a href="mailto:satvikvinoth272@gmail.com" 
            className="tracking-wider cursor-pointer hover:text-white"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            satvikvinoth272@gmail.com
        </a>        
        </div>
        <div className="fixed bottom-10 right-14">
            <a href="https://drive.google.com/file/d/17mzIwEAl1-FwG1uGfJfQArE-AVVcjPaM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className={` hover:scale-110 transition cursor-pointer px-4 py-2 bg-[#53FFE5] text-black rounded ${orbitron.className}`}>
                Resume
            </button>
            </a>
        </div>
        </>
    )
}
export default Header;