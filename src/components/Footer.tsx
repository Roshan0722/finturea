import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Vector from "../image/Vector.png"; // your logo

const Footer = () => {
  return (
    <footer className="pt-16 ">

      <div className=" max-w-[1440px] mx-auto px-6 lg:px-20 pt-8 pb-40 relative z-10 mt-12">

        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

          {/* Logo */}
          <div>
            <img src={Vector} alt="logo" className="w-16" />
          </div>

          {/* Menu 1 */}
          <div className="space-y-3 text-gray-700">
            <p className="cursor-pointer hover:text-green-600">Home</p>
            <p className="cursor-pointer hover:text-green-600">About Us</p>
            <p className="cursor-pointer hover:text-green-600">Advantages</p>
          </div>

          {/* Menu 2 */}
          <div className="space-y-3 text-gray-700">
            <p className="cursor-pointer hover:text-green-600">Mobile App</p>
            <p className="cursor-pointer hover:text-green-600">Services</p>
            <p className="cursor-pointer hover:text-green-600">Testimonials</p>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-gray-800 font-medium mb-4">
              Be one of the first to get <br /> our update & financial tips
            </p>

            <div className="flex items-center border-b border-green-400 pb-2">
              <input
                type="email"
                placeholder="E-mail"
                className="bg-transparent outline-none flex-1 text-sm"
              />

              <button className="bg-green-500 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto border-t mt-14 pt-10 grid md:grid-cols-2 gap-6 items-center">

          {/* Left */}
          <h2 className=" text-2xl font-semibold text-gray-800">
            Simplifying Your <br /> Financial Journey
          </h2>

          {/* Social */}
          <div className=" flex flex-col md:items-end">
            <p className="text-gray-700 mb-3">Social Media</p>

            <div className="flex gap-4">
              <div className="w-9 h-9 border rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                <FaFacebookF />
              </div>

              <div className="w-9 h-9 border rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                <FaTwitter />
              </div>

              <div className="w-9 h-9 border rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 bg-gradient-to-r from-[#0f2b46] to-[#1f7a5f] text-white text-center text-sm py-4">
        Copyright Doctreactivemarket, All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;