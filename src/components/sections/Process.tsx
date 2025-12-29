import { Search, UserCheck, FileCheck, Rocket, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Discover & Align",
      description: "We dive deep into your organizational culture, requirements, and challenges to build a tailored recruitment strategy.",
      color: "from-primary to-red-600",
      delay: 0.1
    },
    {
      icon: <UserCheck className="h-8 w-8 text-white" />,
      title: "Sourcing & Recruiting",
      description: "Leveraging our diverse talent networks and advanced technology to identify high-caliber active and passive candidates.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: <FileCheck className="h-8 w-8 text-white" />,
      title: "Screening & Compliance",
      description: "Rigorous vetting including credential verification, background checks, and detailed behavioral interviews.",
      color: "from-green-500 to-emerald-600",
      delay: 0.3
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Onboarding & Support",
      description: "Seamless transition ensuring new hires are productive from day one, with ongoing retention support.",
      color: "from-purple-500 to-pink-500",
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stepCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: custom,
        ease: "backOut"
      }
    }),
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: (custom) => ({
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom,
        ease: "backOut"
      }
    }),
    hover: {
      rotate: 15,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const connectorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="process" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
          >
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="font-semibold text-primary">OUR PROCESS —</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Streamlined
            <span className="block bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              Recruitment Process
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            A transparent, results-driven partnership designed to deliver exceptional talent.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Animated Connector Line (Desktop) */}
          <motion.div
            variants={connectorVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden lg:block absolute top-24 left-16 right-16 h-0.5 bg-gradient-to-r from-primary/20 via-blue-500/20 to-green-500/20 -z-10 origin-left"
          />

          {/* Animated Connector Dots */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden lg:flex absolute top-24 left-1/4 right-1/4 justify-between -translate-x-1/4 -z-10"
          >
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: 0.8 + index * 0.1
                    }
                  }
                }}
                className="w-3 h-3 bg-primary rounded-full"
              />
            ))}
          </motion.div>

          {/* Process Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={step.delay}
                variants={stepCardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                className="relative group"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: step.delay + 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary border-2 border-gray-100 rounded-full flex items-center justify-center z-20 shadow-lg"
                >
                  <span className="text-lg font-bold text-gray-900">{index + 1}</span>
                </motion.div>

                {/* Process Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 pt-12 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />

                  {/* Icon Container */}
                  <motion.div
                    custom={step.delay}
                    variants={iconVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover="hover"
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative`}
                  >
                    <div className="relative z-10">
                      {step.icon}
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    variants={itemVariants}
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    variants={itemVariants}
                    className="text-gray-600 leading-relaxed text-sm lg:text-base mb-6 flex-grow"
                  >
                    {step.description}
                  </motion.p>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-red-700 transition-colors duration-300 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>

                {/* Mobile Connector (for last three steps) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={isInView ? { opacity: 1, height: 32 } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, delay: step.delay + 0.3 }}
                    className="lg:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-100 to-gray-200 -z-10"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900">Ready to Transform Your Recruitment?</h4>
                <p className="text-gray-600 text-sm">Let's discuss your specific needs</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-red-600 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/cta"
            >
              <span className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-2" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-4 h-4 bg-blue-500/20 rounded-full animate-bounce"></div>
    </section>
  );
}