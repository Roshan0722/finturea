import React from 'react';
import { Lightbulb, PiggyBank, Briefcase, ArrowUpRight, ShieldCheck, PieChart, Landmark } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import bankingImg from '../image/banking.png';
import "./Servicesection.css"

const Servicessection = () => {

const navigate = useNavigate();

const services = [
{
icon: <PiggyBank size={24} />,
title: "Home Loans",
desc: "Competitive interest rates starting from 7.5% with flexible tenure options up to 30 years.",
slug: "personalized-solutions"
},
{
icon: <Briefcase size={24} />,
title: "Personal Loans ",
desc: "Fast approvals within 24 hours with simple documentation and no collateral requirement.",
slug: "wealth-management"
},
{
icon: <Lightbulb size={24} />,
title: "Business Loans",
desc: "Flexible funding solutions up to ₹10 Crores designed to support business growth and expansion.",
slug: "financial-education"
},
{
icon: <ShieldCheck size={24} />,
title: "Education Loans",
desc: "Funding support for domestic and international education with flexible repayment options.",
slug: "secure-banking"
},
{
icon: <PieChart size={24} />,
title: "Loan Against Property",
desc: "Unlock the value of your property with secured loans offering higher limits and flexible repayment options.",
slug: "investment-plans"
},
{
icon: <Landmark size={24} />,
title: "Balance Transfer Loans",
desc: "Transfer your existing loan to a better interest rate and reduce your monthly repayment burden.",
slug: "tax-optimization"
}
];

return (

<section className="services-section max-w-[1440px] mx-auto px-6 lg:px-20 pt-8 pb-40 relative z-10">

{/* HEADER */}
<div className="services-header grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">

<div className="services-header-left lg:col-span-4">
<span
className="services-subtitle text-[#94a3b8] text-sm font-bold tracking-[0.2em] uppercase"
style={{ fontFamily: "DM Sans" }}
>
OUR SERVICE
</span>
</div>

<div className="services-header-right lg:col-span-8">

<div className="services-header-content space-y-[50px]">

<h2
className="services-title text-4xl lg:text-5xl font-medium text-gray-900 tracking-[0.04em] leading-[1.1]"
style={{ fontFamily: "DM Sans" }}
>
Seamless and secure <br /> Financial experience.
</h2>

<p
className="services-description text-gray-500 max-w-lg leading-relaxed text-sm"
style={{ fontFamily: "DM Sans" }}
>
Whether you're saving for a dream vacation, managing everyday
expenses, or planning for retirement, our personal banking
solutions cater to your individual needs.
</p>

</div>

</div>

</div>


{/* SERVICES GRID */}
<div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-28">

{services.map((service, index) => (

<ServiceFeature
key={index}
icon={service.icon}
title={service.title}
desc={service.desc}
onClick={() => navigate("/service-detail")}
/>

))}

</div>


{/* FEATURE IMAGE */}
<div className="services-feature relative">

<div className="services-feature-wrapper relative">

<img
src={bankingImg}
alt="Banking Experience"
className="services-image w-full h-[500px] lg:h-[650px] object-cover rounded-4xl"
/>


<div className="services-badge absolute top-12 -left-8 lg:-left-24 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/20 min-w-[280px]">

<p className="badge-label text-[10px] font-medium tracking-widest text-slate-400 uppercase mb-1">
Money Saved for Client
</p>

<h3 className="badge-title text-[#1e1b4b] text-2xl font-bold">
10,000+ Happy Clients
</h3>

</div>


<div className="services-cta absolute bottom-0 right-0 bg-[#F5F5F5] p-8 lg:p-14 rounded-tl-[60px] max-w-[500px] border-t border-l border-gray-100">

<h3 className="services-cta-title text-2xl lg:text-[40px] font-medium text-[#1a2b3c] leading-tight flex items-end gap-3 group cursor-pointer">

Meet our best financial experts

<ArrowUpRight
className="cta-arrow text-[#00b08b] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mb-1"
size={32}
/>

</h3>

</div>

</div>

</div>

</section>
);
};


const ServiceFeature = ({ icon, title, desc, onClick }) => (

<div
onClick={onClick}
className="service-card flex flex-col items-start gap-6 group hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer"
>

<div className="service-icon bg-[#00cba9] p-4 rounded-2xl text-white shadow-lg shadow-[#00cba9]/30 group-hover:bg-[#1a2b3c] transition-colors duration-300">
{icon}
</div>

<div className="service-content space-y-3">

<h4
className="service-title1 text-2xl md:text-3xl font-medium"
style={{ fontFamily: "DM Sans" }}
>
{title}
</h4>

<p
className="service-desc text-gray-500 max-w-lg leading-relaxed text-sm"
style={{ fontFamily: "DM Sans" }}
>
{desc}
</p>

</div>

</div>

);

export default Servicessection;