import React from 'react';
import Link from 'next/link';
import { Orbitron } from "next/font/google"
import Image from 'next/image';

const orbitron = Orbitron({ subsets: ['latin'], weight: '400' });

function Projects() {
    const projects = [
        {
            id:1,
            title: "GoSign.AI",
            tagline: "Multiplayer web-base game plust AI chat bot build using Next.js.",
            image: "/gosign.png"
        },
        {
            id:2,
            title: "Clay Studios",
            tagline: "A website for design agency.",
            image: "/clay.png"
        },
        {
            id:3,
            title: "Ludo rockland",
            tagline: "A landing page for ludo rockland mobile app.",
            image: "/ludorockland.png"
        },
        {
            id:4,
            title: "immersfy",
            tagline: "AI based story telling platform.",
            image: "/immersfy.png"
        },
        {
            id:5,
            title: "Stable pay ",
            tagline: "Admin panel of stable pay.",
            image: "/stablepayadmin.png"
        },,
    ];

    return (
        <section id="Project" className={`h-full p-8 text-white bg-cover bg-center ${orbitron.className}`} >
             <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Image
        src="/projectbg.png"
        width={1000}
        height={1000}
        alt="Background"
        className='h-full w-full'
      />
    </div>
    <h2 className="text-2xl font-bold mb-4">Now Showing</h2>
    <div className="h-[75vh] pr-7 p-4 grid grid-cols-3 gap-6 overflow-y-scroll no-scrollbar">
        {projects.map((project, index) => (
            <Link href={`/projects/projects?id=${project.id}`} key={project.id}>
                <div className=" border-4 h-[100%] text-black bg-white bg-opacity-50 shadow-lg rounded-md overflow-hidden hover:scale-105 transition-transform duration-300 transform">
                    <Image src={project.image} alt={project.title} height={300} width={400} className="w-full h-[70%] opacity-80" />
                    <h3 className="p-2">{project.title}</h3>
                    <p className="p-2">{project.tagline}</p>
                </div>
            </Link>
        ))}
    </div>
</section>
    )
}

export default Projects;
