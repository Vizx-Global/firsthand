import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero_image.png"; 

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 lg:pt-42 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-red mr-2"></span>
              Premier RPO Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
              Building World-Class Teams for <span className="text-brand-red">Healthcare</span> & <span className="text-brand-red">Education</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              FirstHand delivers specialized Recruitment Process Outsourcing (RPO) designed to meet the complex staffing demands of hospital systems and academic institutions. We ensure compliance, speed, and quality in every hire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white px-8 h-12 text-base">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base hover:bg-gray-50 text-gray-900 border-gray-300">
                Explore Our Services
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-red" />
                <span>98% Fill Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-red" />
                <span>Compliance Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-red" />
                <span>2x Faster Hiring</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3]">
                {/* Hero Image */}
                <img 
                  src={heroImage} 
                  alt="Healthcare and Education Professionals" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}