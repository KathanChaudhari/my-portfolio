'use client'
import Link from "next/link";
import { Bangers } from "next/font/google"
import { useState } from "react";

const banger = Bangers({ subsets: ['latin'], weight: '400' });
function Header() {
    const [clicked, setClicked] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleLinkClick = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({ x: rect.left, y: rect.bottom });

        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 200);
    }

    return (
        <div className={` sticky p-4 bg-[#263238] border-4 border-black z-10`}>
            <div className="z-20 flex justify-end mx-10">
                <div className={`flex space-x-16 mt-2 bg-opacity-20 text-blue-600 ${banger.className}`}>
                    <span className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/">Home</Link></span>
                    <span className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/aboutme">About Me</Link></span>
                    <span className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/projects">Projects</Link></span>
                    <span className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/skills">Skills</Link></span>
                    <span className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/blogs">Blogs</Link></span>
                </div>
            </div>
            {clicked &&
                <div className="absolute z-50 p-2 bg-white rounded-full" style={{ left: position.x , top: position.y }}>
                    <p className={`text-black font-bold text-sm ${banger.className} `}>CLICKED!</p>
                </div>
            }
        </div>
    );
}


export default Header;
