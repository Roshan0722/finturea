import React from "react"

const FinancialConsultation: React.FC = () => {
  return (
    <section className="bg-black text-white py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* TOP TEXT */}
        <div className="max-w-2xl mb-20">
          <p className="uppercase text-gray-400 tracking-[4px] mb-6">
            ABOUT US
          </p>

          <h2 className="text-5xl font-bold text-[#0e2a47] mb-6">
            Seamless and secure
            <br />
            banking experience.
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Whether you're saving for a dream vacation, managing everyday
            expenses, or planning for retirement, our personal banking
            solutions cater to your individual needs.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="relative grid grid-cols-3 gap-10 items-start">

          {/* LEFT IMAGE */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/consult-black.jpg"
              className="rounded-3xl"
              alt=""
            />
          </div>

          {/* CENTER AREA */}
          <div className="relative">

            {/* TEXT */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-[#0e2a47]">
                Financial Consultation
              </h3>
              <p className="text-gray-400 text-sm">
                From our experienced experts
              </p>
            </div>

            {/* MAN CARD */}
            <div className="relative w-[300px]">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lime-400 to-teal-400"></div>

              <img
                src="/finance-man.png"
                className="relative rounded-3xl z-10"
                alt=""
              />

              {/* BADGE */}
              <div className="absolute left-4 top-4 bg-white text-black rounded-xl px-4 py-2 shadow">
                <p className="text-xs text-gray-500">
                  MONEY SAVED FOR CLIENT
                </p>
                <p className="font-semibold">
                  Over $32M in 2022
                </p>
              </div>
            </div>

            {/* TEXT */}
            <div className="mt-6">
              <h4 className="text-xl text-[#0e2a47] font-semibold">
                Analysis of your expense
              </h4>
              <p className="text-gray-400 text-sm">
                Teaching introspection
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* WOMAN CARD */}
            <div className="relative mb-10 w-[360px]">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-400 to-lime-400"></div>

              <img
                src="/woman-consult.png"
                className="relative rounded-3xl z-10"
                alt=""
              />

              {/* BADGE */}
              <div className="absolute left-6 bottom-6 bg-white text-black rounded-xl px-4 py-2 shadow">
                <p className="text-xs text-gray-500">
                  OUR TEAM
                </p>
                <p className="font-semibold">
                  Over 34 Experts
                </p>
              </div>
            </div>

            {/* MOBILE CARD */}
            <div className="bg-white rounded-3xl p-6 w-[320px]">

              <img
                src="/finance-app.png"
                className="rounded-xl"
                alt=""
              />

            </div>

            <div className="mt-6">
              <h4 className="text-xl text-[#0e2a47] font-semibold">
                Our proprietary application
              </h4>
              <p className="text-gray-400 text-sm">
                A tool for financial management
              </p>
            </div>
          </div>
        </div>

        {/* FAQ BUTTON */}
        <div className="absolute left-10 top-40">

          <div className="relative">

            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-teal-400 rounded-2xl"></div>

            <div className="bg-gradient-to-r from-lime-400 to-teal-400 text-black px-6 py-4 rounded-xl flex items-center gap-4 font-medium shadow-lg">
              Frequently Asked
              <br />
              Question
              <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">
                →
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default FinancialConsultation