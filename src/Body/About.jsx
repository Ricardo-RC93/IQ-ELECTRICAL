import React from "react";

const About = () => {
  const stats = [
    {
      number: "15+",
      label: "Years Experience",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: "2000+",
      label: "Happy Customers",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "24/7",
      label: "Emergency Service",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: "100%",
      label: "Licensed & Insured",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const certifications = [
    {
      title: "Licensed Master Electrician",
      description: "State certified master electrician",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "NECA Member",
      description: "National Electrical Contractors Association",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
    },
    {
      title: "OSHA Safety Certified",
      description: "Occupational Safety and Health Administration",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Bonded & Insured",
      description: "Fully bonded and insured for your protection",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path
            fillRule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Better Business Bureau A+",
      description: "A+ rating with Better Business Bureau",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Emergency Response Certified",
      description: "Certified for 24/7 emergency electrical response",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              About IQ ELECTRICAL
            </h2>
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-300">
              <p>
                For over 15 years, IQ ELECTRICAL has been the trusted electrical
                contractor for residential, commercial, and industrial clients.
                Our team of licensed master electricians brings expertise,
                reliability, and safety to every project.
              </p>
              <p>
                We pride ourselves on delivering high-quality electrical
                solutions that meet code requirements and exceed customer
                expectations. From simple repairs to complex installations, we
                handle every job with professionalism and attention to detail.
              </p>
              <p>
                Our commitment to safety, quality workmanship, and customer
                satisfaction has made us the preferred choice for electrical
                services in our community. We stay up-to-date with the latest
                electrical codes and technologies to provide you with the best
                solutions.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1692578919818-8418a9390759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Experienced electrician team working on electrical installation"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-slate-700 rounded-lg p-4 md:p-6 hover:bg-gray-200 transition-colors"
            >
              <div className="text-blue-600 flex justify-center mb-3 md:mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">
            Certifications & Credentials
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg p-4 md:p-6 text-center border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="text-blue-600 flex justify-center mb-3 md:mb-4">
                  {cert.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm md:text-base text-gray-300">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg text-white p-6 md:p-8 text-center mt-12 md:mt-16 border border-gray-600">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            15+ Years Serving Our Community
          </h3>
          <p className="text-base md:text-xl mb-4 md:mb-6 text-gray-300">
            Trust the experts at IQ ELECTRICAL for all your electrical needs.
            Licensed, insured, and committed to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="bg-gray-700 hover:bg-blue-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Get Free Quote
            </button>
            <button className="border-2 border-gray-300 hover:bg-gray-300 hover:text-slate-900 text-gray-300 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all transform hover:scale-105">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
