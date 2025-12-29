import { motion } from "framer-motion";
import { Quote, Award } from "lucide-react";
import { useRef } from "react";

export function Trust() {
  const containerRef = useRef(null);

  const testimonials = [
    {
      quote: "FirstHand completely transformed our nursing recruitment. Their ability to find qualified candidates who matched our culture was impressive.",
      author: "Sarah Jenkins",
      title: "Chief Nursing Officer, Metro General Hospital",
      rating: 5,
      category: "healthcare"
    },
    {
      quote: "The team at FirstHand understands higher education. They helped us fill critical faculty positions in record time before the semester started.",
      author: "Dr. Robert Chen",
      title: "Provost, State University System",
      rating: 5,
      category: "education"
    },
    {
      quote: "Compliance was our biggest headache. FirstHand's RPO solution handled every credentialing detail flawlessly.",
      author: "Michael Ross",
      title: "HR Director, Community Health Network",
      rating: 5,
      category: "healthcare"
    }
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.15,
        ease: "backOut" as const
      }
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        {/* Decorative Quotes */}
        <div className="absolute top-20 left-10 text-primary/5">
          <Quote className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-10 text-green-500/5">
          <Quote className="w-40 h-40" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
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
            <Award className="w-4 h-4 text-primary" />
            <span className="font-semibold text-primary">TRUST & EXCELLENCE —</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by Leading
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Organizations
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Delivering excellence for partners who demand the best.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border border-gray-200 group-hover:shadow-2xl transition-all duration-500" />
              
              {/* Animated Gradient Border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${
                testimonial.category === 'healthcare' 
                  ? 'from-primary/10 to-primary/5' 
                  : 'from-green-500/10 to-green-500/5'
              } opacity-0 group-hover:opacity-100 transition-all duration-500`} />

              {/* Quote Mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="absolute top-6 left-6 text-6xl font-serif"
              >
                <Quote className={`w-12 h-12 ${
                  testimonial.category === 'healthcare' ? 'text-primary/20' : 'text-green-500/20'
                }`} />
              </motion.div>

              {/* Card Content */}
              <div className="relative z-10 p-8 pt-12">
                {/* Quote Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-gray-700 mb-8 leading-relaxed text-lg italic relative"
                >
                  {testimonial.quote}
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="border-t border-gray-100 pt-6"
                >
                  <div className="flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        testimonial.category === 'healthcare' 
                          ? 'bg-primary/10' 
                          : 'bg-green-500/10'
                      }`}
                    >
                      <div className={`text-lg font-bold ${
                        testimonial.category === 'healthcare' ? 'text-primary' : 'text-green-500'
                      }`}>
                        {testimonial.author.charAt(0)}
                      </div>
                    </motion.div>
                    
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                        className={`h-0.5 mt-2 ${
                          testimonial.category === 'healthcare' 
                            ? 'bg-gradient-to-r from-primary to-primary/50' 
                            : 'bg-gradient-to-r from-green-500 to-green-500/50'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                    testimonial.category === 'healthcare' 
                      ? 'bg-primary/10 text-primary border-primary/20' 
                      : 'bg-green-500/10 text-green-600 border-green-500/20'
                  }`}
                >
                  {testimonial.category === 'healthcare' ? 'Healthcare' : 'Education'}
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${
                  testimonial.category === 'healthcare' ? 'bg-primary/30' : 'bg-green-500/30'
                }`}
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full ${
                  testimonial.category === 'healthcare' ? 'bg-primary/20' : 'bg-green-500/20'
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-primary/10 via-white to-green-500/5 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">Ready to Join Our Network of Satisfied Partners?</h4>
                <p className="text-gray-600 text-sm">Experience the FirstHand difference in talent acquisition</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/cta"
            >
              <span className="flex items-center gap-2">
                Become a Partner
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-60 left-20 w-4 h-4 bg-blue-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-5 h-5 bg-green-500/20 rounded-full animate-ping"></div>
    </section>
  );
}