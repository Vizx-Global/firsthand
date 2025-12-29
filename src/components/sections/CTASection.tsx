import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, GraduationCap, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CTASection = () => {
    const healthcareBenefits = [
        'Immediate access to qualified healthcare professionals',
        'Thorough credential verification and background checks',
        '24/7 support for urgent staffing needs',
        'Customized staffing solutions for your facility',
    ]

    const educationBenefits = [
        'Access to certified educators and administrators',
        'Comprehensive background screening and verification',
        'Flexible staffing for temporary or long-term needs',
        'Specialized recruitment for STEM and special education',
    ]

    const handleHealthcareCareers = () => {
        window.location.href = '/healthcare-staffing-for-job-seekers';
    }

    const handleEducationCareers = () => {
        window.location.href = '/education-careers';
    }

    const handleGroupConsultation = () => {
        window.location.href = '#contact';
    }

    return (
        <section id="cta" className="py-10 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Group Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/20"
                    >
                        <Building2 className="w-5 h-5 text-primary" />
                        <span className="text-white font-semibold">
                            FIRSTHAND GROUP SOLUTIONS —
                        </span>
                    </motion.div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Comprehensive Talent Solutions
                        <span className="block bg-gradient-to-r from-primary via-white/90 to-green-500 bg-clip-text text-transparent mt-2">
                            Healthcare & Education
                        </span>
                    </h2>
                    
                    <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Uniting healthcare staffing and education recruitment under one roof. 
                        FirstHand Group delivers exceptional talent solutions across multiple industries.
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column - Healthcare */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Healthcare Header */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-primary/30"
                            >
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-white font-semibold">
                                    HEALTHCARE STAFFING
                                </span>
                            </motion.div>
                            
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                Find Qualified
                                <span className="block bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent mt-1">
                                    Healthcare Professionals
                                </span>
                            </h3>
                            
                            <p className="text-lg text-white/90 mb-6 leading-relaxed">
                                Access our network of pre-screened, qualified healthcare professionals 
                                ready to fill your staffing gaps and maintain quality patient care.
                            </p>

                            {/* Healthcare Benefits */}
                            <div className="space-y-3 mb-6">
                                {healthcareBenefits.map((benefit, index) => (
                                    <motion.div
                                        key={`healthcare-${index}`}
                                        className="flex items-center gap-4 text-white/90"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="font-medium">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Healthcare CTA */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-primary to-red-600 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-500/25 group"
                                    onClick={handleHealthcareCareers}
                                >
                                    Healthcare Careers
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Education */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Education Header */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-green-500/30"
                            >
                                <GraduationCap className="w-4 h-4 text-green-400" />
                                <span className="text-white font-semibold">
                                    EDUCATION STAFFING
                                </span>
                            </motion.div>
                            
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                Connect with
                                <span className="block bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mt-1">
                                    Certified Educators
                                </span>
                            </h3>
                            
                            <p className="text-lg text-white/90 mb-6 leading-relaxed">
                                Access our network of qualified educators, administrators, and 
                                support staff ready to enhance learning environments.
                            </p>

                            {/* Education Benefits */}
                            <div className="space-y-3 mb-6">
                                {educationBenefits.map((benefit, index) => (
                                    <motion.div
                                        key={`education-${index}`}
                                        className="flex items-center gap-4 text-white/90"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="font-medium">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Education CTA */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/25 group"
                                    onClick={handleEducationCareers}
                                >
                                    Education Careers
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Combined Services CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <Button
                            size="lg"
                            onClick={handleGroupConsultation}
                            className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white font-bold px-10 py-8 rounded-2xl transition-all duration-300 hover:scale-105 border border-white/20 backdrop-blur-lg group"
                        >
                            <span className="text-lg">Schedule a Consultation for Both Services</span>
                            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-32 w-4 h-4 bg-blue-500/40 rounded-full animate-bounce"></div>
            <div className="absolute top-40 left-20 w-5 h-5 bg-green-500/40 rounded-full animate-ping"></div>
        </section>
    )
}

export default CTASection