// import PrimaryButton from "../Common/PrimaryButton";
import Footer from "./Footer";

export default function ContactSection() {
  return (
    <section className="contact-section w-full min-h-screen flex flex-col justify-between items-center">

      {/* HERO */}
      <div className="contact-hero w-full min-h-[520px] lg:min-h-[530px] relative flex justify-center items-center overflow-visible py-20">

        {/* Background Image */}
        <img
          src="../../../src/assets/images/contact/contact1.png"
          className="contact-bg absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        {/* Overlay */}
        <div className="contact-overlay absolute inset-0 bg-gradient-to-r from-[#031B34] to-[#0F6A6A] opacity-90"></div>

        {/* Content */}
        <div className="contact-content relative w-full max-w-[1200px] text-center px-6">

          {/* Contact Tag */}
          <p className="contact-tag text-[#BDFF00] text-sm tracking-[3px] mb-6">
            Contact Us
          </p>

          {/* Heading */}
          <h1 className="contact-heading text-white text-[32px] sm:text-[48px] lg:text-[64px] font-medium leading-tight">
            We’d love to talk to <br /> you
          </h1>

          {/* Cards container */}
          <div className="contact-card-wrapper mt-12 flex flex-col items-center gap-6 lg:block">

            {/* Phone */}
            <div className="contact-phone-card bg-white/70 backdrop-blur-md p-6 rounded-[16px] w-[300px] sm:w-[350px] shadow-lg lg:absolute lg:left-[-5%] lg:top-[65%]">
              <p className="text-gray-500 text-sm">Phone Number</p>
              <p className="font-semibold text-gray-800">+91 1800-123-4567</p>
            </div>

            {/* Email */}
            <div className="contact-email-card bg-white/70 backdrop-blur-md p-6 rounded-[16px] w-[300px] sm:w-[350px] shadow-lg lg:absolute lg:right-[-7%] lg:top-[-10%]">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-semibold text-gray-800">connect@saa.ai</p>
            </div>

            {/* Head Office */}
            <div className="contact-office-card bg-white/70 backdrop-blur-md p-6 rounded-[16px] w-[300px] sm:w-[450px] lg:w-[530px] shadow-lg z-30 lg:absolute lg:right-[-10%] lg:bottom-[-70%]">
              <p className="text-gray-500 text-sm">Head Office</p>
              <p className="font-semibold text-gray-800 text-sm">
                M74, Kotra Sultanabad, Near Vaishali Nagar, Bhopal, MP 462003,
                India
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="contact-form-section w-full flex justify-center py-12 sm:py-16 lg:py-20 px-4">

        <div className="contact-form w-full max-w-[667px] flex flex-col gap-[24px] sm:gap-[28px]">

          {/* First Row */}
          <div className="contact-row flex flex-col sm:flex-row gap-[17px]">

            <div className="contact-field flex flex-col gap-[12px] w-full">
              <label className="text-[14px] font-medium text-black">
                First Name
              </label>

              <input
                type="text"
                placeholder="First Name"
                className="contact-input h-[60px] sm:h-[70px] lg:h-[75px] border border-[#CBCAD7] rounded-[6px] px-[16px] sm:px-[20px] outline-none"
              />
            </div>

            <div className="contact-field flex flex-col gap-[12px] w-full">
              <label className="text-[14px] font-medium text-black">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Last Name"
                className="contact-input h-[60px] sm:h-[70px] lg:h-[75px] border border-[#CBCAD7] rounded-[6px] px-[16px] sm:px-[20px] outline-none"
              />
            </div>

          </div>

          {/* Phone */}
          <div className="contact-field flex flex-col gap-[12px]">
            <label className="text-[14px] font-medium text-black">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="contact-input h-[60px] sm:h-[70px] lg:h-[75px] border border-[#CBCAD7] rounded-[6px] px-[16px] sm:px-[20px] outline-none"
            />
          </div>

          {/* Email */}
          <div className="contact-field flex flex-col gap-[12px]">
            <label className="text-[14px] font-medium text-black">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your work email"
              className="contact-input h-[60px] sm:h-[70px] lg:h-[75px] border border-[#CBCAD7] rounded-[6px] px-[16px] sm:px-[20px] outline-none"
            />
          </div>

          {/* Address */}
          <div className="contact-field flex flex-col gap-[12px]">
            <label className="text-[14px] font-medium text-black">
              Address
            </label>

            <input
              type="text"
              placeholder="Enter your complete address"
              className="contact-input h-[60px] sm:h-[70px] lg:h-[75px] border border-[#CBCAD7] rounded-[6px] px-[16px] sm:px-[20px] outline-none"
            />
          </div>

          {/* Loan Type */}
          <div className="contact-field flex flex-col gap-[12px]">
            <label className="text-[14px] font-medium text-black">
              Loan Type of Interest
            </label>

            <select className="contact-input h-[60px] sm:h-[70px] lg:h-[75px] border border-[#CBCAD7] rounded-[6px] px-[16px] sm:px-[20px] outline-none">
              <option>Select loan type</option>
              <option>Home Loan</option>
              <option>Business Loan</option>
              <option>Personal Loan</option>
            </select>
          </div>

          {/* Confirm Password */}
          <div className="contact-field flex flex-col gap-[12px]">
            <label className="text-[14px] font-medium text-black">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="contact-input h-[60px] sm:h-[70px] lg:h-[75px] border border-[#CBCAD7] rounded-[6px] px-[16px] sm:px-[20px] outline-none"
            />
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />

    </section>
  );
}