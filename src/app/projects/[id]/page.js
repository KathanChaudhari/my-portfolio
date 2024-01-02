'use client'
import { useSearchParams  } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../globals.css'

import { EffectCoverflow, Pagination,Navigation } from 'swiper/modules';
import { GoChevronLeft, GoChevronRight, GoArrowUpLeft,GoX } from "react-icons/go";
import { MdFullscreen } from "react-icons/md";

import { Roboto } from "next/font/google"
import Image from 'next/image';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

function ProjectDetails() {
  const [isFullScreen, setIsFullScreen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [
    {
      id: 1,
      title: "GoSign.AI ",
      images: [
        { src: "/gosignhome.png", title: "GOSIGN Homepage web " },
        { src: "/gosignchatbot.png", title: "Image Title 1" },
        { src: "/gosigngame.png", title: "Image Title 1" },
        { src: "/gosignintro.png", title: "Image Title 1" },
        { src: "/gosignprofile.png", title: "Image Title 1" },
        { src: "/gosignintromob.png", title: "Image Title 1" },
      ],
      description:`
I joined US-based startup GoSign As the frontend developer where I had the opportunity to convert ideas into reality, When I joined they were at the idea stage. I created websiteapp and PWA starting from the initial concept stage all the way through to implementation. In the procees of making website I used Next.js, Firebase, AUTH0, Tailwindcss, and many more things. The initial design was made in Figma, which I then transformed into a fully functional website. A key focus during this phase was ensuring that the website was not only responsive but also mobile-friendly, catering to a diverse range of users.

As the project move forword, it became apparent that a mobile-centric approach would be more beneficial. So we changed strategy, focusing solely on enhancing the mobile user experience. To achieve this, I utilized an Iframe So users can work on desktop website as mobile . This project involved working with a variety of libraries and integrating the backend, which was developed in Python and utilized machine learning and ChatGPT's API. You can check out on <a href="https://app.gosign.ai/"><b><i><u>GoSign</u></i></b></a>
      
My first main task was to develop a user-friendly chatbot interface that could effectively handle responses and manage various tasks, such as prompt suggestions and maintaining different IDs for distinct conversations, as well as allow user to rename, delete conversation or let jump user through different conversation.
      
Another exciting feature I worked on was the development of a sign game. This innovative game required users to sign words, which was then captured through video recording using the device's camera. Initially, the process of starting and stopping the recording manually was not user-friendly. To make it more fun experience, I implemented a timer-based solution where the video recording would start and stop automatically at specified intervals. Further features included integrating Google's Mediapipe technology, which enabled the detection of hand presence and the collection of hand landmarks. This data was crucial for building and refining our user model. 
      
I also took on the task of creating a leaderboard and user profiles, focusing on the UI aspects of these features. The web app's also offers multilingual support, allowing users to switch languages through the settings. Additionally, I implemented a dark mode and light mode, adapting the color scheme to suit user preferences.
      
Other features I contributed includes notifications, an achievements page, and an onboarding page(a system to determine whether a user was new or returning, directing them to an appropriate) Also the feedback page.
      
Working at GoSign was a tremendous learning experience, particularly as the sole frontend developer in a startup environment. It required me to stay abreast of the latest technologies while ensuring clean, efficient code. The project's dynamic nature, driven by user feedback, meant constant iterations and improvements, making it a challenging yet rewarding journey.
      `,
    },
    {
        id:2,
        title: "CLAY Studios",
        images: [
          { src: "/clayfirst.png", title: "Home page" },
          { src: "/clayhome.png", title: "Portfolio slide" },
          { src: "/claywork.png", title: "One of Portfolio slide" },
          { src: "/clayportfolio.png", title: "Inside 'works' page " },
          { src: "/clayImages.png", title: "Scrollable Images with caption" },
        ],
        description: `I was approached by a client to develop their design agnecy's portfolio website. Although it wasn't a large-scale project, it has really great functionality and design intricacies, making it a noteworthy. I encourage you to visit <a href="https://www.claystudios.in/"><i><u>claystudios.in</u></i></a> to get a sense of the project's essence and the creative challenges it presented.

Standout features of the Clay Studios website is customized swiper, menu animation, and smoke effect (starts from the second slide onwards). making this smoke effect was particularly challenging, and it sparked my inspiration to develop a dedicated library to handle similar effects more efficiently in the future.
        
The website also has  an 'About Me' page, a 'Contact Us' section, and a portfolio showcase. For the portfolio page, it was crucial to display each image without compromising on quality, to achieve this, I utilized the lazy loading and image optimization capabilities of Next.js's Image component. This approach ensured that the visual integrity of the portfolio was maintained while optimizing the site's performance. Keep in mind this site is static.
        
Finally, I integrated the 'Contact Us' page with EmailJS, providing a seamless communication channel for users. This integration allows messages sent through the website to be directly received in Gmail, streamlining the communication process and enhancing user engagement.
        
Working on the Clay Studios website was a blend of creative design and technical implementation, offering a platform to showcase my skills in bringing to life a visually appealing and functionally robust website.
      ` },
    {
        id:3,
        title: "Ludo rockland",
        images: [
          { src: "/ludohome.png", title: "Home page" },
          { src: "/ludosecond.png", title: "Interactive icon" },
          { src: "/ludotestimonial.png", title: "Testimonial slider" },
          { src: "/ludocontact.png", title: "Contact form" },
        ],
        description: `
Creating the landing page for Ludo Rockland, a mobile game, was an engaging and fun project. I wanted to mirror the game's interactive essence on the website, which you can check out at <a href="https://www.ludorockland.com/"><i><u>ludorockland</i></u></a>. 
For the interactive elements, I utilized Three.js, which initially involved a complex array of icons. well! it took me two days to just make six to five on dice type menu(^_^;). 
The site also features dynamic icons that change as the cursor hovers over them. 
Additionally, it includes a contact form and testimonials, elegantly presented using Swiper, along with a link to download the game. 
While the rest of the content is primarily textual, the overall Fun project!!          
`
    },
    {
        id:4,
        title: "Immersfy",
        images: [
          { src: "/immersfyhome.png", title: "Home page" },
          { src: "/immersfyscript.png", title: "script page" },
          { src: "/immersfywritescript.png", title: "Write a story/script" },
          { src: "/immersfycontext.png", title: "Give it context" },
          { src: "/immersfystory.png", title: "Story page" },
          { src: "/immersfyeditscene.png", title: "Edit particular scene" },
          { src: "/immersfyscenes.png", title: "Scenes" },
        ],
        description: `Immersfy, an AI-based storytelling platform, was a project where I collaborated closely with a colleague. Although I can't share a direct link to the project, I can offer some insights into the work involved. My role primarily focused on using React to develop the frontend of the platform.

The project starts with user authentication, for that which we chose Firebase. We hosted the platform on AWS, prioritizing a seamless user experience. Our aim was to create an interface that was user-friendly that reduce the learning curve for our users.
        
One of the more complex aspects of Immersfy was its integration with a Python-based backend. This involved developing a  story editing textbox, capable of handling  details. The challenge was not just in the frontend design but also in ensuring secure and efficient data transmission to the backend including the implementation of encryption for data security.
        
A unique feature of Immersfy is its interactive text and image interface. Users can view each element of a story, understand how it was generated, and have the flexibility to modify it. This includes receiving images through sockets, editing text.
        
Moreover, the platform empowers users with the ability to change various aspects of their story, such as the ratio, camera angles, and styles. One of the standout features is the ability for users to generate a PDF of their stories, adding a layer of functionality that extends the usability of the platform.
         `,
    },
    {
        id:5,
        title: "Stable pay",
        images: [
          { src: "/stablepay1.png", title: "admin panel" },
          { src: "/stablepay2.png", title: "user graphs" },
          { src: "/stablepay3.png", title: "data graphs" },
          { src: "/stablepaytransaction.png", title: "transaction data" },
          { src: "/stablepaylogin.png", title: "Login" },
        ],
        description:`In this project I had the opportunity to work with Node.js, focusing on developing an admin panel for a client using Next.js. While I'm unable to showcase many specifics of my work, I can share some insights into the key areas I contributed to, particularly as part of a collaborative team effort.

My primary responsibilities revolved around user authentication, which was implemented using Node.js. This involved integrating various APIs and establishing connections with banking services for user KYC verifications. Another significant aspect of my role was linking the entire project with MongoDB, ensuring a robust and scalable database solution.
        
You can get the idea by visting site at <a href="">stablepay</a>. One of the most challenging yet rewarding parts of this project was working on the integration of crypto-based payments. This required not only a deep understanding of the technical aspects but also an ability to navigate the complexities of cryptocurrency transactions.
        
Overall, this project was a testament to the power of teamwork and the importance of adaptability in the face of technical challenges. It was an enriching experience that allowed me to grow my skills in Node.js and Next.js, while also deepening my understanding of financial integrations and database management. `,
    },
  ];
  const searchParams  = useSearchParams();
  const id = searchParams.get("id")
const projectId = parseInt(id, 10);
const project = projects.find(proj => proj.id === projectId);



const handleFullScreen = (index) => {
  setIsFullScreen(true);
  setCurrentImageIndex(index);
};

const closeFullScreen = () => {
  setIsFullScreen(false);
};

const nextImage = () => {
  setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
};

const prevImage = () => {
  setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
};

const handleKeyDown = (event) => {
  if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    prevImage();
  }
};

useEffect(() => {
  if (isFullScreen) {
    window.addEventListener('keydown', handleKeyDown);
  }

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [isFullScreen, currentImageIndex]);

if (!project) return <div>Project not found</div>;


return (
  <div className={`h-full bg-blue-200 `}>
    <div className={`h-[87vh]  p-2 md:p-8 relative overflow-y-scroll no-scrollbar ${isFullScreen ? "blur-md":""}`}>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <GoChevronLeft className='swiper-button-prev h-8 w-8 rounded-full bg-black text-white cursor-pointer' />
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative group h-[90%]">
                <Image src={image.src} alt={image.title} height={600} width={600} className="md:h-full h-auto w-full md:w-auto  md:object-contain" />
                <MdFullscreen  
                  className="absolute bottom-0 right-12 md:top-2 md:right-2 h-6 w-6 text-black bg-white rounded-full cursor-pointer opacity-100 md:opacity-0 group-hover:opacity-100"
                  onClick={() => handleFullScreen(index)}
                />
              </div>
              <p className="text-center">{image.title}</p>
            </SwiperSlide>
          ))}
        </Swiper> 
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <GoChevronRight className='swiper-button-next h-8 w-8 rounded-full bg-black text-white cursor-pointer' />
        </div>
      </div>

      <p className="text-lg mt-4 max-w-[95%]" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: project.description }}>
      </p>
    </div>
      {isFullScreen && (
        <div className="fixed w-full inset-0 bg-black bg-opacity-90 z-50 flex justify-between items-center blur-none ">
          <GoChevronLeft className="md:h-8 md:w-8 h-4 w-4 md:bg-black z-20 bg-white rounded-full text-black md:text-white cursor-pointer" onClick={prevImage} />
          <Image src={project.images[currentImageIndex].src}  layout='fill'  alt={project.images[currentImageIndex].title} className="object-contain px-4 md:px-20   " />
          <GoChevronRight className="md:h-8 md:w-8 h-4 w-4 md:bg-black z-20 bg-white rounded-full text-black md:text-white cursor-pointer" onClick={nextImage} />
          <GoX className="absolute top-5 right-5 h-8 w-8 p-2 bg-white rounded-full text-black cursor-pointer" onClick={closeFullScreen} />
        </div>
      )}
  </div>
);
}


export default ProjectDetails;
