import React from "react";
import ArrowIcon from "../image/arrowicon.svg";
import aboutusimg1 from "../image/about us-img01 (1).png";
import aboutusimg2 from "../image/aboutusimg2.svg";
import img3 from "../image/about-img-03.png";
import ab from '../image/about-img0004.png'
import './AboutSection.css'

const Aboutsection = () => {
  return (
    <section className="about-section relative min-h-screen py-20 px-6 lg:px-24 overflow-hidden">

      {/* Top Left Glow */}
      <div className="about-glow-top pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-70"></div>

      {/* Bottom Right Glow */}
      <div className="about-glow-bottom pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-80"></div>

      {/* Header */}
      <div className="about-header max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10 mt-10">

        <div className="about-left flex flex-col gap-24">

          <span
            className="about-tag text-[#94a3b8] text-sm font-bold tracking-[20%] uppercase"
            style={{ fontFamily: "DM Sans" }}
          >
            About Us
          </span>

          {/* FAQ Button */}
          <div className="about-faq relative">

            <div className="about-faq-border absolute top-[-34px] left-[36px] w-[220px] h-[150px] border border-teal-200 rounded-[22px]"></div>

            <button className="about-faq-button relative z-10 w-[220px] h-[150px] rounded-[22px] p-5 flex flex-col justify-between text-left shadow-lg bg-gradient-to-br from-[#a3c639] via-[#29b28a] to-[#00b0c7]">

              <div
                className="text-white text-xl font-medium leading-tight"
                style={{ fontFamily: "DM Sans" }}
              >
                Frequently <br /> Asked <br /> Question
              </div>

              <div className="w-full flex justify-end">
                <img src={ArrowIcon} className="w-10 h-10" alt="Arrow" />
              </div>

            </button>

          </div>

        </div>

        {/* Right Text */}
        <div className="about-text space-y-[50px]">

          <h2
            className="about-heading text-4xl lg:text-5xl font-medium text-gray-900 tracking-[4%] leading-14"
            style={{ fontFamily: "DM Sans" }}
          >
            Seamless and secure <br /> Financial experience.
          </h2>

          <p
            className="about-description text-gray-500 max-w-lg leading-relaxed text-sm"
            style={{ fontFamily: "DM Sans" }}
          >
           Finturea is a trusted financial services company dedicated to making dreams possible through smarter loan solutions. With more than 12 years of industry experience, we have supported thousands of individuals and businesses across India with faster approvals and transparent lending processes. 

Our tailored loan solutions help customers achieve important milestones — from home ownership to business growth and education funding. 

 
          </p>

        </div>

      </div>

      {/* Cards Grid */}
      <div className="about-grid max-w-7xl mx-auto mt-[150px] px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">

        {/* CARD 1 */}
        <div className="about-card1 space-y-6">
          <div className="rounded-3xl overflow-hidden aspect-square">
            <img src={aboutusimg1} className="w-full h-full object-cover grayscale about-img1" />
          </div>
        </div>

        {/* TITLE */}
        <div className="about-title flex flex-col justify-center">
          <h3 className="about-title-h text-2xl md:text-3xl font-medium whitespace-nowrap">Financial Consultation</h3>
          <p className="about-title-p text-sm text-gray-400">Financial Advice From Experts</p>
        </div>

        {/* CARD 2 */}
        <div className="about-card2 space-y-6 -mt-8">
          <div className="about-card2-wrapper relative flex justify-end items-start">

            <img
              src={aboutusimg2}
              className="about-img2 max-w-[420px] lg:max-w-[490px] md:max-w-[410px] rounded-xl"
            />

            <div className="about-card-badge absolute left-0 md:-left-6 lg:-left-28 top-[65%] -translate-y-1/2 bg-white/70 backdrop-blur-lg text-black text-sm px-4 py-2 rounded-[15px] shadow">
              <span className="text-xs text-gray-500 font-medium tracking-[0.1em]">
                EXPERIENCES
              </span>
              <br />
              <b>98% Approval Rate</b>
            </div>

          </div>
        </div>

        {/* CARD 3 */}
        <div className="about-card3 lg:col-span-2 lg:col-start-2 lg:row-start-2 relative">

          <img
            src={img3}
            alt="Expense analysis"
            className="about-img3 w-full max-w-[380px] md:max-w-[420px] lg:max-w-sm rounded-3xl"
          />

          <div className="about-card3-badge absolute left-0 md:-left-6 lg:-left-20 top-[35%] -translate-y-1/2 bg-white/70 backdrop-blur-lg text-black text-sm px-4 py-2 rounded-[15px] shadow">
            <span className="text-xs text-gray-500 font-medium tracking-[0.1em]">
              EXPERIENCES
            </span>
            <br />
            <b>₹100 Cr+ Loans Disbursed</b>
          </div>

          <h3 className="about-card3-h mt-4 text-2xl md:text-3xl font-medium tracking-[4%] whitespace-nowrap">
          Expense & Loan Analysis 
          </h3>

          <p className="about-card3-p text-sm text-gray-400 mt-2">
          Loan and Financial Profile Analysis
          </p>

        </div>

        {/* CARD 4 */}
        <div className="about-card4 lg:col-start-3 lg:row-start-2 mt-14">

          <img
            src={ab}
            className="about-img4 w-full max-w-[380px] md:max-w-[410px] lg:max-w-[373px] rounded-3xl"
          />

          <h3 className="about-card4-h mt-4 text-2xl md:text-3xl font-medium tracking-[4%] whitespace-nowrap">
          Smart Financial Tools 
          </h3>

          <p className="text-sm text-gray-400 mt-2">
          Financial Planning and Tracking Tools
          </p>

        </div>

      </div>

    </section>
  );
};

export default Aboutsection;