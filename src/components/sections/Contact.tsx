import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";
import { ArrowRight, Users, Calendar, Phone, MapPin, Mail } from "lucide-react";
import FirstHandContactUs from "@/assets/FirstHandContactUs.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "",
    phone: "",
    company: ""
  });
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "", phone: "", company: "" });
      setSuccessPopup(true);
      setLoading(false);
      setTimeout(() => setSuccessPopup(false), 4000);
    }, 1500);
  };

  const handleScheduleConsultation = () => {
    // Handle consultation scheduling
    window.location.href = "#contact";
  };

  const handleQuickApply = () => {
    // Handle quick application
    window.location.href = "#apply";
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Popup */}
        {successPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50"
          >
            <AiOutlineCheckCircle className="text-white text-2xl" />
            <span className="font-semibold text-lg">Message sent successfully!</span>
          </motion.div>
        )}

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <HiOutlineMailOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              GET IN TOUCH —
            </span>
          </motion.div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Discuss Your{" "}
            <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              RPO Needs
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your recruitment process? We're here to help you build 
            your dream team with our expert RPO solutions.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="border border-primary/20 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 p-6 lg:p-8">
            {/* Left Column - Content with Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-snug">
                Got recruitment{" "}
                <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                  challenges?
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
                We specialize in connecting businesses with top talent through our 
                comprehensive Recruitment Process Outsourcing solutions.
              </p>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full max-w-md">
                <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Call Us</h3>
                  <p className="text-gray-600 text-xs">(562) 234-5454</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Email</h3>
                  <p className="text-gray-600 text-xs">info@firsthand-rpo.com</p>
                </div>
              </div>

              {/* Contact Image - Using your FirstHandContactUs.png */}
              <img
                src={FirstHandContactUs}
                alt="FirstHand RPO Contact Illustration"
                className="w-full max-w-md mx-auto lg:mx-0 mt-4"
              />
            </motion.div>

            {/* Right Column - Contact Form and Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              {/* Contact Options Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* RPO Solutions Card */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    RPO Solutions
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    We can help you find the right talent for your team.
                  </p>
                  <button 
                    onClick={handleQuickApply}
                    className="group flex items-center gap-2 text-primary font-semibold hover:text-red-700 transition-colors duration-300 text-sm"
                  >
                    <span>Quick Apply »</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Free Consultation Card */}
                <div className="bg-gradient-to-br from-primary to-red-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Free Consultation
                  </h3>
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">
                    Let's discuss your recruitment needs and how we can help.
                  </p>
                  <button
                    onClick={handleScheduleConsultation}
                    className="group flex items-center gap-2 font-semibold bg-white text-primary px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm"
                  >
                    <span>Schedule Now »</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center">
                    <HiOutlineMailOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Reach Out to Us</h3>
                    <p className="text-gray-600 text-sm lg:text-base">Send us a message</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                      placeholder="Tell us about your recruitment challenges and needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl group"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <ImSpinner2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Submit
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;