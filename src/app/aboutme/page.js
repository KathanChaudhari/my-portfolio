'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const chapters = [
  {
    title: "TL;DR",
    content: (
      <p>
<span className='font-semibold'>🔧 Professional Background</span>: I'm a full-stack developer with over 2 years of experience, skilled in React, Node.js, and Next.js. My project portfolio ranges from fun endeavors like creating a "Ludo-Rock Land" using three.js to challenging tasks like integrating MediaPipe and developing WebGL fluid simulations. — a domain I was initially unfamiliar with.
<br />
<br />
<span className='font-semibold'>🎬📚 Personal Interests</span>: Outside of coding, I like watching movies, anime, and TV shows. Additionally, I have a deep affection for reading, especially books and novels. Fiction, particularly those imbued with magic, captivates me the most.
<br />
<br />
<span className='font-semibold'>🌍 Continuous Learner</span>: Curiosity drives me. I consistently explore and learn, always on the lookout for something new to dive into.
<br />
<br />
<span className='font-semibold'>✍️ Hidden Talent</span>: While I won't claim to be Shakespeare, I do enjoy writing from time to time.
<br />
<br />
<span className='font-semibold'>🏅 Sports </span>: While I might not excel at physical sports, I'm quite the contender in indoor games like chess, cards, and board games. I'm also a sports aficionado, tuning in to watch F1, golf, tennis, cricket, ice-skating, and more. Big tournaments, regardless of the sport, always captivate me.
<br />
<br />
<span className='font-semibold'>💡 Philosophy</span>: While money plays its role, the memories and moments I create hold the utmost significance in the grand narrative of my life.
<br />
<br />
<span className='font-semibold'>Thank you for getting to know a bit about me :)</span>
        
      </p>
    )
  },
  {
    title: "Prologue: Curiosity to Creation",
    content: (
      <p>
<p>
I am not accidental full-stack developer; it started with a question: how do these websites work? curiosity led me straight into web development. I chose to learn JavaScript because I wanted to understand the magic behind web pages.
</p><br /><p>
When I first encountered React.js, it felt like a puzzle(more like spaghetti). It was new and challenging, not just another tool but a whole new way of thinking for me. I dived into it, and slowly, it started making sense. It was like learning to speak a language that could turn ideas into something real and functional(on the webofc).
</p><br /><p>
Working on projects, either for clients or just for myself where I really learned the ropes. Each project was a new adventure. Some seemed easy at first but got tricky as I dug deeper. But that's how I grew — tackling one challenge at a time.
</p><br /><p>
My love for movies and anime also played a part. They kept my creativity alive and helped me think outside the box when solving problems. then there's writing — what started as a hobby became a way to share my experiences and connect with others.
</p><br />
<p>Now, as I keep moving forward in tech, my goal is simple: keep creating, keep learning, and enjoy every bit of it. Every project is a piece of my story, from a curious kid in a village to a developer exploring the endless possibilities of the digital world.</p>
  </p>
    )
  },
  {
    title: "Chapter 1: Me, from Childhood to College",
    content: (
      <p>
       <p> My story begins at my grandparents' home, where I spent my early years. Where I used computer for first time. Even, just for playing GTA. IT was fun!! and that's how my curipsity grew.
       </p><br /><p>
As I grew older, I got passionate for mathematics. It was a subject that seemed to understand me, a language of logic and problem-solving that I naturally like. My parents, both teachers, made me disciplined chiled from a young age. This helped me balance my growing interest in computer games and my academic responsibilities.
</p><br /><p>
Life took a significant turn when we moved from our village to the city, and then to a bigger city. Each move brought new experiences and exposed me to diverse cultures. As an only child, I never experienced the loneliness of leaving home since my family always moved together. But with each relocation, I found myself adapting to new environments, each with its unique challenges and opportunities.
</p><br /><p>
The most profound change came with my friends in the big city. I was a curious kid, always asking "why" and "how." This curiosity grew as I did, with likeminded friends that challenged me to think differently and embrace a broader perspective.
</p><br /><p>
School wasn't always easy for me. As an introverted student, I faced hurdles in communication and social interaction. However, as I grew older, I learned to open up, to express myself better, and to adapt to new situations. This personal growth was as important as my academic achievements.
</p><br /><p>
My journey into computer science was almost written in the stars(lol! what a line, it was only thing I knew! so..). My fascination with computer games, combined with my love for mathematics, made it a natural choice for my college major. College was where the pieces started to come together. I delved into languages, networks, and the learned how websites were created. Initially, I dreamt of starting my own company, but without clear guidance, it felt like shooting in the dark.
</p><br /><p>
Then came COVID, an unexpected twist that brought me back to my village. This period was a blend of introspection and relaxation — devouring novellas, binge-watching anime, and taking a break from the relentless pursuit of career goals. It was a much-needed pause, a time to recharge and refocus.
</p><br /><p>
As the world started to find its rhythm again, so did I. My interest in React.js and full-stack development took center stage. This marked the beginning of a new chapter in my life, one where my passion for technology and my journey so far would converge into a path that I now walk as a full-stack developer.
</p><br />
      </p>
    )
  },
  
  {
    title: "Chapter 2: Coding the magic",
    content: (
      <p>
        <p>
       My journey in the world of coding began with curiosity. As a college student, I dabbled in C++, Java, and even Python, each language offering a glimpse into the vast universe of programming. Python was fun, especially with projects and leetcode challenges, but it didn’t quite stick. Then, there was a phase of fascination with Unity for game development and a deep dive into networking and cybersecurity, exploring vulnerabilities and completing security labs. It was a wild ride, filled with learning and discovery.
       </p><br /><p>
But the true game-changer was JavaScript. It started with a friend's suggestion to try React.js. He promised it would be a learning opportunity and a chance to earn while doing so. How could I say no? With my background in various programming languages, picking up React.js felt natural. It’s been two years since, and what a ride it’s been!
</p><br /><p>
React.js was more than just a technology; it was a gateway. It simplified the complexity of web development, making it easy to see results and meet client needs. Its structured nature resonated with me. I realized I could understand anyone's React code, a testament to its clarity and organization.
</p><br /><p>
Then came Next.js, the perfect companion to React. It handled the heavier lifting for live websites – images, routing, and more. It wasn’t just about making things easier; it was about making them better. The image optimization and server-side components in Next.js were particularly impressive.
</p><br /><p>
I got into backend development, where Node.js was easy choices. With my Python experience, learning Node.js was a smooth transition. It complemented my frontend work beautifully, completing the full-stack picture.
</p><br /><p>
I Learned Tailwindcss for styling website. Moving from regular CSS to Tailwind, I found an easy-to-use and efficient way to style websites.
</p><br /><p>
To me, coding is like casting spells. You imagine, and then create. It's about turning ideas into reality, visible and functional to the world. It's about storytelling, opening virtual shops, and sharing your talents. This magic of coding is profound – understanding the binary language of computers, the intricacies of TCP/UDP, it's all astonishing.
</p><br /><p>
As a developer, I see myself as a magician. Whether it’s bringing 3D worlds to life with Three.js, creating fluid simulations, or integrating MediaPipe, each project is a spell successfully cast. I may not be a veteran magician yet, but in the realm of code, I'm crafting my own kind of magic, and the world is starting to take notice.
</p><br />
      </p>
    )
  },
  {
    title: "Chapter 3: Professionalism",
    content: (
      <p>
        <p>
       My journey into full-stack development started back in 2021, during my third year in college. I joined a friend’s startup, where I got my first real client. It was a dive into the deep end, learning as I went along and figuring things out on the fly.
       </p><br /><p>
One of my biggest projects was with GoSign, a U.S. startup. I had to work on a game where users sign in a video. The tricky part was making sure videos only get sent if the user’s hands are visible. I thought it would be easy, but it wasn't. I ended up using MediaPipe, a new tool from Google, and it turned out to be a fun puzzle to solve.
</p><br /><p>
Another cool thing I did was make a cursor move on a screen like it was trailing smoke. This took me into the world of fluid simulation. With some help from open-source resources, I managed to get the effect I wanted.
</p><br /><p>
Over time, I’ve gotten better at coding. I’ve learned how to organize my code better, working with React.js, Next.js, and Node.js. I like the startup life because it's flexible, but it can also be a lot of work at times. Whether working alone or in a small team, I’ve managed to adjust and do well.
</p><br /><p>
I’ve had my fair share of tough times, especially when things don’t work the way I expect. Sometimes, stepping back and taking a break helps me think of new solutions. Working in startups means I don’t deal with office politics much, which is nice.
</p><br /><p>
I haven’t had a mentor, but I’ve learned a lot from friends, colleagues, and online. Right now, I'm working part-time on the GoSign project as a frontend developer and doing some freelance work on the side.
</p><br /><p>
Looking ahead, I'm not sure exactly what the future holds. But I’m excited to keep learning and trying new things in web development. There’s always more to learn and more magic to make with code.
</p><br />
      </p>
    )
  },
  {
    title: "Chapter 4: Hobbies and Interests",
    content: (
      <p>
        <p>
       Beyond the world of coding, I have lot's of hobbies and interests that shape who I am. Fiction and political stories captivate me the most. The magical world of Harry Potter was my first encounter with the power of storytelling. It opened my eyes to a universe beyond my imagination. Then came "Naruto," which profoundly changed the way I think and inspired me to be better.
       </p><br /><p>
My reading tastes are . I'm drawn to stories ofeclectic competition and magic fiction. Harry Potter remains a favorite, but in the world of manhwas, I love sweet, simple love stories. These readings are more than entertainment; they offer me different perspectives on life and a way to live through the eyes of diverse characters. As someone who tends to overthink, reading is a calming escape into other worlds.
</p><br /><p>
Exploring new things is like a personal adventure. It involves roaming around, discovering new places, and participating in various activities. Recently, I've immersed myself in open mic, music festivals, hiking, film societies, and book clubs. I’m always up for new experiences, whether it’s joining a dance class, attending a speaking event, or enjoying sports.
</p><br /><p>
Speaking of sports, my interests are varied. While I don’t follow every detail, I'm drawn to the excitement of competition. Tennis grand slams, major golf tournaments, cricket matches, and even skating captivate me. These sports, in their own way, add a different kind of excitement to my life.
</p><br /><p>
Although these hobbies may not directly contribute to my career as a developer, they are part of my life. They enrich my experiences, broaden my understanding, and offer a balance to my professional pursuits. These interests don’t just fill my time; they enhance my journey as a person, as a human, living a life that’s not just about coding, but about experiencing the world in its full spectrum.
</p><br />
      </p>
    )
  },
  {
    title: "Chapter 5: Conclusion",
    content: (
      <p>
      <p>
       As I look back on my journey, the tapestry of experiences – from the vibrant fields of coding to the rich world of my hobbies – weaves a story of growth, adaptation, and discovery. The most significant lesson I've learned is the power of consistency. It's about focusing on one thing at a time, even though the temptation to juggle multiple things is always there. This simple yet profound insight has been a guiding light, both in my professional endeavors and personal pursuits.
       </p><br /><p>
In my professional life, understanding the structure of languages and their intricacies has been invaluable. It’s not just about writing code; it’s about speaking a language that brings ideas to life. My hobbies, while seemingly disconnected from my work as a full-stack developer, offer me a well of inspiration and focus. They remind me that sometimes, the best ideas come from places far removed from our daily work. And who knows? One day, I might just blend these interests into a project that captures the essence of both worlds.
</p><br /><p>
Looking forward, my goal is simple yet ambitious: to learn, apply, and embrace every bit of knowledge and experience that comes my way. Whether it's new technologies, evolving trends, or unexpected challenges, I'm ready to take them on.
</p><br /><p>
To you, the reader who has journeyed through these pages, my message is straightforward yet heartfelt. This story might not be extraordinary, but it's mine, and I thank you for sharing it with me. Remember, whatever path you choose, there's value in your story. There might just be someone out there who finds inspiration in your unique journey.
</p><br /><p>
Adaptability has been my strength – learning to thrive with new technologies, different people, and varied environments. This flexibility will continue to be my compass as I navigate the ever-changing landscape of technology and life.
</p><br /><p>
In conclusion, my story is one of a curious mind exploring the realms of technology and beyond. It’s about staying true to one’s passions, being adaptable in the face of change, and finding joy in both the challenges and the triumphs. As I continue on this journey, I carry with me the lessons of the past and the excitement for what the future holds.
</p><br />  </p>
    )
  }
];

