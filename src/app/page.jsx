"use client";
import Image from "next/image"; // Importing Image from next/image

const Homepage = () => {
  return (
    <>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="h-1/2 relative lg:h-full flex justify-center items-center sm:mt-12 md:mt-24 rounded-3xl">
          <Image
            src="/imane.jpeg"
            alt="Imane"
            className="object-contain w-3/4 md:w-2/3 xl:w-full h-auto rounded-full"
            width={500} // Specify width for optimization
            height={500} // Specify height for optimization
          />
        </div>
        
        {/* Text container */}
        <div className="h-1/2 lg:h-full flex flex-col gap-8 justify-center px-4 sm:px-8 md:px-12">
          {/* Title */}
          <h1 className="text-4xl font-bold mt-20 text-center">Junior Full Stack Developer & UI/UX Designer</h1>
          <p className="text-sm text-left">
            Passionnée par le développement web et le design, je suis une développeuse full stack junior 
            avec une expertise dans la création d&apos;applications dynamiques et réactives. 
            En parallèle, je me forme en autoformation au design UI/UX, 
            où je m&apos;efforce de fusionner esthétique et fonctionnalité 
            pour offrir une expérience utilisateur optimale. 
            Mon approche collaborative et ma soif d&apos;apprendre me permettent de relever 
            des défis variés tout en m&apos;adaptant aux besoins des utilisateurs et aux tendances du marché.
          </p>
          <div className="flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white mb-10">View My Work</button>
            <button className="p-4 rounded-lg ring-1 ring-black mb-10">Contact Me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
