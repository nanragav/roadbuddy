import React, { useState } from "react";
import { Link } from "react-router-dom";

const MechanicPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    certifications: [],
    specializations: [],
    availability: "full-time",
    ownTools: false,
    backgroundCheck: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCheckboxGroup = (name, value, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        [name]: [...formData[name], value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: formData[name].filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mechanic application submitted:", formData);
    alert(
      "Thank you for your application! We will review it and contact you within 48 hours."
    );
  };

  const benefits = [
    {
      icon: "🛡️",
      title: "Comprehensive Insurance",
      description: "Per service coverage",
      details: "Full protection for every job you complete",
    },
    {
      icon: "💰",
      title: "Excellent Earnings",
      description: "₹99-129 per service",
      details: "Competitive rates based on service complexity",
    },
    {
      icon: "🛠️",
      title: "Professional Tools",
      description: "State-of-the-art equipment",
      details: "All diagnostic tools and equipment provided",
    },
    {
      icon: "🚐",
      title: "Mobile Workshop",
      description: "Fully equipped service vans",
      details: "Complete mobile workshop with everything you need",
    },
    {
      icon: "📚",
      title: "Continuous Training",
      description: "Latest technology updates",
      details: "Ongoing certification and skill development",
    },
    {
      icon: "🎯",
      title: "Career Advancement",
      description: "Lead technician opportunities",
      details: "Clear path to senior and management roles",
    },
  ];

  const requirements = [
    {
      category: "Personal Documents",
      items: ["Valid Aadhar Card", "PAN Card", "Recent passport-size photos"],
    },
    {
      category: "Driving License",
      items: [
        "Valid driving license",
        "LMV (Light Motor Vehicle) license",
        "Clean driving record",
      ],
    },
    {
      category: "Background Checks",
      items: [
        "Criminal background verification",
        "Police clearance certificate",
        "Reference checks",
      ],
    },
    {
      category: "Skills & Experience",
      items: [
        "2+ years automotive repair experience",
        "Basic mechanical knowledge",
        "Customer service skills",
      ],
    },
  ];

  const specializations = [
    "Engine Repair",
    "Transmission",
    "Brake Systems",
    "Electrical/Electronics",
    "Air Conditioning",
    "Suspension",
    "Hybrid/Electric Vehicles",
    "Diesel Engines",
  ];

  const certificationOptions = [
    "ASE A1 - Engine Repair",
    "ASE A2 - Automatic Transmission",
    "ASE A3 - Manual Drive Train",
    "ASE A4 - Suspension & Steering",
    "ASE A5 - Brakes",
    "ASE A6 - Electrical/Electronic",
    "ASE A7 - Heating & AC",
    "ASE A8 - Engine Performance",
    "State Inspection License",
    "Manufacturer Certifications",
  ];

  const testimonials = [
    {
      name: "Arun Kumar",
      role: "Certified Mechanic",
      tenure: "Joining Soon",
      quote:
        "I'm excited to join RoadBuddy and serve Chennai with professional mobile repair services. The comprehensive insurance and good earnings make this opportunity perfect.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Auto Technician",
      tenure: "Pre-Launch Member",
      quote:
        "The training programs and modern equipment at RoadBuddy will help me provide excellent service to Coimbatore customers. Looking forward to the launch!",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Mobile Mechanic",
      tenure: "Ready to Start",
      quote:
        "With RoadBuddy's support and the ₹99-129 per service rate, I can focus on quality repairs while building a sustainable career in Madurai.",
      rating: 5,
    },
  ];

  const serviceTypes = [
    {
      icon: "🔧",
      title: "Engine Repair",
      description: "Complete engine diagnostics and repair",
      tools: "OBD-II scanners, compression testers, timing tools",
    },
    {
      icon: "🛞",
      title: "Brake Systems",
      description: "Brake repair and maintenance",
      tools: "Brake lathes, calipers, hydraulic systems",
    },
    {
      icon: "⚡",
      title: "Electrical Systems",
      description: "Modern vehicle electronics",
      tools: "Multimeters, oscilloscopes, programming tools",
    },
    {
      icon: "❄️",
      title: "AC & Climate",
      description: "HVAC system repair",
      tools: "AC machines, refrigerant recovery, leak detectors",
    },
    {
      icon: "🔄",
      title: "Transmission",
      description: "Automatic and manual transmission service",
      tools: "Transmission jacks, diagnostic software, rebuild kits",
    },
    {
      icon: "🪜",
      title: "Suspension & Steering",
      description: "Alignment and suspension repair",
      tools: "Alignment machines, strut compressors, ball joint tools",
    },
    {
      icon: "🔋",
      title: "Battery & Electrical",
      description: "Battery testing and electrical repairs",
      tools: "Battery testers, wiring harnesses, alternators",
    },
    {
      icon: "🚗",
      title: "General Maintenance",
      description: "Oil changes, filters, and routine service",
      tools: "Oil extractors, filter wrenches, service equipment",
    },
  ];

  const faqs = [
    {
      question: "What documents do I need to apply?",
      answer:
        "You'll need a valid Aadhar Card, PAN Card, driving license, and recent passport-size photos. Background verification will be conducted during the application process.",
    },
    {
      question: "Do I need my own tools?",
      answer:
        "Basic hand tools are helpful, but we provide all diagnostic equipment, specialty tools, and heavy equipment in our mobile workshops.",
    },
    {
      question: "What is the work schedule like?",
      answer:
        "We offer flexible scheduling with day, evening, and weekend shifts available. Emergency calls may require occasional overtime at premium rates.",
    },
    {
      question: "How much can I earn?",
      answer:
        "You can earn ₹99-129 per service depending on complexity, plus bonuses for completed jobs and potential overtime opportunities.",
    },
    {
      question: "What training do you provide?",
      answer:
        "Complete onboarding, ongoing manufacturer training, new technology updates, and support for additional certifications to help you grow your skills.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with GIF */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">
                Master Your <span className="text-yellow-400">Craft</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Join RoadBuddy's elite team of certified mechanics and take your
                automotive career to the next level with cutting-edge technology
                and great benefits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("application-form")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("benefits")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Benefits
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {!imageLoaded && (
                  <div className="w-full max-w-lg h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
                )}
                <img
                  src="/MechanicPage.gif"
                  alt="RoadBuddy Mechanic at Work"
                  className={`w-full max-w-lg rounded-2xl shadow-2xl transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 rounded-2xl ring-4 ring-yellow-400/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                RoadBuddy
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the tools, training, and environment for automotive
              professionals to excel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6">{benefit.icon}</div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-lg font-semibold text-blue-600 mb-3">
                    {benefit.description}
                  </p>

                  <p className="text-gray-600">{benefit.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Service{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Specializations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work with modern equipment on diverse automotive systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <p className="text-sm text-blue-600">{service.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Mechanic{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Requirements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for skilled professionals who take pride in their
              work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Mechanics Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from experienced technicians about their RoadBuddy career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic text-lg">
                  "{testimonial.quote}"
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 font-semibold">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    With RoadBuddy: {testimonial.tenure}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="application-form"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Apply now to become a RoadBuddy certified technician
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select experience</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">
                  Certifications (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certificationOptions.map((cert) => (
                    <label key={cert} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.certifications.includes(cert)}
                        onChange={(e) =>
                          handleCheckboxGroup(
                            "certifications",
                            cert,
                            e.target.checked
                          )
                        }
                        className="text-blue-600"
                      />
                      <span className="text-gray-700">{cert}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">
                  Specializations (select your areas of expertise)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {specializations.map((spec) => (
                    <label key={spec} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.specializations.includes(spec)}
                        onChange={(e) =>
                          handleCheckboxGroup(
                            "specializations",
                            spec,
                            e.target.checked
                          )
                        }
                        className="text-blue-600"
                      />
                      <span className="text-gray-700">{spec}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Availability
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["full-time", "part-time", "contract"].map((option) => (
                    <label key={option} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="availability"
                        value={option}
                        checked={formData.availability === option}
                        onChange={handleChange}
                        className="text-blue-600"
                      />
                      <span className="capitalize text-gray-700">
                        {option.replace("-", " ")}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="ownTools"
                    checked={formData.ownTools}
                    onChange={handleChange}
                    className="mt-1 text-blue-600"
                  />
                  <span className="text-gray-700">
                    I own basic hand tools required for automotive repair
                  </span>
                </label>

                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="backgroundCheck"
                    checked={formData.backgroundCheck}
                    onChange={handleChange}
                    required
                    className="mt-1 text-blue-600"
                  />
                  <span className="text-gray-700">
                    I consent to a background check and drug screening *
                  </span>
                </label>

                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    required
                    className="mt-1 text-blue-600"
                  />
                  <span className="text-gray-700">
                    I agree to the terms and conditions and privacy policy *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:bg-gray-100 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Ready to Level Up Your Career?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the premier automotive service team and work with the latest
              technology while building a rewarding career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("application-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MechanicPage;