function AboutMe() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [animatePageTurn, setAnimatePageTurn] = useState(false);

  useEffect(() => {
    setAnimatePageTurn(true);
    const timer = setTimeout(() => setAnimatePageTurn(false), 800);  
    return () => clearTimeout(timer);
  }, [currentChapter]);
  
  const handleNextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    pages.push(
      <span
        key="start"
        className={`border px-2 py-1 ${currentChapter === 0 ? 'bg-blue-500 text-white' : ''}`}
        onClick={() => setCurrentChapter(0)}
      >
        1
      </span>
    );

    if (currentChapter > 2) {
      pages.push(<span key="firstDot" className="px-2">...</span>);
    }

    if (currentChapter > 1) {
      pages.push(
        <span
          key={currentChapter - 1}
          className="border px-2 py-1"
          onClick={() => setCurrentChapter(currentChapter - 1)}
        >
          {currentChapter}
        </span>
      );
    }

    if (currentChapter !== 0 && currentChapter !== chapters.length - 1) {
      pages.push(
        <span
          key={currentChapter}
          className={`border px-2 py-1 bg-blue-500 text-white`}
          onClick={() => setCurrentChapter(currentChapter)}
        >
          {currentChapter + 1}
        </span>
      );
    }

    if (currentChapter !== chapters.length - 1 && currentChapter !== chapters.length - 2) {
      pages.push(
        <span
          key={currentChapter + 1}
          className="border px-2 py-1"
          onClick={() => setCurrentChapter(currentChapter + 1)}
        >
          {currentChapter + 2}
        </span>
      );
    }

    if (currentChapter < chapters.length - 3) {
      pages.push(<span key="lastDot" className="px-2">...</span>);
    }

    pages.push(
      <span
        key="end"
        className={`border px-2 py-1 ${currentChapter === chapters.length - 1 ? 'bg-blue-500 text-white' : ''}`}
        onClick={() => setCurrentChapter(chapters.length - 1)}
      >
        {chapters.length}
      </span>
    );

    return pages;
};



  return (
    <section id="about" className="h-full flex flex-col items-center w-full relative">
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Image
        src="/bookbg2.png"
        width={1000}
        height={1000}
        alt="Background"
        className='h-full w-full'
      />
    </div>
      <div className=" bg-gray-100 p-8 my-3  w-[40%]  shadow-lg mx-auto rounded-xl">
        <h2 className="text-2xl font-serif mb-4">{chapters[currentChapter].title}</h2>
        <div 
  className={`text-lg font-body mb-4 custom-scrollbar overflow-y-auto px-4 ${animatePageTurn ? 'page-turn-animation' : ''}`} 
  style={{ maxHeight: '60vh' }}
>
  {chapters[currentChapter].content}
</div>

        
        <div className="flex justify-end items-center mt-4">
          <button 
            className="mr-4" 
            onClick={handlePreviousChapter}
            style={{ visibility: currentChapter === 0 ? 'hidden' : 'visible' }}
          >
            &lt; Previous
          </button>
          <div className="flex space-x-2">
            {renderPageNumbers()}
          </div>
          <button 
            className="ml-4" 
            onClick={handleNextChapter}
            style={{ visibility: currentChapter === chapters.length - 1 ? 'hidden' : 'visible' }}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;



             
            