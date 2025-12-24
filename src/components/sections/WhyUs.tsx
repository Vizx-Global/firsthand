import { Zap, Shield, Users, BarChart } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      icon: <Zap className="h-8 w-8 text-brand-red" />,
      title: "Speed to Hire",
      description: "Our pipelines are active 24/7. We reduce time-to-fill by an average of 40%."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-red" />,
      title: "Compliance Ironclad",
      description: "We navigate the complex regulatory landscapes of healthcare and education so you don't have to."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-red" />,
      title: "Cultural Alignment",
      description: "Skills are baseline. We screen for the values and soft skills that drive long-term retention."
    },
    {
      icon: <BarChart className="h-8 w-8 text-brand-red" />,
      title: "Data-Driven Insights",
      description: "Real-time reporting on your talent acquisition funnel, giving you total visibility."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why FirstHand?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are not just a vendor; we are your strategic growth partner. In industries where people are the product, we ensure you have the best.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
               <div className="p-6 bg-gray-800 rounded-lg">
                  <div className="text-4xl font-bold text-brand-red mb-2">40%</div>
                  <div className="text-gray-400">Faster Hiring</div>
               </div>
               <div className="p-6 bg-gray-800 rounded-lg">
                  <div className="text-4xl font-bold text-brand-red mb-2">95%</div>
                  <div className="text-gray-400">Retention Rate</div>
               </div>
            </div>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-3 bg-gray-800 rounded-lg shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
