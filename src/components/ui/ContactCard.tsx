import "../TestimonialSection.css"

export default function ContactCard() {
  return (
    <div
      className="
      contact-card
      w-full
      max-w-[300px] 
      sm:max-w-[340px]
      md:max-w-[360px]
      lg:w-[370px]

      min-h-[260px]
      sm:min-h-[300px]
      md:min-h-[330px]
      lg:h-[370px]

      rounded-[20px]
      p-6 sm:p-7 md:p-8 lg:p-10
      text-white
      bg-gradient-to-r from-[#C9D400] via-[#5FBF6A] to-[#12A6A6]
      flex flex-col
      "
    >

      {/* Title */}
      <h3 className="contact-title text-[32px] font-medium tracking-wide">
        Get in Touch
      </h3>

      {/* Email */}
      <p className="contact-text mt-12 text-[16px] italic text-white/80 border-b border-white/40 pb-3">
        Email – connect@saa.ai
      </p>

      {/* Phone */}
      <p className="contact-text mt-8 text-[16px] italic text-white/80 border-b border-white/40 pb-3">
        Phone – +91 1800-123-4567
      </p>

      {/* Button */}
      <div className="mt-auto flex justify-end">

        <button
          className="
          contact-button
          bg-[#E9E9E9]
          text-gray-800
          px-8
          py-4
          rounded-[18px]
          text-[18px]
          font-medium
          shadow-sm
          hover:scale-[1.02]
          transition
          "
        >
          Contact Us
        </button>

      </div>

    </div>
  );
}