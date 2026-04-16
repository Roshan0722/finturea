import { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import Vector from "../image/Vector.png";
import "./Navbar.css";

const Navbar: React.FC = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar absolute top-0 w-full z-50">

      <div className="navbar-container max-w-[1440px] mx-auto px-6 lg:px-20 py-6 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="navbar-logo flex items-center gap-2 text-xl font-semibold cursor-pointer">
          <img src={Vector} className="navbar-logo-img h-8" />
          Finturea
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-desktop hidden lg:flex items-center gap-10">

          <nav className="navbar-links flex items-center gap-10 text-sm font-semibold tracking-wide">
            <button onClick={() => navigate("/")}>HOME</button>
            <button>ABOUT US</button>
            <button>SERVICES</button>
            <button>LOAN CALCULATOR</button>
            <button onClick={() => navigate("/contact")}>CONTACT</button>
          </nav>

          <div className="navbar-buttons flex items-center gap-4">

            <Button
              onClick={() => navigate("/apply")}
              className="navbar-apply bg-green-400 text-black rounded-full px-6 hover:bg-green-500"
            >
              Apply Now
            </Button>

            <Button
              onClick={() => navigate("/signup")}
              variant="outline"
              className="navbar-signup border-green-400 text-green-400 rounded-full px-6 hover:bg-green-400 hover:text-black"
            >
              Sign Up →
            </Button>

          </div>

        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-toggle lg:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar-mobile lg:hidden fixed top-0 left-0 w-full h-screen overflow-y-auto bg-[#0F4C4C] z-40">

          {/* Top Bar */}
          <div className="navbar-mobile-top flex items-center justify-between px-6 py-5 text-white border-b border-white/10">
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              ✕
            </button>
            <span className="text-lg font-semibold tracking-wide">Menu</span>
            <div></div>
          </div>

          {/* Menu Cards */}
          <div className="navbar-mobile-menu px-6 pt-6 pb-10 space-y-4">

            <div
              onClick={() => navigate("/")}
              className="navbar-mobile-item bg-[#1FA99A]/20 backdrop-blur-md rounded-xl p-5 flex justify-between items-center text-white hover:bg-[#1FA99A]/30 transition cursor-pointer"
            >
              <span className="font-semibold">Home</span>
              →
            </div>

            <div className="navbar-mobile-item bg-[#1FA99A]/20 backdrop-blur-md rounded-xl p-5 flex justify-between items-center text-white hover:bg-[#1FA99A]/30 transition cursor-pointer">
              <span className="font-semibold">About Us</span>
              →
            </div>

            <div className="navbar-mobile-item bg-[#1FA99A]/20 backdrop-blur-md rounded-xl p-5 flex justify-between items-center text-white hover:bg-[#1FA99A]/30 transition cursor-pointer">
              <span className="font-semibold">Services</span>
              →
            </div>

            <div className="navbar-mobile-item bg-[#1FA99A]/20 backdrop-blur-md rounded-xl p-5 flex justify-between items-center text-white hover:bg-[#1FA99A]/30 transition cursor-pointer">
              <span className="font-semibold">Loan Calculator</span>
              →
            </div>

            <div
              onClick={() => navigate("/contact")}
              className="navbar-mobile-item bg-[#1FA99A]/20 backdrop-blur-md rounded-xl p-5 flex justify-between items-center text-white hover:bg-[#1FA99A]/30 transition cursor-pointer"
            >
              <span className="font-semibold">Contact</span>
              →
            </div>

            {/* Buttons */}
            <div className="navbar-mobile-buttons pt-8 space-y-4">

              <Button
                onClick={() => navigate("/apply")}
                className="w-full bg-[#1FA99A] text-white rounded-full py-6 font-semibold hover:bg-[#178f83]"
              >
                Apply Now
              </Button>

              <Button
                onClick={() => navigate("/signup")}
                variant="outline"
                className="w-full border-[#1FA99A] text-[#1FA99A] rounded-full py-6 hover:bg-[#1FA99A] hover:text-white"
              >
                Sign Up
              </Button>

            </div>

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;