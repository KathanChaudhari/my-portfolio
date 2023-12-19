'use client'
import Head from "next/head";

import { Bangers } from "next/font/google";

const banger = Bangers({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <Head>
        <title>Full-stack developer </title>
        <meta name="description" content="Your Portfolio Description" />
      </Head>
      <section className="hero h-screen flex  w-full justify-center items-center text-center" 
               style={{ 
                 backgroundImage: 'url(/bg1.jpg)', 
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center center',
                 
               }}>
        <div className={`${banger.className} ml-[15%] bg-white max-w-[50%]  px-8 py-4 rounded-xl border-2 border-black shadow-2xl`}>
          <h1 className="text-xl ">Full Stack Developer</h1>
          <p className="text-sm mb-2">(React, Next, Node.js)</p>
          <p className="text-base mb-2 " >
            Building the Future, One Line at a Time.
          </p>
          <div className="text-base font-sans mb-4">
  <ul className="list-disc text-start  pl-4">
    <li>Over 2 years of web development experience at a startup.</li>
    <li>Worked with a diverse team and as a freelancer (part-time) for a US startup, building a website they loved.</li>
    <li>Passionate about problem-solving, I thrive on learning and exploring new technologies.</li>
    <li>When I commit to a project, I see it through to completion, no matter the challenges.</li>
    <li>You maybe prefer experienced, But my youth brings flexibility and adaptability to every project.</li>
  </ul>
</div>
        </div>
        <div className="flex h-[80%] ml-10 justify-start">
        <img src="/boy.png"  className=""/>
        </div>
      </section>
    </div>
  );
}
