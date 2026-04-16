import React from "react";
import "./LoanCalculator.css"
import Calculator from "../image/Calculator.png"
import arrowicon from "../image/arrowicon.svg"

const LoanCalculator: React.FC = () => {
  return (
    <div className="loan-section text-slate-800">

      <main className="loan-container max-w-[1440px] mx-auto px-6 lg:px-20 pt-8 pb-40 relative z-10">

        {/* HERO SECTION */}
        <section className="loan-hero relative flex items-start overflow-hidden">

          <div className="loan-hero-inner max-w-7xl mx-auto w-full py-20 relative z-10 px-6">

            <div className="loan-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* LEFT */}
              <div className="loan-left lg:col-span-5 space-y-6">

                <p className="loan-tag text-[#94a3b8] text-sm font-bold tracking-[20%] uppercase"
            style={{ fontFamily: "DM Sans" }}>
                  Loan Calculator
                </p>

                <h1 className="loan-heading text-4xl lg:text-5xl font-medium text-gray-900 tracking-[4%] leading-14"
            style={{ fontFamily: "DM Sans" }}>
                  Calculate your EMI and Plan
                </h1>

              </div>

              {/* MIDDLE */}
              <div className="loan-middle lg:col-span-3 lg:self-start">

                <p className="loan-description text-gray-500 max-w-lg leading-relaxed text-sm"
            style={{ fontFamily: "DM Sans" }}>
                  Use our simple EMI calculator to estimate monthly payments based on loan amount, interest rate, and tenure. Plan your finances better and choose the repayment option that suits your budget.
                </p>

              </div>

              {/* RIGHT IMAGE */}
              <div className="loan-image-wrapper lg:col-span-4 relative flex justify-start lg:translate-x-20 top-[-30px]">

                <div className="loan-image-box relative w-full max-w-[420px]">

                  <img
                    src={Calculator}
                    className="loan-image w-full"
                  />

                  {/* FLOATING CARD */}
                  <div className="loan-floating-card absolute bottom-[8rem] left-[-12rem] bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/20 min-w-[280px]">

                    <p className="loan-floating-text text-[10px] font-medium tracking-widest text-slate-400 uppercase mb-1">
                     Partners
                    </p>

                    <h3 className="loan-floating-value text-[#1e1b4b] text-2xl font-bold">
                    140+ Partner Banks
                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* MAIN GRID */}
        <div className="loan-main-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">


          {/* INPUT COLUMN */}
          <section className="loan-input lg:col-span-4 space-y-6">

            {/* PURCHASE PRICE */}
            <div className="loan-input-group space-y-2">

              <label className="loan-label block text-xs font-semibold text-slate-500 uppercase">
                Purchase price
              </label>

              <div className="loan-input-wrapper relative">

                <input
                  className="loan-input-field w-full bg-white border border-slate-200 rounded-lg p-3 text-lg font-medium"
                  type="text"
                  value="$ 1,737,000"
                  readOnly
                />

                <input
                  type="range"
                  className="loan-range absolute -bottom-1 left-0 w-full appearance-none bg-transparent"
                  min="0"
                  max="100"
                  defaultValue="60"
                />

              </div>

              <div className="loan-range-values flex justify-between text-[10px] text-slate-400 font-medium px-1">

                <span>$50,000</span>
                <span>$3,000,000</span>

              </div>

            </div>


            {/* DOWN PAYMENT */}
            <div className="loan-input-group space-y-2">

              <label className="loan-label block text-xs font-semibold text-slate-500 uppercase">
                Down payment
              </label>

              <div className="loan-down-wrapper flex gap-2">

                <input
                  className="loan-input-field flex-1 border bg-white border-slate-200 rounded-lg p-3 text-lg font-medium"
                  type="text"
                  value="$ 607,950"
                  readOnly
                />

                <div className="loan-percent-box w-20 relative">

                  <input
                    className="loan-input-field w-full border bg-white border-slate-200 rounded-lg p-3 text-lg font-medium text-center"
                    value="35"
                    readOnly
                  />

                  <span className="loan-percent absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                    %
                  </span>

                </div>

              </div>

              <p className="loan-note text-[10px] text-slate-400 font-medium">
                10% or more of purchase price
              </p>

            </div>


            {/* LOAN LENGTH */}
            <div className="loan-loan-grid grid grid-cols-2 gap-4">

              <div className="loan-input-group space-y-2">

                <label className="loan-label block text-xs font-semibold text-slate-500 uppercase">
                  Length of loan
                </label>

                <select className="loan-select w-full bg-white border border-slate-200 rounded-lg p-3 text-sm font-medium">

                  <option>15 years (fixed)</option>
                  <option>30 years (fixed)</option>

                </select>

              </div>

              <div className="loan-input-group space-y-2">

                <label className="loan-label block text-xs font-semibold text-slate-500 uppercase">
                  Interest rate
                </label>

                <div className="loan-rate-wrapper relative">

                  <input
                    className="loan-input-field w-full bg-white border border-slate-200 rounded-lg p-3 text-sm font-medium"
                    value="4.442"
                    readOnly
                  />

                  <span className="loan-percent absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                    %
                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* RESULT CARD */}
          <section className="loan-result lg:col-span-4">

            <div className="loan-result-card bg-white rounded-2xl shadow-xl p-8 border border-slate-50">

              <div className="loan-result-header text-center mb-8">

                <p className="loan-result-label text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Total monthly payment
                </p>

                <div className="loan-result-amount flex items-center justify-center gap-1">

                  <span className="text-4xl font-light text-slate-400">$</span>
                  <span className="text-6xl font-bold text-slate-800">
                    9,813
                  </span>

                </div>

              </div>


              <div className="loan-result-breakdown space-y-4 border-t border-slate-100 pt-8 mb-8">

                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-400">Principal & interest</span>
                  <span>$8,603</span>
                </div>

                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-400">
                    Homeowner's insurance
                  </span>
                  <span>$66</span>
                </div>

                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-400">Property tax</span>
                  <span>$1,144</span>
                </div>

                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-400">
                    Homeowner's insurance
                  </span>
                  <span>$0</span>
                </div>

              </div>


              <button className="loan-result-button w-full bg-gradient-to-r from-[#D3BD00] to-[#14B8A6] text-white font-medium py-4 rounded-xl transition-all">
                Get started
              </button>

            </div>

          </section>


          {/* RIGHT CTA CARDS */}
          <section className="loan-actions lg:col-span-4 space-y-4 self-end">

            <h3 className="loan-actions-title text-xs font-bold text-slate-500 uppercase mb-4">
              What to do next?
            </h3>


            {[
              "Get preapproved for a mortgage",
              "Find a real estate agent",
              "Learn more about mortgage",
            ].map((text, index) => (
              <div
                key={index}
                className="loan-action-card bg-white p-3 rounded-xl shadow-md border border-slate-50 flex items-center justify-between hover:shadow-lg transition cursor-pointer"
              >

                <div className="loan-action-content flex-grow pr-4">

                  <p className="loan-action-text text-sm font-semibold text-slate-800 mb-4">
                    {text}
                  </p>

                  <img
                    src={arrowicon}
                    className="loan-action-icon w-5 h-5"
                  />

                </div>

                <div className="loan-action-image w-16 h-16 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">

                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>
            ))}

          </section>

        </div>

      </main>

    </div>
  );
};

export default LoanCalculator;