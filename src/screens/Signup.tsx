
import React, { useState, useEffect } from "react";
import logo from "../image/logo.svg";
import herosectionrightimg from "../image/herosectionrightimg.svg";
import bg from "../image/herosectionbg.png";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "./Signup.css"

const Signup = () => {

const [tab,setTab]=React.useState('login')
const navigate = useNavigate();

const heroCards = [
  {
  tag:"Explore loan options easily.",
  title:"Find the Right Loan",
  desc:"Discover home, personal, business, and other loan solutions in one place and choose what fits your needs."
  },
  {
  tag:"Plan your repayments with confidence.",
  title:"Calculate Your EMI",
  desc:"Use the EMI calculator to estimate monthly payments, total interest, and manage your loan better."
  },
  {
  tag:"Simple and quick process.",
  title:"Apply in Minutes",
  desc:"Submit your loan request easily and get guidance from financial experts to move forward with confidence."
  }
  ];
  
  const [activeCard,setActiveCard] = useState(0);
  
  useEffect(()=>{
  
  const interval = setInterval(()=>{
  setActiveCard((prev)=>(prev+1)%heroCards.length);
  },3000);
  
  return ()=>clearInterval(interval);
  
  },[]);

return (

<div
className="signup-page min-h-screen flex overflow-hidden bg-cover bg-center bg-no-repeat"
style={{ backgroundImage: `url(${bg})` }}
>

{/* LEFT HERO */}
<section className="signup-left flex w-7/12 relative flex-col justify-between p-12 grid-bg overflow-hidden">
{/* HEADER */}
<div className="signup-header flex justify-between items-center z-10">

<div className="signup-logo flex items-center space-x-2">
<img src={logo} className="logo-img w-8 h-8" />

<span className="logo-text text-white text-2xl font-bold tracking-tight font-[DM_Sans]">
Finture
</span>
</div>

<a
href="/"
className="signup-back flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
>

<div className="back-circle w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">

<svg
onClick={()=>navigate("/")}
className="back-icon h-4 w-4"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
>

<path
d="M10 19l-7-7m0 0l7-7m-7 7h18"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
/>

</svg>

</div>

<span className="back-text text-sm font-medium font-[DM_Sans]">
Back to Home
</span>

</a>

</div>


{/* HERO IMAGE */}
<div className="hero-wrapper relative flex flex-col items-center justify-center z-10">

<div className="hero-image-wrapper relative">

<img
src={herosectionrightimg}
className="hero-image max-w-lg"
/>


{/* BADGE 1 */}
<div className="hero-badge hero-badge-left absolute top-40 -left-24 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg">

<p className="badge-label text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
EXPERIENCES
</p>

<p className="badge-value text-[#011627] font-bold">
Over 2,000 Business
</p>

</div>


{/* BADGE 2 */}
<div className="hero-badge hero-badge-right absolute bottom-10 -right-20 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg">

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
{/* HERO TEXT */}
<div className="hero-text-section z-10 max-w-lg mb-12">

<p className="hero-tag gradient-text text-sm mb-6 font-bold tracking-[0.2em] font-[DM_Sans]">
{heroCards[activeCard].tag}
</p>

<h1 className="hero-title text-white text-4xl lg:text-6xl mb-6 font-medium tracking-[0.04em] leading-[97%] whitespace-nowrap font-[DM_Sans]">
{heroCards[activeCard].title}
</h1>

<p className="hero-description text-white/70 max-w-lg mb-10 font-normal leading-[26px] font-[DM_Sans]">
{heroCards[activeCard].desc}
</p>

{/* DOTS */}
<div className="hero-dots flex items-center space-x-2 mt-8">

{heroCards.map((_,index)=>(
<div
key={index}
className={`h-2 rounded-full transition-all duration-300 ${
activeCard===index ? "w-10 bg-white" : "w-4 bg-gray-600"
}`}
></div>
))}

</div>

</div>

</section>



{/* RIGHT SIDE */}

{tab =='login'? (

<main className="signup-right w-full lg:w-5/12 flex items-center justify-center p-3">

<div className="form-container bg-[#D1DBDB] w-full h-full lg:m-4 lg:rounded-[40px] flex flex-col items-center overflow-y-auto no-scrollbar py-12 px-8 lg:px-24 md:px-12">

{/* LOGO */}
<div className="form-logo mb-6">
<img src={logo} className="logo-img w-12 h-12" />
</div>


<h2 className="form-title text-3xl font-bold text-[#011627] mb-8">
Login
</h2>


{/* GOOGLE */}
<button className="google-login-btn w-full bg-[#E5ECEC] hover:bg-white transition py-3.5 rounded-lg flex items-center justify-center space-x-3 mb-6 shadow-sm">

<span className="google-text text-gray-700 font-medium flex flex-row gap-3">
Login account with Google
<FcGoogle size={22}/>
</span>

</button>


{/* DIVIDER */}
<div className="form-divider w-full flex items-center mb-8">

<div className="divider-line flex-grow h-px bg-gray-400/50"></div>

<span className="divider-text px-4 text-sm text-gray-500 font-medium">
Or
</span>

<div className="divider-line flex-grow h-px bg-gray-400/50"></div>

</div>


{/* FORM */}
<form className="login-form w-full space-y-5">

<div className="input-group mb-5">

<label className="input-label block text-sm font-medium text-black mb-2">
Email
</label>

<input
type="email"
placeholder="Enter your work email"
className="form-input w-full bg-[#E5ECEC] rounded-lg p-3.5 text-sm"
/>

</div>


<div className="input-group mb-4">

<label className="input-label block text-sm font-medium text-black mb-2">
Password
</label>

<input
type="password"
placeholder="Enter your password"
className="form-input w-full bg-[#E5ECEC] rounded-lg p-3.5 text-sm"
/>

</div>


<button
type="submit"
className="submit-btn w-full bg-gradient-to-r from-[#002B3F] to-[#14B8A6] text-white font-bold py-6 rounded-xl"
>

Login

</button>


<div className="forgot-password flex justify-end mb-8 text-sm">

<a href="#" className="forgot-link text-[#00223A] hover:underline">
Forgot Password?
</a>

</div>

</form>


<div className="signup-switch text-center text-sm">

<span className="text-gray-500">
Don't have an account?
</span>

<span
className="create-account text-[#14B8A6] font-medium cursor-pointer"
onClick={()=>setTab('signup')}
>

Create account

</span>

</div>

</div>

</main>

):(


<main className="signup-right w-full lg:w-5/12 flex items-center justify-center p-3">

<div className="form-container bg-[#D1DBDB] w-full h-full lg:m-4 lg:rounded-[40px] flex flex-col items-center overflow-y-auto no-scrollbar py-12 px-8 lg:px-24">

<div className="form-logo mb-6">
<img src={logo} className="logo-img w-12 h-12"/>
</div>


<h2 className="form-title text-3xl font-bold text-[#011627] mb-8">
Create Account
</h2>


<button className="google-login-btn w-full bg-[#E5ECEC] hover:bg-white transition py-3.5 rounded-lg flex items-center justify-center space-x-3 mb-6 shadow-sm">

<span className="google-text text-gray-700 font-medium flex flex-row gap-3">
Login account with Google
<FcGoogle size={22}/>
</span>

</button>


<div className="form-divider w-full flex items-center mb-8">

<div className="divider-line flex-grow h-px bg-gray-400/50"></div>

<span className="divider-text px-4 text-sm text-gray-500 font-medium">
Or
</span>

<div className="divider-line flex-grow h-px bg-gray-400/50"></div>

</div>


<form className="signup-form w-full space-y-5">

<div className="name-grid grid grid-cols-2 gap-4">

<input className="form-input bg-[#E5ECEC] rounded-lg p-3.5 text-sm" placeholder="First Name"/>

<input className="form-input bg-[#E5ECEC] rounded-lg p-3.5 text-sm" placeholder="Last Name"/>

</div>

<input className="form-input w-full bg-[#E5ECEC] rounded-lg p-3.5 text-sm" placeholder="Phone Number"/>

<input className="form-input w-full bg-[#E5ECEC] rounded-lg p-3.5 text-sm" placeholder="Email"/>

<input className="form-input w-full bg-[#E5ECEC] rounded-lg p-3.5 text-sm" placeholder="Address"/>

<input type="password" className="form-input w-full bg-[#E5ECEC] rounded-lg p-3.5 text-sm" placeholder="Password"/>

<input type="password" className="form-input w-full bg-[#E5ECEC] rounded-lg p-3.5 text-sm" placeholder="Confirm Password"/>


<button
type="submit"
className="submit-btn w-full bg-gradient-to-r from-[#002B3F] to-[#14B8A6] text-white font-bold py-6 rounded-xl"
>

Create Account

</button>

</form>


<p className="login-switch text-center text-sm text-gray-600 mt-8 mb-6">

Already have an account?

<a
className="login-link text-[#11A990] cursor-pointer font-bold hover:underline"
onClick={()=>setTab('login')}
>

Login

</a>

</p>

</div>

</main>

)}

</div>

);

};

export default Signup;