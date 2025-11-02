import React from "react";

const Hero = () => {
  return (
    <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 md:pt-24">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                Professional Electrical Solutions
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
                Licensed, insured, and trusted electrical contractor serving
                residential, commercial, and industrial clients. Available 24/7
                for emergency repairs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="bg-gray-700 hover:bg-blue-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all transform hover:scale-105 shadow-lg">
                Get Free Quote
              </button>
              <button className="border-2 border-gray-300 hover:bg-gray-300 hover:text-slate-900 text-gray-300 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all transform hover:scale-105">
                Call Now: +1 (212) 696-0824
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="text-center">
                <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg p-3 md:p-4 mb-2 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 mx-auto text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xs md:text-sm font-semibold">
                  Licensed & Insured
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg p-3 md:p-4 mb-2 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 mx-auto text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xs md:text-sm font-semibold">
                  24/7 Emergency
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg p-3 md:p-4 mb-2 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 mx-auto text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xs md:text-sm font-semibold">
                  15+ Years Experience
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg p-3 md:p-4 mb-2 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 mx-auto text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xs md:text-sm font-semibold">
                  Fast Response
                </h3>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:order-last order-first">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional electrician working on electrical panel"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
