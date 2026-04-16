import "../TestimonialSection.css"

import testimonial1 from "../../image/testimonial1.jpg"

export default function ClientCard() {
  return (
    <div
      className="
      client-card
      w-full
      max-w-[320px]
      sm:max-w-[340px]
      lg:w-[370px]

      min-h-[300px]
      lg:min-h-[370px]

      bg-white
      rounded-[20px]
      p-6 sm:p-8 lg:p-10
      text-center
      shadow-xl
      mx-auto
      flex flex-col
      items-center
      justify-center
      "
    >

      <img
        src={testimonial1}
        className="
        client-avatar
        w-[50px] h-[50px]
        sm:w-[55px] sm:h-[55px]
        lg:w-[60px] lg:h-[60px]
        rounded-full
        "
      />

      <p
        className="client-text mt-4 sm:mt-5 lg:mt-6 text-gray-500 max-w-lg leading-relaxed text-sm"
        style={{ fontFamily: "DM Sans" }}
      >
        The security measures in place also give me peace of mind knowing that
        my financial information is protected. I couldn't be happier with the
        level of service and convenience they provide.
      </p>

      <p className="client-name mt-6 lg:mt-8 font-semibold text-gray-800 text-sm">
        JENNIFER GOLDSTEIN
      </p>

    </div>
  );
}