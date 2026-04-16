import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import logo from "../image/logo.svg";
import herosectionrightimg from "../image/herosectionrightimg.svg";
import bg from "../image/herosectionbg.png";
import "./Signup.css"

const Applynow = () => {

const navigate = useNavigate();
const [step,setStep]=useState(1);

const [formData,setFormData]=useState({
fullName:"",
phone:"",
email:"",
altPhone:"",
loanType:"Personal Loan",
loanAmount:"",
monthlyIncome:"",
address:"",
loanPurpose:"",
employmentType:"Self Employed"
});

const nextStep=()=>setStep((prev)=>prev+1);
const prevStep=()=>setStep((prev)=>prev-1);

const handleInput=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
};

return(

<div
className="signup-page min-h-screen flex overflow-hidden bg-cover bg-center bg-no-repeat"
style={{ backgroundImage: `url(${bg})` }}
>


{/* LEFT HERO */}
<section className="signup-left hidden lg:flex w-7/12 relative flex-col justify-between p-12 grid-bg overflow-hidden">


{/* HEADER */}
<div className="signup-header flex justify-between items-center z-10">

<div
className="signup-logo flex items-center space-x-2 cursor-pointer"
onClick={()=>navigate("/")}
>

<img src={logo} className="logo-img w-8 h-8"/>

<span className="logo-text text-white text-2xl font-bold tracking-tight">
Finture
</span>

</div>


<button
onClick={()=>navigate("/")}
className="signup-back flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
>

<div className="back-circle w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">

<ChevronLeft size={16}/>

</div>

<span className="back-text text-sm font-medium">
Back to Home
</span>

</button>

</div>


{/* HERO IMAGE */}
<div className="hero-wrapper relative flex flex-col items-center justify-center z-10">

<div className="hero-image-wrapper relative">

<img
src={herosectionrightimg}
className="hero-image max-w-lg"
/>


<div className="hero-badge hero-badge-left absolute top-40 -left-24 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg">

<p className="badge-label text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
EXPERIENCES
</p>

<p className="badge-value text-[#011627] font-bold">
Over 2,000 Business
</p>

</div>

</div>

</div>


{/* HERO TEXT */}
<div className="hero-text-section z-10 max-w-lg mb-12">

<p className="hero-tag gradient-text text-sm mb-4 font-bold tracking-[0.2em] uppercase">
Apply Now
</p>

<h1 className="hero-title text-white text-4xl lg:text-5xl mb-6 font-medium leading-tight whitespace-nowrap">
Loan Application — Step {step}/3
</h1>

<p className="hero-description text-white/70 max-w-md mb-10">

{step===1 && "Start by providing your basic contact information so our experts can reach out."}

{step===2 && "Help us understand your financial needs by specifying the loan type."}

{step===3 && "Finalize your application by providing your address and employment status."}

</p>


<div className="hero-dots flex items-center space-x-3 mt-8">

<div className={`dot ${step===1?"dot-active":""}`}></div>

<div className={`dot ${step===2?"dot-active":""}`}></div>

<div className={`dot ${step===3?"dot-active":""}`}></div>

</div>

</div>

</section>



{/* RIGHT FORM */}

<main className="signup-right w-full lg:w-5/12 flex items-center justify-center p-3">

<div className="form-container bg-[#D1DBDB] w-full h-full lg:m-4 lg:rounded-[40px] flex flex-col items-center overflow-y-auto py-12 px-8 lg:px-20">


<div className="form-logo mb-6">
<img src={logo} className="logo-img w-12 h-12"/>
</div>


<h2 className="form-title text-4xl font-bold text-[#011627] mb-2 text-center">

{step===1 && "Basic Details"}
{step===2 && "Loan Information"}
{step===3 && "Final Details"}

</h2>


<p className="form-subtitle text-gray-500 text-base mb-10 text-center">
Fill in your details to apply for a loan.
</p>


<div className="signup-form w-full">


{/* STEP 1 */}
{step===1 && (

<div className="form-step space-y-6">

<div className="input-group flex flex-col gap-2">

<label className="input-label text-[15px] font-bold text-[#011627] ml-1">
Full Name
</label>

<input
name="fullName"
value={formData.fullName}
onChange={handleInput}
className="form-input w-full bg-[#E5ECEC] rounded-xl p-4"
/>

</div>


<div className="input-group flex flex-col gap-2">

<label className="input-label text-[15px] font-bold text-[#011627] ml-1">
Phone Number
</label>

<input
name="phone"
value={formData.phone}
onChange={handleInput}
className="form-input w-full bg-[#E5ECEC] rounded-xl p-4"
/>

</div>


<div className="input-group flex flex-col gap-2">

<label className="input-label text-[15px] font-bold text-[#011627] ml-1">
Email
</label>

<input
name="email"
value={formData.email}
onChange={handleInput}
className="form-input w-full bg-[#E5ECEC] rounded-xl p-4"
/>

</div>

</div>

)}



{/* STEP 2 */}

{step===2 && (

<div className="form-step space-y-6">

<input
name="loanAmount"
value={formData.loanAmount}
onChange={handleInput}
className="form-input w-full bg-[#E5ECEC] rounded-xl p-4"
placeholder="Loan Amount"
/>

<input
name="monthlyIncome"
value={formData.monthlyIncome}
onChange={handleInput}
className="form-input w-full bg-[#E5ECEC] rounded-xl p-4"
placeholder="Monthly Income"
/>

</div>

)}



{/* STEP 3 */}

{step===3 && (

<div className="form-step space-y-6">

<textarea
name="address"
value={formData.address}
onChange={handleInput}
className="form-input w-full bg-[#E5ECEC] rounded-xl p-4"
placeholder="Address"
/>

<input
name="loanPurpose"
value={formData.loanPurpose}
onChange={handleInput}
className="form-input w-full bg-[#E5ECEC] rounded-xl p-4"
placeholder="Loan Purpose"
/>

</div>

)}



<div className="form-actions mt-12 space-y-4">

<button
onClick={step===3?()=>console.log(formData):nextStep}
className="submit-btn w-full bg-gradient-to-r from-[#002B3F] to-[#14B8A6] text-white font-bold py-5 rounded-2xl"
>

{step===3?"Submit Application":"Next Step"}

</button>


{step>1 &&(

<button
onClick={prevStep}
className="prev-btn w-full text-gray-500 font-semibold py-2"
>

Previous Step

</button>

)}

</div>

</div>


<p className="support-text text-center text-sm text-gray-500 mt-12">

Need help?

<span className="support-link text-[#14B8A6] font-bold cursor-pointer hover:underline">
Contact Support
</span>

</p>

</div>

</main>

</div>

);

};

export default Applynow;