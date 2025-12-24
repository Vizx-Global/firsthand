import { Search, UserCheck, FileCheck, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Discover & Align",
      description: "We dive deep into your organizational culture, requirements, and challenges to build a tailored recruitment strategy."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: "Sourcing & Recruiting",
      description: "Leveraging our diverse talent networks and advanced technology to identify high-caliber active and passive candidates."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-white" />,
      title: "Screening & Compliance",
      description: "Rigorous vetting including credential verification, background checks, and detailed behavioral interviews."
    },
    {
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: "Onboarding & Support",
      description: "Seamless transition ensuring new hires are productive from day one, with ongoing retention support."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            A streamlined, transparent partnership designed to deliver results.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center bg-white p-6 rounded-lg">
                <div className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  {step.icon}
                </div>
                <div className="absolute top-12 left-1/2 -ml-1 w-0.5 h-16 bg-gray-100 lg:hidden -z-10"></div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
