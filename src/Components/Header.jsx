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
        <header className={` sticky p-4 bg-[#263238] border-4 border-black z-10`}>
            <nav className="z-20 flex justify-end mx-10">
                <ul className={`flex space-x-16 mt-2 bg-opacity-20 text-blue-600 ${banger.className}`}>
                    <li className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/">Home</Link></li>
                    <li className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/aboutme">About Me</Link></li>
                    <li className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/projects">Projects</Link></li>
                    <li className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/skills">Skills</Link></li>
                    <li className="cursor-pointer" onClick={(e) => handleLinkClick(e)}><Link href="/blogs">Blogs</Link></li>
                </ul>
            </nav>
            {clicked &&
                <div className="absolute z-50 p-2 bg-white rounded-full" style={{ left: position.x , top: position.y }}>
                    <p className={`text-black font-bold text-sm ${banger.className} `}>CLICKED!</p>
                </div>
            }
        </header>
    );
}


export default Header;
