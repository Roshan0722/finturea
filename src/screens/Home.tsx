import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InstructorUI from "../components/InstructorUI";
import LoanCalculator from "../components/LoanCalculator";
// import BankingExperience from "../components/BankingExperience";
// import CommunitySection from "../components/CommunitySection";
// import ContactSection from "../components/Contactsection";
import TestimonialSection from "../components/TestimonialSection";
import CommunitySection from "../components/CommunitySection";
import AboutSection from "../components/Aboutsection";
import Servicessection from "../components/Servicesection";
import { ArrowRight } from "lucide-react";
import personalizedImg from '../image/personalized.png'
import managementImg from '../image/management.png'
import solutionsImg from '../image/solution.png'
import financialImg from '../image/what-we-do-img.png';
import TickerItem from "../components/ui/TickerItem";
import LogosBanner from "../components/LogosBanner";
import arrowicon from "../image/arrow-icon.svg"
import "../components/Herosection.css"






function Home() {

    


  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <LogosBanner />
      <AboutSection/>
      {/* <ContactSection/> */}
      {/* <BankingExperience/> */}
      <CommunitySection/>
       <div className="min-h-screen  ">
      {/* Services Section */}
      <div className="min-h-screen ">
      <section className="financial-section mt-24 max-w-[1440px] mx-auto px-6 lg:px-20 pt-8 pb-40 relative z-10">

<div className="financial-grid grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">

{/* Column 1 */}
<div className="financial-heading lg:col-span-4 space-y-4">

<span 
className="text-[#94a3b8] text-sm font-bold tracking-[20%] uppercase"
style={{ fontFamily: "DM Sans" }}
>
WHAT WE DO
</span>

<h1 
className="financial-title text-4xl lg:text-5xl font-medium text-gray-900 tracking-[4%] leading-14 mt-3"
style={{ fontFamily: "DM Sans" }}
>
Personalized Financial Solutions
</h1>

</div>


{/* Column 2 */}
<div className="financial-text lg:col-span-4 space-y-6">

<p 
className="financial-description text-gray-500 max-w-lg leading-relaxed text-sm"
style={{ fontFamily: "DM Sans" }}
>
Every financial goal is unique. That’s why Finturea offers tailored loan products designed to meet different needs — whether it’s buying a home, expanding a business, funding education, or managing personal expenses. 
</p>

<div className="pt-2">

<button className="financial-button flex items-center gap-3 bg-gradient-to-r from-[#a3c644] to-[#00b08b] text-white px-6 py-3 rounded-xl font-semibold group transition-all hover:opacity-90">

Learn more

<div className="w-7 h-7 rounded-full group-hover:translate-x-1 transition-transform">
<img src={arrowicon} alt="icon" />
</div>

</button>

</div>
</div>


{/* Column 3 */}
<div className="financial-image-wrapper lg:col-span-4 flex justify-center lg:justify-end">

<div className="financial-image-box w-fit h-fit rounded-2xl overflow-hidden shadow-xl">

<img 
src={financialImg}
alt="Financial Solutions"
className="financial-image rounded-2xl shadow-xl w-[373px] h-[373px] object-cover block"
/>

</div>

</div>

</div>

</section>

      {/* Ticker Section - Same logic for DM Sans */}
      <section className="py-12 border-t border-b border-green-500 mb-20 overflow-hidden">

  <style>
    {`
      @keyframes ticker {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .ticker-track {
        display: flex;
        gap: 40px;
        width: max-content;
        animation: ticker 20s linear infinite;
      }

      .ticker-track:hover {
        animation-play-state: paused;
      }
    `}
  </style>

  <div className="max-w-[1440px] mx-auto px-6">

    <div className="ticker-track">

      {/* First set */}
      <div className="transition-transform duration-300 hover:scale-110">
        <TickerItem text="Personalized" img={personalizedImg} />
      </div>

      <div className="transition-transform duration-300 hover:scale-110">
        <TickerItem text="Seamless" img={personalizedImg} />
      </div>

      <div className="transition-transform duration-300 hover:scale-110">
        <TickerItem text="Management" img={managementImg} />
      </div>

      <div className="transition-transform duration-300 hover:scale-110">
        <TickerItem text="Solutions" img={solutionsImg} />
      </div>

      {/* Duplicate set for infinite loop */}
      <div className="transition-transform duration-300 hover:scale-110">
        <TickerItem text="Personalized" img={personalizedImg} />
      </div>

      <div className="transition-transform duration-300 hover:scale-110">
        <TickerItem text="Seamless" img={personalizedImg} />
      </div>

      <div className="transition-transform duration-300 hover:scale-110">
        <TickerItem text="Management" img={managementImg} />
      </div>

      <div className="transition-transform duration-300 hover:scale-110">
        <TickerItem text="Solutions" img={solutionsImg} />
      </div>

    </div>

  </div>

</section>
      
      
    </div>
    </div>
      <Servicessection/>
      <TestimonialSection/>
      <LoanCalculator/>
      <InstructorUI/>
      {/* <Footer/> */}
      {/* <Signup/> */}


      
    </>

    
  );
}

export default Home;