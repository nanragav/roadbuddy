import React, { useState } from "react";
import { Link } from "react-router-dom";
import DriverRegistrationForm from "../components/DriverRegistrationForm";

const DriverPage = () => {
  const [showDriverForm, setShowDriverForm] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const benefits = [
    {
      icon: "🛡️",
      title: "Comprehensive Insurance",
      description: "Per ride coverage for you and clients",
      details: "Fully insured at booking confirmation",
    },
    {
      icon: "💰",
      title: "Competitive Earnings",
      description: "₹99-129 per ride based on distance",
      details: "Direct payments with performance incentives",
    },
    {
      icon: "⏰",
      title: "Flexible Schedule",
      description: "Choose your available hours",
      details: "Work when it suits your lifestyle",
    },
    {
      icon: "🚗",
      title: "Vehicle Operation",
      description: "Drive clients' vehicles safely",
      details: "Professional transportation services",
    },
    {
      icon: "📍",
      title: "Local & Long Distance",
      description: "Drop-off and transport services",
      details: "From local trips to destination transfers",
    },
    {
      icon: "🎯",
      title: "Verified Clients",
      description: "Pre-screened and confirmed bookings",
      details: "Safe and reliable ride opportunities",
    },
  ];

  const requirements = [
    {
      category: "Personal Documents",
      items: [
        "Valid Aadhar Card (original required)",
        "PAN Card (optional but recommended)",
        "Passport size photograph",
        "Emergency contact information",
      ],
    },
    {
      category: "Driving License",
      items: [
        "Valid Indian driving license",
        "Minimum 1-2 years experience",
        "Clean driving record preferred",
        "License expiry date validation",
      ],
    },
    {
      category: "Documents Upload",
      items: [
        "Aadhar Card (front & back)",
        "Driving License (front & back)",
        "Recent passport size photo",
        "Police verification (optional)",
      ],
    },
    {
      category: "Payment Setup",
      items: [
        "Valid UPI ID for payments",
        "Bank account details",
        "IFSC code verification",
        "Account holder name confirmation",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Mike Rodriguez",
      role: "Senior Driver",
      tenure: "3 Years",
      quote:
        "Best job I've ever had. Great pay, flexible schedule, and I love helping people in their time of need.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Lead Driver",
      tenure: "2 Years",
      quote:
        "RoadBuddy invested in my training and helped me advance my career. The team is like family.",
      rating: 5,
    },
    {
      name: "Carlos Martinez",
      role: "Driver",
      tenure: "1 Year",
      quote:
        "Perfect for someone who wants independence while being part of a supportive team.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What are the working hours?",
      answer:
        "We offer flexible scheduling to match your availability. Choose from morning, afternoon, evening, or weekend shifts based on client demand.",
    },
    {
      question: "Do I need my own vehicle?",
      answer:
        "No vehicle required! You'll operate clients' vehicles for their transportation needs, providing professional driving services.",
    },
    {
      question: "What type of training do you provide?",
      answer:
        "Comprehensive training program covering safe driving practices, customer service excellence, GPS navigation, and emergency procedures.",
    },
    {
      question: "How much can I earn?",
      answer:
        "Earnings range from ₹99-129 per ride depending on distance and duration, with opportunities for bonuses and frequent rider incentives.",
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
                Drive Your{" "}
                <span className="text-yellow-400">Career Forward</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Join RoadBuddy's team of professional drivers and make a
                difference while earning great money with flexible schedules.
                Our streamlined 3-step application process gets you started
                quickly.
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
                  <div className="w-full max-w-lg h-64 rounded-2xl bg-gray-300 animate-pulse"></div>
                )}
                <img
                  src="/DriverPage.gif"
                  alt="RoadBuddy Driver in Action"
                  className={`w-full max-w-lg rounded-2xl shadow-2xl transition-opacity duration-500 ${
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
              Why Work With{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                RoadBuddy
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a career path with
              excellent benefits and growth opportunities
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

      {/* Requirements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Driver{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Requirements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for dedicated professionals who want to make a
              difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Drivers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from real RoadBuddy drivers about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
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
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Apply to Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Complete our comprehensive 5-step application process designed for
              Indian drivers
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowDriverForm(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              🚗 Start Driver Application
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Application takes approximately 10-15 minutes to complete
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300"
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of drivers who have found their perfect career with
              RoadBuddy. Our quick 3-step application process makes it easy to
              get started today.
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
                <span>Have Questions?</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Registration Form Modal */}
      <DriverRegistrationForm
        isOpen={showDriverForm}
        onClose={() => setShowDriverForm(false)}
      />
    </div>
  );
};

export default DriverPage;
