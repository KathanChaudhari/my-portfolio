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
        <div style={{ padding: '16px', backgroundColor: '#263238', border: '4px solid black', zIndex: 50 }}>
    <div className={`${banger.className}`} style={{ width: '100%', justifyContent: 'flex-end', padding: '0 40px', display: 'flex', marginTop: '8px', color: '#007bff' } }>
        <span style={{ cursor: 'pointer', marginRight: '24px' }} onClick={(e) => handleLinkClick(e)}><Link href="/">Home</Link></span>
        <span style={{ cursor: 'pointer', marginRight: '24px' }} onClick={(e) => handleLinkClick(e)}><Link href="/aboutme">About Me</Link></span>
        <span style={{ cursor: 'pointer', marginRight: '24px' }} onClick={(e) => handleLinkClick(e)}><Link href="/projects">Projects</Link></span>
        <span style={{ cursor: 'pointer', marginRight: '24px' }} onClick={(e) => handleLinkClick(e)}><Link href="/skills">Skills</Link></span>
        <span style={{ cursor: 'pointer', marginRight: '24px' }} onClick={(e) => handleLinkClick(e)}><Link href="/blogs">Blogs</Link></span>
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
