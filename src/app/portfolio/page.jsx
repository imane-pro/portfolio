"use client";
import Image from "next/image";

const designProjects = [
  {
    id: 1,
    title: "Design Project 1",
    image: "/matcha.jpg", // Changed "Image" to "image" for consistency
  },
  {
    id: 2,
    title: "Design Project 2",
    image: "/mokhito.jpg",
  },
  {
    id: 3,
    title: "Design Project 3",
    image: "/caramel.jpg",
  },
  {
    id: 4,
    title: "Design Project 4",
    image: "/suncare.jpg",
  },
  {
    id: 5,
    title: "Design Project 5",
    image: "/cdma.jpg",
  },
  {
    id: 6,
    title: "Design Project 6",
    image: "/juice.jpg",
  },
];

const uiuxProjects = [
  {
    id: 1,
    title: "Food App Interface",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    video: "/foodApp.mp4",
  },
  {
    id: 2,
    title: "Music App Interface",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    video: "/musicApp.mp4",
  },
  {
    id: 3,
    title: "Book App Interface",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/booksApp.png",
  },
  {
    id: 4,
    title: "WhatsApp Interface", // Fixed the casing for WhatsApp
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/whatsAppp.png",
  },
  {
    id: 5,
    title: "Login Page Interface",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/loginPage.png",
  },
];

const webDevProjects = [
  {
    id: 1,
    title: "Tic Tac Toe Game", // Fixed the spacing
    desc: "Description for web project 1.",
    video: "/tictac.mp4",
  },
  {
    id: 2,
    title: "Pomodoro Timer and Todo List", // Fixed the spacing
    desc: "Description for web project 2.",
    video: "/todoli.mp4",
  },
  {
    id: 3,
    title: "Site Web de Pâtisserie",
    desc: "Description for web project 3.", // Updated the description
    video: "/donuts.mp4",
  },
];

const PortfolioPage = () => {
  return (
    <div className="h-full">
      <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
        My Works
      </div>
      
      {/* Section des projets de design */}
      <div className="mt-12 mb-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h2 className="text-4xl font-bold text-center mb-12">Social Media Post Design</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project) => (
            <div key={project.id} className="relative">
              <Image
                src={project.image} // Use lowercase "image"
                alt={project.title}
                className="w-full h-auto rounded-lg"
                width={500} // Specify width for optimization
                height={300} // Specify height for optimization
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Section des projets UI/UX */}
      <div className="mt-12 mb-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h2 className="text-4xl font-bold text-center mb-12">UI/UX Projects</h2>

        {/* Row pour les vidéos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {uiuxProjects.filter(project => project.video).map((project) => (
            <div key={project.id} className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-auto">
                  <video src={project.video} controls className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row pour les images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiuxProjects.filter(project => project.image).map((project) => (
            <div key={project.id} className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-auto">
                  <Image src={project.image} alt={project.title} className="w-full h-auto object-cover" width={500} height={300} />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section des vidéos de projets de développement web */}
      <div className="mt-12 mb-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h2 className="text-4xl font-bold text-center mb-12">Web Development Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevProjects.map((project) => (
            <div key={project.id} className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-auto">
                  <video src={project.video} controls className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
