import React from "react";

const Services = () => {
  const services = [
    {
      title: "Residential Electrical",
      description:
        "Complete home electrical services including wiring, outlets, lighting, and panel upgrades.",
      features: [
        "New Construction Wiring",
        "Electrical Panel Upgrades",
        "Outlet & Switch Installation",
        "Lighting Design",
      ],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Commercial Electrical",
      description:
        "Professional commercial electrical solutions for offices, retail spaces, and businesses.",
      features: [
        "Office Electrical Systems",
        "Retail Lighting",
        "Security Systems",
        "Data Cabling",
      ],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2h10z"
            clipRule="evenodd"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Industrial Electrical",
      description:
        "Heavy-duty industrial electrical services for manufacturing and industrial facilities.",
      features: [
        "Motor Controls",
        "Power Distribution",
        "Industrial Automation",
        "Maintenance Services",
      ],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Electrical Repairs",
      description:
        "Fast and reliable electrical repair services available 24/7 for emergencies.",
      features: [
        "Emergency Repairs",
        "Troubleshooting",
        "Code Violations",
        "Safety Inspections",
      ],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fillRule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Lighting Solutions",
      description:
        "Custom lighting design and installation for residential and commercial spaces.",
      features: [
        "LED Upgrades",
        "Landscape Lighting",
        "Smart Lighting",
        "Energy Efficiency",
      ],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM14.95 14.95a1 1 0 001.414-1.414l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414zM14 13a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Safety & Inspections",
      description:
        "Comprehensive electrical safety inspections and code compliance services.",
      features: [
        "Safety Inspections",
        "Code Compliance",
        "GFCI Installation",
        "Surge Protection",
      ],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-16 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive electrical services for residential, commercial, and
            industrial clients. Licensed professionals with over 15 years of
            experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg shadow-lg border border-slate-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden bg-slate-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.backgroundColor = "#1e293b";
                  }}
                />
              </div>

              {/* Service Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="text-blue-600 mr-3">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4 md:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs md:text-sm text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-blue-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Service CTA */}
        <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg text-white p-6 md:p-8 text-center shadow-xl border border-gray-600">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Need Emergency Service?
          </h3>
          <p className="text-base md:text-xl mb-4 md:mb-6">
            Electrical emergencies don't wait for business hours. Our certified
            electricians are available 24/7 to handle urgent electrical issues
            and keep you safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <div className="text-center">
              <p className="text-base md:text-lg font-semibold">
                Call Emergency Line:
              </p>
              <p className="text-2xl md:text-3xl font-bold">
                +1 (212) 696-0824
              </p>
            </div>
            <button className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-700 font-bold py-3 px-6 md:px-8 rounded-lg transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
