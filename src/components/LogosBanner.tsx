import React, { useRef, useEffect } from "react";
import Logo1 from "../image/Central-bank-of-indiaimg.png";
import Logo2 from "../image/HDFC-IMG.png";
import Logo3 from "../image/ICICI-img.png";
import Logo4 from "../image/HD-img.png";
import Logo5 from "../image/bajaj-img.png"
import "./LogosBanner.css"

const LogosBanner: React.FC = () => {

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;

    const interval = setInterval(() => {
      const children = slider.children;

      index++;
      if (index >= children.length) {
        index = 0;
      }

      const element = children[index] as HTMLElement;

      slider.scrollTo({
        left: element.offsetLeft,
        behavior: "smooth"
      });

    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="logos-section relative -mt-24 z-20">

      <div className="logos-container max-w-[1440px] mx-auto px-6 lg:px-20">

        <div className="logos-card rounded-[24px] bg-white/70 backdrop-blur-[56px] shadow-xl p-10">
          
          {/* TOP CONTENT */}
          <div className="logos-grid grid md:grid-cols-3 gap-10 items-start">
            
            {/* LEFT */}
            <div className="logos-left">
              <h3 className="logos-heading text-[28px] font-medium text-[#0F172A] leading-snug tracking-[3%]">
                Empowering Financial Growth for People and Businesses
              </h3>
            </div>

            {/* MIDDLE */}
            <div className="logos-middle">
              <p className="logos-text text-[15px] text-gray-600 leading-[26px]">
                From home ownership to business growth, Finturea provides smart
                and transparent loan solutions designed to help you move
                forward with confidence.
              </p>
            </div>

            {/* RIGHT */}
            <div className="logos-right flex flex-col items-start md:items-end">
              <p className="logos-trusted text-sm text-gray-500 mb-3">
              Channel partners
              </p>

              <img
                src={Logo5}
                alt="BBC"
                className="logos-bbc h-10"
              />
            </div>

          </div>

          {/* DIVIDER */}
          <div className="logos-divider relative my-8">
            <div className="h-[1px] bg-gray-300"></div>

            <div className="logos-divider-highlight absolute left-[19.5%] -top-[2px] w-[190px] h-[4px] bg-[#0F2A44] rounded-full"></div>
          </div>

          {/* LOGOS */}
          <div
            ref={sliderRef}
            className="logos-row flex flex-wrap items-center justify-between opacity-60 gap-10 logos-slider"
          >
            <img src={Logo1} className="logos-img h-13" />
            <img src={Logo5} className="logos-img h-11" />
            <img src={Logo2} className="logos-img h-12" />
            <img src={Logo3} className="logos-img h-12" />
            <img src={Logo4} className="logos-img h-11" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default LogosBanner;