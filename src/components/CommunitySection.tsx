import React from "react";
import smilingman from "../image/smilingman.png";
import arrowicon from "../image/arrow-icon.svg";
import logo from "../image/logo.svg";
import tealBg from "../image/contact-sectionleft-bg.png";
import darkBg from "../image/contact-sectionright-bg.png";
import "./CommunitySection.css";

const CommunitySection = () => {
  return (
    <section className="community-section relative w-full overflow-hidden mt-18">

      {/* BACKGROUND */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <div
          className="community-left-bg w-full lg:w-[42%] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${tealBg})` }}
        />

        <div
          className="community-right-bg w-full lg:flex-1 bg-cover bg-no-repeat bg-center rounded-tl-[50px]"
          style={{
            backgroundImage: `url(${darkBg})`
          }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20 py-24">

        <div className="community-wrapper flex flex-col lg:flex-row items-center">

          {/* LEFT CONTENT */}
          <div className="community-left w-full lg:w-[42%] flex gap-8 text-white mt-[180px]">

            {/* Vertical Divider */}
            <div className="community-divider flex flex-col w-[3px] h-[280px]">
              <div className="bg-white h-1/3"></div>
              <div className="bg-white/30 h-2/3"></div>
            </div>

            <div className="community-text space-y-7">

              <h2 className="community-title text-3xl md:text-4xl font-medium">
                Community <br /> Involvement
              </h2>

              <p className="community-desc text-sm text-white/80 max-w-[320px] leading-relaxed">
                We believe in giving back to the communities we serve. Through
                various initiatives and partnerships, we actively support local
                businesses, educational programs.
              </p>

              <button className="community-btn flex items-center gap-3 tracking-[0.2em] uppercase font-semibold group">
                CONTACT US
                <img src={arrowicon} alt="arrow" />
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="community-image-area relative flex-1 flex justify-end">

            <div className="community-image-container relative rounded-[60px] overflow-hidden w-full max-w-[900px]">

              {/* Top Logo */}
              <div className="absolute top-8 right-10 z-20 flex items-center gap-2">
                <img src={logo} className="w-6" />
                <span className="text-white text-xl font-medium">Finturea</span>
              </div>

              {/* Image */}
              <div className="community-image flex justify-center items-center pt-24 pb-10">
                <img
                  src={smilingman}
                  alt="Community involvement"
                  className="w-[420px] md:w-[480px] lg:w-[520px] object-contain"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CommunitySection;