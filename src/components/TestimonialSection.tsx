import ClientCard from "./ui/ClientCard";
import ContactCard from "./ui/ContactCard";
import DottedPattern from "./ui/DottedPattern";
import testimonial from "../image/testimonial-headerimg.png"
import hearticon from "../image/heart Shape.svg"
import './TestimonialSection.css'

export default function TestimonialSection() {
  return (
    <section className="testimonial-section w-full bg-[#0B111D] relative pb-[120px] lg:pb-[600px] overflow-hidden">

<div className="testimonial-header relative w-full lg:w-[90%] rounded-br-[80px] p-[1px] bg-gradient-to-r from-[#BDFF00] to-[#14B8A6]">

<div className="testimonial-inner  pt-[30px] sm:pt-[40px] lg:pt-[60px] pb-[30px] sm:pb-[40px] lg:pb-[20px]
bg-[radial-gradient(circle_at_15%_30%,rgba(91,251,148,0.25)_0%,transparent_55%),radial-gradient(circle_at_170%_100%,rgba(222,252,123,0.25)_0%,transparent_55%),linear-gradient(90deg,#1F6F64_0%,#122038_45%,#1A3148_100%)]
rounded-br-[80px]">

<div className="testimonial-container max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 flex flex-col xl:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-5">

{/* IMAGE */}
<div className="testimonial-image-wrapper relative flex justify-center xl:justify-center xl:translate-y-[60px] xl:translate-x-[10px]">

<img
src={testimonial}
className="testimonial-image w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] xl:w-[350px] xl:h-[350px] rounded-[20px] object-cover z-20"
/>

<div className="testimonial-heart-wrapper relative flex justify-center xl:justify-center xl:translate-y-[60px] xl:translate-x-[40px] z-20">

<div className="testimonial-heart absolute top-[20px] left-[-20px] xl:left-[-70px] xl:top-[0px] w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] xl:w-[50px] xl:h-[50px] rounded-[12px] bg-gradient-to-br from-[#14B8A6] to-[#D3BD00] flex items-center justify-center">

<img className="w-6 h-6" src={hearticon} alt="icon" />

</div>

</div>

<div className="testimonial-connector hidden xl:block absolute top-[370px] left-[70%] w-[400px] h-[6px] bg-white rotate-[20deg] z-0" />

</div>

{/* HEADING */}
<div className="testimonial-heading text-start lg:text-left max-w-[420px] xl:space-y-9">

<p className="gradient-text text-sm font-bold tracking-[0.2em] uppercase">
TESTIMONIALS
</p>

<h2 className="testimonial-title text-4xl lg:text-5xl font-medium text-white tracking-[0.04em] leading-[1.1]">

Hear What
<br />
Our Clients
<br />
Have to Say

</h2>

</div>

{/* PARAGRAPH */}
<div className="testimonial-text text-center lg:text-left max-w-[340px]">

<p className="testimonial-para  text-[#ffffff] opacity-80 text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] lg:leading-[26px] mt-7">

Thousands of customers trust Finturea for reliable and transparent financial solutions. Our clients appreciate the quick approvals, personalized support, and seamless loan experience we deliver. 

</p>

</div>

</div>
</div>
</div>

{/* CARDS */}
<div className="testimonial-cards relative flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[90px]
lg:absolute lg:gap-[80px] lg:top-[450px] lg:left-1/2 lg:-translate-x-[120px] z-20">

<ClientCard />
<ContactCard />

</div>

<DottedPattern />

</section>
  );
}
