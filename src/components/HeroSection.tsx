import React from "react";
import herosectionbg from '../image/herosectionbg.png'
import herosectionbottomshape from '../image/herosectionbottomshape.png'
import arrowicon from "../image/arrowicon.svg"
import herosectionrightimg from '../image/hero-section-rightimg(update).png'
import './Herosection.css'

const HeroSection: React.FC = () => {
  return (

<>
<section className="relative overflow-hidden hero-section">

      {/* BACKGROUND IMAGE */}
      <img
        src={herosectionbg}
        className="absolute inset-0 w-full h-full object-cover -z-20 hero-bg"
      />

      {/* BOTTOM LEFT SHAPE */}
      <img
        src={herosectionbottomshape}
        className="absolute bottom-0 left-0 w-[53%] max-w-none -z-10 pointer-events-none hero-bottom-shape"
        alt="hero shape"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-8 pb-40 relative z-10 mt-12 hero-container">

        {/* HERO CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mt-24 hero-grid">

          {/* LEFT */}
          <div className="hero-left">

            <p className="gradient-text text-sm mb-6 font-bold tracking-[0.2em] hero-tagline">
              PROFESSIONAL FINANCIAL SERVICE
            </p>

            <h1 className="text-white text-4xl lg:text-6xl mb-6 font-medium tracking-[0.04em] leading-[97%] hero-heading">
              Simplifying Your <br /> Financial Journey
            </h1>

            <p className="text-white/70 max-w-lg mb-10 font-normal leading-[26px] hero-description">
            Finturea helps individuals and businesses access smarter loan solutions with faster approvals, transparent terms, and flexible repayment options.
            </p>

            <button
              className="
              hero-button
              mt-16 md:mt-20 lg:mt-28
              mb-16 lg:mb-[8rem]
              flex items-center justify-center gap-3
              bg-[#8A8A8A]/30
              backdrop-blur-[20px]
              px-8 md:px-12 lg:px-[86px]
              py-4 md:py-6 lg:py-[35px]
              rounded-[16px] lg:rounded-[20px]
              border border-white/75
              shadow-xl
              text-sm md:text-lg lg:text-[20px]
              text-white
              font-bold
              tracking-[0.1em]
              transition-all duration-300
              hover:bg-[#8A8A8A]/40
              "
            >
              BOOK A CALL WITH US

              <span className="flex items-center">
                <img
                  src={arrowicon}
                  alt="arrow"
                  className="hero-arrow-icon w-4 md:w-5 lg:w-6"
                />
              </span>
            </button>

          </div>


          {/* RIGHT */}
          <div className="top-[-30px] relative flex justify-end items-start hero-right">

            <img
              src={herosectionrightimg}
              className="w-[465px] lg:w-[500px] rounded-xl hero-image z-10"
            />

            <div
              className="
              hero-line
              hidden lg:block
              absolute
              right-40 xl:right-60 2xl:right-96
              top-[410px] xl:top-[460px] 2xl:top-[440px]
              w-[190px] xl:w-[230px] 2xl:w-[310px]
              h-[6px]
              bg-[#14b8a5]
              rotate-[135deg]
              z-0
              "
            />

            <div className="hero-experience absolute left-[90px] top-[34%] -translate-y-1/2 -translate-x-1/3 bg-white/70 backdrop-blur-lg text-black text-sm px-4 py-2 rounded-[15px] shadow z-20">
              <span className="text-xs text-gray-500 font-medium tracking-[0.1em]">
                EXPERIENCES
              </span>
              <br />
              <b>12+ years of expertise</b>
            </div>

          </div>

        </div>

      </div>

</section>
</>
  );
};

export default HeroSection;