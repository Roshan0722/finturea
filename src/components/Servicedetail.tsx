import businessImg from "../image/about us-img1.png";
import { Check } from "lucide-react";

const ServiceDetail = () => {

const benefits = [
"Loan up to INR 10 Crores",
"Quick processing"
];

const features = [
"Competitive interest rates",
"Loan amount up to INR 10 Crores",
"Quick processing",
"Dedicated relationship manager"
];

return (
<div className="bg-[#0B111D] text-white">
{/* HERO */}
<section className="pt-40 pb-16">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20">

<h1 className="text-4xl lg:text-5xl font-medium mb-4">
Business Loans
</h1>

<p className="text-white/70 mb-10 max-w-[600px]">
Flexible funding to scale operations and manage cash flow.
</p>

<img
src={businessImg}
className="w-full rounded-[20px] object-cover"
/>

</div>
</section>

{/* KEY BENEFITS */}
<section className="pb-16">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20">

<h2 className="text-2xl font-semibold mb-6">
Key Benefits
</h2>

<div className="space-y-4">
{benefits.map((item,index)=>(
<div key={index} className="flex items-center gap-3 text-white/80">
<Check className="text-[#14B8A6]" size={18}/>
{item}
</div>
))}
</div>

<p className="text-white/60 mt-8 max-w-[650px]">
Finance working capital, expansion, inventory, or new equipment.
Flexible tenures and repayment schedules aligned to cash flow.
</p>

</div>
</section>

{/* FEATURES */}
<section className="pb-16">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20">

<h2 className="text-2xl font-semibold mb-6">
Features
</h2>

<div className="space-y-4">
{features.map((item,index)=>(
<div key={index} className="flex items-center gap-3 text-white/80">
<Check className="text-[#14B8A6]" size={18}/>
{item}
</div>
))}
</div>

</div>
</section>

{/* LOAN INFO HEADER */}
<section className="pb-12">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20">

<div className="bg-gradient-to-r from-[#D3BD00] to-[#14B8A6] p-[1px] rounded-[20px]">
<div className="bg-[#122038] rounded-[20px] p-6 flex justify-between items-center">

<div>
<h3 className="text-lg font-semibold">
Loan Information
</h3>

<p className="text-white/60 text-sm">
Clear eligibility, documents, pricing, and process details
</p>
</div>

<div className="bg-[#D3BD00] text-black px-4 py-1 rounded-full text-xs">
Updated February 16, 2026
</div>

</div>
</div>

</div>
</section>

{/* INFO CARDS */}
<section className="pb-20">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid md:grid-cols-2 lg:grid-cols-2 gap-8">

{/* ELIGIBILITY */}
<div className="bg-[#122038] p-8 rounded-[18px]">
<h3 className="text-lg font-semibold mb-4">
Eligibility Criteria
</h3>

<ul className="space-y-3 text-white/70">
<li>Business vintage 2+ years</li>
<li>Stable turnover and profitability</li>
<li>Credit score 680+ for owners/promoters</li>
<li>Valid GST and business registration</li>
</ul>
</div>

{/* DOCUMENTS */}
<div className="bg-[#122038] p-8 rounded-[18px]">
<h3 className="text-lg font-semibold mb-4">
Required Documents
</h3>

<ul className="space-y-3 text-white/70">
<li>KYC of promoters/directors</li>
<li>GST certificate</li>
<li>Bank statements (12 months)</li>
<li>P&L and balance sheet (2–3 years)</li>
<li>Ownership proof of premises</li>
</ul>
</div>

{/* INTEREST RATES */}
<div className="bg-[#122038] p-8 rounded-[18px]">
<h3 className="text-lg font-semibold mb-4">
Interest Rates
</h3>

<ul className="space-y-3 text-white/70">
<li>Typical range 11% – 20% p.a.</li>
<li>Rates depend on cash flow & collateral</li>
</ul>
</div>

{/* LOAN AMOUNT */}
<div className="bg-[#122038] p-8 rounded-[18px]">
<h3 className="text-lg font-semibold mb-4">
Loan Amount & Tenure
</h3>

<ul className="space-y-3 text-white/70">
<li>Loan amount up to INR 10 Crores</li>
<li>Tenure typically 12–60 months</li>
<li>Secured and unsecured options available</li>
</ul>
</div>

{/* FEES */}
<div className="bg-[#122038] p-8 rounded-[18px]">
<h3 className="text-lg font-semibold mb-4">
Requirements & Fees
</h3>

<ul className="space-y-3 text-white/70">
<li>Processing fee 1% – 2.5%</li>
<li>Collateral may be required</li>
<li>Invoice or stock audits may occur</li>
</ul>
</div>

{/* PROCESS */}
<div className="bg-[#122038] p-8 rounded-[18px]">
<h3 className="text-lg font-semibold mb-4">
Step-by-Step Process
</h3>

<ul className="space-y-3 text-white/70">
<li>Share business profile</li>
<li>Submit financials and KYC</li>
<li>Credit assessment</li>
<li>Sanction and disbursal</li>
</ul>
</div>

{/* REPAYMENT */}
<div className="bg-[#122038] p-8 rounded-[18px]">
<h3 className="text-lg font-semibold mb-4">
Repayment Options
</h3>

<ul className="space-y-3 text-white/70">
<li>Monthly EMI</li>
<li>Working capital overdraft</li>
<li>Part-prepayment allowed</li>
</ul>
</div>

{/* DISBURSAL */}
<div className="bg-[#122038] p-8 rounded-[18px]">
<h3 className="text-lg font-semibold mb-4">
Disbursal Timeline
</h3>

<ul className="space-y-3 text-white/70">
<li>Approval typically 5–10 days</li>
<li>Faster for existing banking customers</li>
</ul>
</div>

</div>
</section>

{/* IMPORTANT NOTES */}
<section className="pb-20">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20">

<div className="bg-[#122038] p-8 rounded-[20px]">
<h3 className="text-lg font-semibold mb-4">
Important Notes
</h3>

<ul className="text-white/70 space-y-2">
<li>Documentation requirements vary by business profile.</li>
<li>Confirm loan structure and charges before sanction.</li>
</ul>
</div>

</div>
</section>

{/* BACK BUTTON */}
<section className="pb-24">
<div className="max-w-[1440px] mx-auto px-6 lg:px-20">

<button className="bg-[#D3BD00] text-black px-6 py-3 rounded-full">
Back to Home
</button>

</div>
</section>

</div>
);
};

export default ServiceDetail;