import herosectionbg from "../image/herosectionbg.png";
import "./Contact.css"

export default function ContactSection() {
  return (
    <section className="contact-section bg-[#f3f5f6] w-full min-h-screen flex flex-col justify-between items-center">

      {/* HERO SECTION */}
      <div className="contact-hero w-full min-h-[520px] lg:min-h-[530px] relative flex justify-center items-center overflow-visible py-20">

        <img
          src={herosectionbg}
          className="contact-hero-bg absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="contact-hero-content relative w-full max-w-[1200px] text-center px-6">

          <p className="contact-tag text-[#BDFF00] text-sm tracking-[3px] mb-6">
            Contact Us
          </p>

          <h1 className="contact-heading text-white text-[32px] sm:text-[48px] lg:text-[64px] font-medium leading-tight">
            We’d love to talk to <br /> you
          </h1>

          {/* Cards container */}
          <div className="contact-card-wrapper mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center lg:block">

            {/* PHONE */}
            <div className="contact-phone-card bg-white/70 backdrop-blur-md p-4 rounded-[16px] w-full max-w-[250px] shadow-lg text-left lg:absolute lg:left-[-5%] lg:top-[65%]">
              <p className="text-gray-500 text-sm">Phone Number</p>
              <p className="font-semibold text-gray-800">+91 1800-123-4567</p>
            </div>

            {/* EMAIL */}
            <div className="contact-email-card bg-white/70 backdrop-blur-md p-4 rounded-[16px] w-full max-w-[250px] shadow-lg text-left lg:absolute lg:right-[-7%] lg:top-[-10%]">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-semibold text-gray-800">connect@saa.ai</p>
            </div>

            {/* ADDRESS */}
            <div className="contact-office-card bg-white/70 backdrop-blur-md p-4 rounded-[16px] w-full max-w-[420px] shadow-lg z-30 text-left sm:col-span-2 lg:absolute lg:right-[-10%] lg:bottom-[-70%]">
              <p className="text-gray-500 text-sm">Head Office</p>
              <p className="font-semibold text-gray-800 text-sm">
                M74, Kotra Sultanabad, Near Vaishali Nagar, Bhopal, MP 462003, India
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="contact-form-section w-full flex justify-center py-12 sm:py-16 lg:py-20 px-4">

        <div className="contact-form-container w-full max-w-[667px] flex flex-col items-center py-12 px-8 lg:px-24 lg:rounded-[40px]">

          <h2 className="contact-form-title text-3xl font-bold text-[#011627] mb-8">
            Send Message
          </h2>

          <form className="contact-form w-full space-y-5">

            {/* NAME */}
            <div className="contact-name-row grid grid-cols-1 sm:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="First Name"
                className="contact-input w-full bg-[#ffffff] rounded-lg p-3.5 text-sm focus:outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="contact-input w-full bg-[#ffffff] rounded-lg p-3.5 text-sm focus:outline-none"
              />

            </div>

            {/* PHONE */}
            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="contact-input w-full bg-[#ffffff] rounded-lg p-3.5 text-sm focus:outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Enter your work email"
              className="contact-input w-full bg-[#ffffff] rounded-lg p-3.5 text-sm focus:outline-none"
            />

            {/* ADDRESS */}
            <input
              type="text"
              placeholder="Enter your complete address"
              className="contact-input w-full bg-[#ffffff] rounded-lg p-3.5 text-sm focus:outline-none"
            />

            {/* LOAN TYPE */}
            <div className="contact-select-wrapper relative w-full">

              <select className="contact-select w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 pr-10 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/30">
                <option>Select loan type</option>
                <option>Home Loan</option>
                <option>Business Loan</option>
                <option>Personal Loan</option>
              </select>

              <div className="contact-select-arrow pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

            </div>

            {/* MESSAGE */}
            <textarea
              rows="4"
              placeholder="Your message"
              className="contact-textarea w-full bg-[#ffffff] rounded-lg p-3.5 text-sm focus:outline-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="contact-submit-btn w-full bg-gradient-to-r from-[#002B3F] to-[#14B8A6] text-white font-bold py-6 rounded-xl flex items-center justify-center shadow-lg"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>

    </section>
  );
}