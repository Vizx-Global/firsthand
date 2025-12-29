import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Stethoscope, GraduationCap, ArrowRight, CheckCircle, Target, Users, Shield } from "lucide-react";
import healthcareImage from "@/assets/healthcare_service.png";
import educationImage from "@/assets/education_service.png";

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services = [
    {
      id: "healthcare",
      icon: Stethoscope,
      title: "Healthcare Staffing RPO",
      description: "Comprehensive staffing solutions for hospital systems, clinics, and allied health facilities. We handle the entire lifecycle from sourcing to credentialing.",
      image: healthcareImage,
      imageAlt: "Healthcare professionals in a hospital setting",
      features: [
        "Nursing & Allied Health",
        "Physician Recruitment", 
        "Clinical Leadership",
        "Regulatory Compliance"
      ],
      color: "primary",
      accentColor: "text-primary",
      bgColor: "from-primary/10 to-primary/5",
      borderColor: "border-primary/20"
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Education RPO",
      description: "Strategic talent acquisition for school districts, universities, and private institutions. We find educators who are not just qualified, but culturally aligned.",
      image: educationImage,
      imageAlt: "Educators and students in a learning environment",
      features: [
        "Teachers & Faculty",
        "Administration & Leadership",
        "Support Staff",
        "High-Volume Seasonal Hiring"
      ],
      color: "green",
      accentColor: "text-green-500",
      bgColor: "from-green-500/10 to-green-500/5",
      borderColor: "border-green-500/20"
    }
  ];

  const benefits = [
    { icon: Target, text: "Industry-Specific Expertise", delay: 0.1 },
    { icon: Users, text: "Dedicated Account Teams", delay: 0.2 },
    { icon: Shield, text: "Compliance & Quality Assurance", delay: 0.3 },
    { icon: CheckCircle, text: "Guaranteed Results", delay: 0.4 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: "backOut"
      }
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
          >
            <Target className="w-4 h-4 text-primary" />
            <span className="font-semibold text-primary">OUR SERVICES —</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Specialized
            <span className="block bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              RPO Solutions
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            We deliver tailored recruitment solutions for the unique demands of healthcare and education sectors.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              variants={itemVariants}
              custom={benefit.delay}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-700">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-500" />
                
                {/* Animated Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                {/* Floating Icon Background */}
                <motion.div
                  animate={{
                    rotate: hoveredCard === service.id ? 360 : 0,
                    scale: hoveredCard === service.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                >
                  <Icon className="w-32 h-32" />
                </motion.div>

                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Image Section */}
                  <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[16/9] relative group/image"
                  >
                    <img 
                      src={service.image} 
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${service.borderColor} ${
                        service.color === 'primary' ? 'text-primary bg-primary/10' : 'text-green-600 bg-green-500/10'
                      }`}
                    >
                      {service.color === 'primary' ? 'Healthcare' : 'Education'} RPO
                    </motion.div>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      service.color === 'primary' ? 'bg-primary/10' : 'bg-green-500/10'
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${service.accentColor}`} />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900"
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base"
                  >
                    {service.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3 mb-8"
                  >
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        variants={itemVariants}
                        custom={idx * 0.05}
                        className="flex items-center gap-3 text-gray-700 group/feature"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-2 h-2 rounded-full ${
                            service.color === 'primary' ? 'bg-primary' : 'bg-green-500'
                          }`}
                        />
                        <span className="text-sm lg:text-base group-hover/feature:translate-x-1 transition-transform duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full justify-between border-gray-200 hover:border-primary group/btn ${
                        service.color === 'primary' 
                          ? 'hover:bg-primary hover:text-white' 
                          : 'hover:bg-green-500 hover:text-white hover:border-green-500'
                      } transition-all duration-300 py-6 rounded-xl`}
                    >
                      <span className="font-semibold">
                        Explore {service.color === 'primary' ? 'Healthcare' : 'Education'} RPO
                      </span>
                      <motion.div
                        animate={{ x: hoveredCard === service.id ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </div>

                {/* Floating Particles */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${
                    service.color === 'primary' ? 'bg-primary/30' : 'bg-green-500/30'
                  }`}
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full ${
                    service.color === 'primary' ? 'bg-primary/20' : 'bg-green-500/20'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-primary/10 via-primary/5 to-green-500/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">Need Both Healthcare & Education Solutions?</h4>
                <p className="text-gray-600 text-sm">Get comprehensive RPO services for your entire organization</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-red-600 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/cta"
            >
              <span className="flex items-center gap-2">
                Request Full RPO Proposal
                <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-2" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 left-10 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-60 right-20 w-4 h-4 bg-green-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-blue-500/20 rounded-full animate-ping"></div>
    </section>
  );
}