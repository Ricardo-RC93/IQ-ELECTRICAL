import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will contact you soon.");
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ready to start your electrical project? Contact us today for a free
            consultation and quote. We're here to help with all your electrical
            needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg p-4 md:p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-2 md:mb-3">
                    <div className="bg-blue-600 text-white p-2 md:p-3 rounded-lg">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                    Phone
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    (555) 123-4567
                  </p>
                  <p className="text-gray-300 font-semibold text-xs md:text-sm mt-1">
                    Emergency: (555) 911-ELEC
                  </p>
                </div>

                {/* Email */}
                <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg p-4 md:p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-2 md:mb-3">
                    <div className="bg-blue-600 text-white p-2 md:p-3 rounded-lg">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                    Email
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    info@iqelectrical.com
                  </p>
                  <p className="text-gray-300 font-semibold text-xs md:text-sm mt-1">
                    emergency@iqelectrical.com
                  </p>
                </div>

                {/* Location */}
                <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg p-4 md:p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-2 md:mb-3">
                    <div className="bg-blue-600 text-white p-2 md:p-3 rounded-lg">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                    Location
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    123 Electric Avenue
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm">
                    Your City, State 12345
                  </p>
                </div>

                {/* Hours */}
                <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg p-4 md:p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-2 md:mb-3">
                    <div className="bg-blue-600 text-white p-2 md:p-3 rounded-lg">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
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
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                    Hours
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    Mon-Fri: 7AM-6PM
                  </p>
                  <p className="text-gray-300 font-semibold text-xs md:text-sm mt-1">
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg text-white p-4 md:p-6 border border-gray-600">
              <h4 className="text-lg md:text-xl font-bold mb-3">
                Emergency Service Available
              </h4>
              <p className="mb-4 text-sm md:text-base text-gray-300">
                Electrical emergencies can happen anytime. Our certified
                electricians are available 24/7 to handle urgent electrical
                issues and ensure your safety.
              </p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm md:text-base">
                Call Emergency Line: (555) 911-ELEC
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg shadow-lg p-6 md:p-8 border border-slate-700 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Electrical</option>
                  <option value="commercial">Commercial Electrical</option>
                  <option value="industrial">Industrial Electrical</option>
                  <option value="emergency">Emergency Repairs</option>
                  <option value="lighting">Lighting Solutions</option>
                  <option value="inspection">Safety & Inspections</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Describe your electrical needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-colors flex items-center justify-center text-sm md:text-base"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send Message & Get Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
