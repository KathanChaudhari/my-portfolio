'use client'
import Link from "next/link";
import { Bangers } from "next/font/google"
import { useState } from "react";
import { BsLayoutSidebar, BsX } from "react-icons/bs";

const banger = Bangers({ subsets: ['latin'], weight: '400' });
function Header() {
    const [clicked, setClicked] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const handleLinkClick = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({ x: rect.left, y: rect.bottom });

        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 200);
    }

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
    };
    return (
        <div style={{ padding: '16px', backgroundColor: '#263238', border: '4px solid black', zIndex: 50 }}>
            <button className={`flex w-full justify-end text-white md:hidden ${banger.className}`} onClick={toggleMobileMenu} >
            <BsLayoutSidebar />
            </button>
            {isMobileMenuOpen && (
                <div className="h-full w-full flex flex-col top-0 left-0 bg-blue-400 text-white font-semibold justify-center items-center gap-6 text-3xl" style={{ position: 'absolute', width: '100%', zIndex: 100 }}>
                    <button className="absolute top-6 right-6 bg-blue-700 rounded-full" onClick={toggleMobileMenu}>
                        <BsX style={{ color: 'white', fontSize: '30px' }} />
                    </button>
                    <Link href="/" onClick={handleMobileLinkClick}>Home</Link>
                    <Link href="/aboutme" onClick={handleMobileLinkClick}>About Me</Link>
                    <Link href="/projects" onClick={handleMobileLinkClick}>Projects</Link>
                    <Link href="/skills" onClick={handleMobileLinkClick}>Skills</Link>
                    <Link href="/blogs" onClick={handleMobileLinkClick}>Blogs</Link>
                </div>
            )}
    <div className={`hidden md:flex ${banger.className}`} style={{ width: '100%', justifyContent: 'flex-end', padding: '0 40px', marginTop: '8px', color: '#007bff' } }>
        <span style={{ cursor: 'pointer', marginRight: '40px' }} onClick={(e) => handleLinkClick(e)}><Link href="/">Home</Link></span>
        <span style={{ cursor: 'pointer', marginRight: '40px' }} onClick={(e) => handleLinkClick(e)}><Link href="/aboutme">About Me</Link></span>
        <span style={{ cursor: 'pointer', marginRight: '40px' }} onClick={(e) => handleLinkClick(e)}><Link href="/projects">Projects</Link></span>
        <span style={{ cursor: 'pointer', marginRight: '40px' }} onClick={(e) => handleLinkClick(e)}><Link href="/skills">Skills</Link></span>
        <span style={{ cursor: 'pointer', marginRight: '40px' }} onClick={(e) => handleLinkClick(e)}><Link href="/blogs">Blogs</Link></span>
    </div>
    
    {clicked &&
        <div style={{ position: 'absolute', zIndex: 50, padding: '8px', backgroundColor: 'white', borderRadius: '9999px', left: position.x, top: position.y }}>
            <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>CLICKED!</p>
        </div>
    }
</div>

    );
}


export default Header;
