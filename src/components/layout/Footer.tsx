import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, GraduationCap, Building2, MapPin, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'For Schools', href: '/schools' },
    { label: 'For Educators', href: '/educators' },
    { label: 'Healthcare Staffing', href: '/healthcare' },
    { label: 'Contact', href: '/contact' },
  ];

  const groupServices = [
    { label: 'Education Staffing', category: 'education', icon: GraduationCap },
    { label: 'Healthcare Staffing', category: 'healthcare', icon: Building2 },
    { label: 'Executive Search', category: 'all', icon: Users },
    { label: 'Contract Staffing', category: 'all', icon: Shield },
  ];

  const locations = [
    { 
      city: 'Bellaire Office', 
      address: '6575 West Loop South, Suite 500',
      phone: '(562) 234-5454',
      color: 'primary'
    },
    { 
      city: 'Houston Office', 
      address: '1300 W Sam Houston Parkway S, Suite 100',
      phone: '281-747-6757',
      color: 'green'
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column - Brand & Contact */}
            <div className="space-y-10">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="w-10 h-10 text-primary" />
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      First<span className="text-primary">Hand</span>
                    </h2>
                    <p className="text-lg text-white/70">Group Solutions</p>
                  </div>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                  Uniting quality educators with exemplary schools and connecting healthcare 
                  facilities with top talent. Your trusted partner in staffing excellence.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">CONTACT INFORMATION</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.city}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02]"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          location.color === 'primary' ? 'bg-primary/20' : 'bg-green-500/20'
                        }`}>
                          <MapPin className={`w-6 h-6 ${
                            location.color === 'primary' ? 'text-primary' : 'text-green-400'
                          }`} />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-bold text-white text-lg">{location.city}</h4>
                          <p className="text-white/70 text-sm leading-tight">{location.address}</p>
                          <div className="flex items-center gap-2 text-white/60 text-sm">
                            <Phone className="w-4 h-4" />
                            {location.phone}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </div>

            {/* Right Column - Services & Links */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Services Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white">GROUP SERVICES</h3>
                </div>
                
                <div className="space-y-4">
                  {groupServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02]"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          service.category === 'education' ? 'bg-green-500/20' : 
                          service.category === 'healthcare' ? 'bg-primary/20' : 'bg-blue-500/20'
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            service.category === 'education' ? 'text-green-400' : 
                            service.category === 'healthcare' ? 'text-primary' : 'text-blue-400'
                          }`} />
                        </div>
                        <span className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium">
                          {service.label}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-auto text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Quick Links & Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-8"
              >
                <h3 className="text-lg font-bold text-white mb-6">QUICK NAVIGATION</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {footerLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="text-white/70 hover:text-primary transition-all duration-300 text-sm font-medium p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>

                {/* Social Media */}
                <div className="pt-6">
                  <h4 className="text-white font-bold mb-4">CONNECT WITH US</h4>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, color: 'bg-blue-600/20', hover: 'hover:bg-blue-600/30' },
                      { icon: Twitter, color: 'bg-sky-500/20', hover: 'hover:bg-sky-500/30' },
                      { icon: Linkedin, color: 'bg-blue-700/20', hover: 'hover:bg-blue-700/30' },
                      { icon: Instagram, color: 'bg-pink-600/20', hover: 'hover:bg-pink-600/30' },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href="#"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-12 h-12 ${social.color} ${social.hover} backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-white/20 group`}
                        >
                          <Icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Emergency Contact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-primary/20 via-primary/10 to-green-500/10 border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">24/7 Emergency Support</h3>
                  <p className="text-white/80 text-lg">
                    Urgent staffing needs? We're here to help anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-sm text-center md:text-left">
              © Copyright {new Date().getFullYear()} FirstHand Group. All rights reserved.
            </p>
            
            <div className="flex items-center gap-8 text-white/50 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
              <span className="text-white/30">|</span>
              <span className="text-white/40">Designed by Vizx Global</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}