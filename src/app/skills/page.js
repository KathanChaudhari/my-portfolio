'use client'
import React, { useState } from 'react';
import { Literata } from "next/font/google";
import { Crimson_Text } from "next/font/google";

const literata = Literata({ subsets: ['latin'], weight: '400' });
const crimson = Crimson_Text({ subsets: ['latin'], weight: '400' });

function Skills() {
    const skills = {
        fundamental: {
            name: "Web Development",
            description: "The art and science of building the web. It includes everything from creating simple static web pages to complex dynamic web applications."
        },
        specialized: [
            { name: "React", description: "A JavaScript library for building user interfaces. It allows for creating reusable UI components." },
            { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for building scalable network applications." },
            { name: "GraphQL", description: "A query language for your API, and a runtime for executing those queries with your existing data." },
            { name: "TypeScript", description: "A superset of JavaScript that adds optional static typing. It helps catch issues early and enhances the development experience." },
            { name: "mongoDB", description: "A NoSQL database that uses JSON-like documents with optional schemas." },
            { name: "Next.js", description: "A React framework that enables server-side rendering and generating static websites for React based web applications." }
        ]
    };

    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section id="skills" className={`relative h-full flex ${crimson.className}`}>
        <div className="background-layer"></div>
            <div className="relative w-full ">

                <div 
                    className="absolute top-[30%] left-[28%] -translate-x-50% -translate-y-50% w-40 h-40 rounded-full bg-[#FFD700] text-white text-center flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
                    onMouseEnter={() => setHoveredSkill(skills.fundamental)}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    {skills.fundamental.name}
                </div>

                {skills.specialized.map((skill, index) => {
                    const leftPos = `calc(30% + ${Math.cos((index * 2 * Math.PI) / skills.specialized.length) * 200}px)`;
                    const topPos = `calc(35% + ${Math.sin((index * 2 * Math.PI) / skills.specialized.length) * 200}px)`;

                    return (
                        <div 
                            key={index}
                            className={`absolute w-24 h-24 rounded-full bg-[#32CD32] text-white flex items-center justify-center cursor-pointer transition-transform transform hover:scale-110 ${hoveredSkill && hoveredSkill.name === skill.name ? 'shadow-lg' : ''}`}
                            style={{ left: leftPos, top: topPos }}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            {skill.name}
                        </div>
                    );
                })}

                {/* Skill Details */}
                {hoveredSkill && (
                    <div className="absolute right-10 top-10 w-1/4 min-h-1/4 bg-white p-4 border border-gray-300 rounded-md shadow-lg">
                        <h3 className="font-bold mb-2">{hoveredSkill.name}</h3>
                        <p>{hoveredSkill.description}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Skills;
