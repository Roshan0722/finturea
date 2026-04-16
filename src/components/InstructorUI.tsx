import React, { useRef, useState } from "react";
import Instructor from "../image/Instructor.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgImage from "../image/blog-bg.svg";

const instructors = [
  { id: 1, img: Instructor, title: "Writing Course" },
  { id: 2, img: Instructor, title: "Writing Course" },
  { id: 3, img: Instructor, title: "Writing Course" },
  { id: 4, img: Instructor, title: "Writing Course" },
  { id: 5, img: Instructor, title: "Writing Course" }
];

const InstructorUI: React.FC = () => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);

    const container = scrollRef.current;
    const card = container?.children[index] as HTMLElement;

    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  };

  return (
    <section
      className="w-full py-20 flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* Hide Scrollbar */}
      <style>
        {`
        .hide-scrollbar::-webkit-scrollbar { display:none; }
        .hide-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }
        `}
      </style>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full">

        <div className="relative flex flex-col lg:flex-row w-full min-h-[520px] overflow-hidden">

          {/* LEFT SECTION (same position as before) */}
          <div className="relative w-full lg:w-[35%] flex flex-col px-12 z-20">

            <div className="flex gap-4 mt-10 max-w-lg h-auto lg:h-72 pl-4 relative">

              {/* Divider */}
              <div className="absolute left-0 top-0 flex flex-col h-full w-[2px]">
                <div className="bg-white h-1/3 w-full"></div>
                <div className="bg-white/30 h-2/3 w-full"></div>
              </div>

              <div className="mt-5">
                <h2 className="text-white text-2xl font-semibold mb-2">
                  Financial Insights
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                Explore expert insights and financial guidance that help individuals and businesses make smarter borrowing decisions and manage their finances effectively. 
                </p>
              </div>

            </div>

            {/* SEARCH */}
            <div className="absolute -right-40 bottom-32 flex max-lg:static max-lg:mt-10">

              <input
                type="text"
                placeholder="Explore More"
                className="bg-white px-6 py-4 w-64 md:w-72 italic text-gray-500 outline-none"
              />

              <button className="bg-[#c4a61d] hover:bg-[#b3951a] text-black font-bold px-6">
                Go
              </button>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="relative flex-1 flex items-center overflow-hidden mt-16 lg:mt-0">

            {/* Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-3 lg:left-5 z-30 bg-white p-2 lg:p-3 rounded-full"
            >
              <ChevronLeft size={20}/>
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-3 lg:right-5 z-30 bg-white p-2 lg:p-3 rounded-full"
            >
              <ChevronRight size={20}/>
            </button>

            {/* Carousel */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar px-10 lg:px-16 w-full items-center"
            >

              {instructors.map((item, index) => {

                const isActive = index === activeIndex;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(index)}
                    className={`
                    relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer
                    transition-all duration-500
                    ${isActive
                      ? "w-[240px] md:w-[260px] lg:w-72 h-[360px] md:h-[390px] lg:h-[420px]"
                      : "w-[180px] md:w-[200px] lg:w-44 h-[300px] md:h-[320px] lg:h-[360px] scale-90 opacity-70"}
                    `}
                  >

                    <img
                      src={item.img}
                      alt="Instructor"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-center">

                      <span className="text-white/20 text-3xl lg:text-4xl font-black tracking-widest uppercase">
                        Instructor
                      </span>

                      <span className="text-white text-xs font-bold tracking-widest mt-6 uppercase">
                        {item.title}
                      </span>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default InstructorUI;