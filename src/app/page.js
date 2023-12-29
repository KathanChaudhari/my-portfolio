'use client'
import Head from "next/head";

import { Bangers } from "next/font/google";
import Image from "next/image";
const banger = Bangers({ subsets: ['latin'], weight: '400' });
import FluidSimulation from "fluid-simulation-react"

export default function Home() {
   const customColors = [
    [1, 1, 0], // Yellow
    [0, 1, 1]  // Cyan
  ];
  return (
    <div className="h-full overflow-hidden">
      <Head>
        <title>Full-stack developer </title>
        <meta name="description" content="Your Portfolio Description" />
      </Head>
      {/* <FluidSimulation color={customColors}/> */}
      <section className="hero h-screen flex w-full justify-center items-center text-center relative">
  <div className="absolute top-0 left-0 w-full h-full -z-10">
    <Image
      src="/bg1.jpg"
      width={1000}
      height={1000}
      alt="Background" 
      className="h-full object-fill w-full -z-20"
    />
  </div>
        <div className={`${banger.className} ml-[15%] bg-white max-w-[50%]  px-8 py-4 rounded-xl border-2 border-black shadow-2xl`}>
          <h1 className="text-xl ">Full Stack Developer</h1>
          <p className="text-sm mb-2">(React, Next.js, Node.js)</p>
          <p className="text-base mb-2 " >
            Building the Future, One Line at a Time.
          </p>
          <div className="text-base font-sans mb-4">
  <ul className="list-disc text-start  pl-4">
    <li>Over 2 years of web development experience at a startup.</li>
    <li>Contributor to open-source with a self-developed <b>npm package</b>, and an avid <b>blogger</b> sharing insights and techniques from my web development projects.</li>
    <li>Worked with a diverse team and as a freelancer (part-time) for a <b>US startup,</b> building a website they loved.</li>
    <li>Passionate about problem-solving, I thrive on learning and exploring new technologies.</li>
    <li>When I commit to a project, I see it through to completion, no matter the challenges.</li>
    <li>You maybe prefer experienced, But I brings <b>flexibility</b> and adaptability to every project.</li>
  </ul>
</div>
        </div>
        <div className="flex h-[80%] ml-10 justify-start">
        <Image src="/boy.png" width={300} height={400} alt="boy" className=""/>
        </div>
      </section>
    </div>
  );
}
