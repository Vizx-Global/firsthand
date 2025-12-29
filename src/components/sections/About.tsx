import { motion } from "framer-motion";
import { Target, Users as UsersIcon, ShieldCheck, Star, TrendingUp, Building2, HeartHandshake, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function About() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const values = [
    {
      icon: UsersIcon,
      title: "Partnership First",
      description: "We don't just fill roles; we embed ourselves in your culture to become a true extension of your HR team.",
      color: "from-primary to-red-600",
      delay: 0.1
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      description: "Rigorous screening and compliance checks ensure every candidate meets top-tier standards.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: Target,
      title: "Result-Driven",
      description: "Our metrics-based approach delivers lower time-to-fill and higher retention rates.",
      color: "from-green-500 to-emerald-600",
      delay: 0.3
    }
  ];

  const achievements = [
    { number: "10+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Successful Placements", icon: Star },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
    { number: "24/7", label: "Dedicated Support", icon: HeartHandshake },
  ];

  const valueCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: custom,
        ease: "backOut" as const
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: (custom: number) => ({
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom + 0.1,
        ease: "backOut" as const
      }
    }),
    hover: {
      rotate: 20,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            <Building2 className="w-4 h-4 text-primary" />
            <span className="font-semibold text-primary">ABOUT FIRSTHAND —</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Redefining
            <span className="block bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              RPO Excellence
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Specializing deeply in the sectors that matter most: Healthcare and Education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Mission Statement */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl text-gray-900 font-medium leading-relaxed"
              >
                At <span className="text-primary font-bold">FirstHand</span>, we are redefining Recruitment Process Outsourcing by specializing deeply in the sectors that matter most: Healthcare and Education.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Our mission is to empower organizations with the talent they need to thrive. We understand the unique regulatory and cultural challenges of these industries, allowing us to deliver precision hiring at scale. Whether you need rapid staffing for a new hospital wing or dedicated educators for a district, FirstHand is your strategic talent partner.
              </motion.p>
            </div>

            {/* Vision Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 group-hover:border-primary/30 transition-all duration-500" />
              
              <div className="relative z-10 p-8">
                <div className="pl-6 border-l-4 border-primary">
                  <p className="text-xl lg:text-2xl italic text-gray-700 mb-4 leading-relaxed font-medium">
                    "Our vision is to be the most trusted RPO partner for institutions that serve our communities."
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-primary">Our Vision Statement</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    className="text-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                    <div className="text-xs font-medium text-gray-600">{achievement.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="space-y-6">
            {/* Values Header */}
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
                <p className="text-gray-600">The principles that guide everything we do</p>
              </div>
            </div>

            {/* Values Cards */}
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  custom={value.delay}
                  variants={valueCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border border-gray-200 group-hover:shadow-2xl transition-all duration-500" />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Card Content */}
                  <div className="relative z-10 p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <motion.div
                        custom={value.delay}
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0 relative`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                        
                        {/* Progress Bar Animation */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: value.delay + 0.5 }}
                          viewport={{ once: true }}
                          className="h-1 mt-4 bg-gradient-to-r from-gray-200 to-gray-200 rounded-full overflow-hidden"
                        >
                          <div className={`h-full bg-gradient-to-r ${value.color} rounded-full`} />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Number */}
                  <motion.div
                    animate={{ scale: hoveredValue === index ? 1.2 : 1 }}
                    className={`absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${value.color} shadow-lg`}
                  >
                    0{index + 1}
                  </motion.div>
                </motion.div>
              );
            })}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-red-700 hover:to-red-800 text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group/btn"
              >
                <span className="flex items-center justify-center gap-2 text-lg">
                  Discover Our Approach
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 right-10 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-4 h-4 bg-blue-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-green-500/20 rounded-full animate-ping"></div>
    </section>
  );
}