import { Button } from "@/components/ui/button";
import { Stethoscope, GraduationCap, ArrowRight } from "lucide-react";
import healthcareImage from "@/assets/healthcare_service.png";
import educationImage from "@/assets/education_service.png";

export function Services() {
  // Define the external URLs
  const healthcareUrl = "https://firsthandhealthcare.vercel.app/";
  const educationUrl = "https://firsthandeducation.vercel.app/";

  const openHealthcareSite = () => {
    window.open(healthcareUrl, "_blank", "noopener,noreferrer");
  };

  const openEducationSite = () => {
    window.open(educationUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized RPO Services</h2>
          <p className="text-lg text-gray-600">
            We deliver tailored recruitment solutions for the unique demands of healthcare and education sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Healthcare RPO */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Stethoscope className="w-32 h-32 text-brand-red" />
            </div>
            <div className="relative z-10">
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-[16/9]">
                <img 
                  src={healthcareImage} 
                  alt="Healthcare professionals in a hospital setting" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-brand-red" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Healthcare Staffing RPO</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive staffing solutions for hospital systems, clinics, and allied health facilities. We handle the entire lifecycle from sourcing to credentialing.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  Nursing & Allied Health
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  Physician Recruitment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  Clinical Leadership
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  Regulatory Compliance
                </li>
              </ul>
              <Button 
                onClick={openHealthcareSite}
                variant="outline" 
                className="w-full justify-between group-hover:bg-brand-red group-hover:text-white transition-colors border-gray-200"
              >
                Explore Healthcare RPO <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Education RPO */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap className="w-32 h-32 text-brand-red" />
            </div>
            <div className="relative z-10">
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-[16/9]">
                <img 
                  src={educationImage} 
                  alt="Educators and students in a learning environment" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-brand-red" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Education RPO</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic talent acquisition for school districts, universities, and private institutions. We find educators who are not just qualified, but culturally aligned.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  Teachers & Faculty
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  Administration & Leadership
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  Support Staff
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  High-Volume Seasonal Hiring
                </li>
              </ul>
              <Button 
                onClick={openEducationSite}
                variant="outline" 
                className="w-full justify-between group-hover:bg-brand-red group-hover:text-white transition-colors border-gray-200"
              >
                Explore Education RPO <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}