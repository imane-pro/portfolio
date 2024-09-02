"use client";
import Image from "next/image";

const designProjects = [
  {
    id: 1,
    title: "Design Project 1",
    image: "/matcha.jpg",
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
    title: "Food App Interface 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/1.png",
  },
  {
    id: 2,
    title: "Food App Interface 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/2.png",
  },
  {
    id: 3,
    title: "Food App Interface 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/3.png",
  },
  {
    id: 4,
    title: "Food App Interface 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/4.png",
  },
  {
    id: 5,
    title: "Book App Interface",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/booksApp.png",
  },
  {
    id: 6,
    title: "WhatsApp Interface",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/whatsAppp.png",
  },
  {
    id: 7,
    title: "Login Page Interface",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/loginPage.png",
  },
  {
    id: 8,
    title: "Music App Interface 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/m1.png",
  },
  {
    id: 9,
    title: "Music App Interface 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/m2.png",
  },
];

const webDevProjects = [
  {
    id: 1,
    title: "Tic Tac Toe Game",
    desc: "React js project.",
    image: "/tictac.png",
  },
  {
    id: 2,
    title: "Pomodoro Timer and Todo List",
    desc: "React js project.",
    image: "/todo.png",
  },
  {
    id: 3,
    title: "Site Web de Pâtisserie",
    desc: "Laravel project.",
    image: "/donut.png",
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
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg"
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Section des projets UI/UX */}
      <div className="mt-12 mb-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h2 className="text-4xl font-bold text-center mb-12">UI/UX Projects</h2>

        {/* Row pour les images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiuxProjects.map((project) => (
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

      {/* Section des projets de développement web */}
      <div className="mt-12 mb-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h2 className="text-4xl font-bold text-center mb-12">Web Development Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevProjects.map((project) => (
            <div key={project.id} className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-auto">
                  <Image src={project.image} alt={project.title} className="w-full h-auto object-cover" width={500} height={300} />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p>{project.desc}</p>
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
