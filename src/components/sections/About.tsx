import { Target, Users, ShieldCheck } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Users className="h-6 w-6 text-brand-red" />,
      title: "Partnership First",
      description: "We don't just fill roles; we embed ourselves in your culture to become a true extension of your HR team."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-red" />,
      title: "Uncompromising Quality",
      description: "Rigorous screening and compliance checks ensure every candidate meets top-tier standards."
    },
    {
      icon: <Target className="h-6 w-6 text-brand-red" />,
      title: "Result-Driven",
      description: "Our metrics-based approach delivers lower time-to-fill and higher retention rates."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">About First<span className="text-brand-red">Hand</span></h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At FirstHand, we are redefining Recruitment Process Outsourcing by specializing deeply in the sectors that matter most: Healthcare and Education.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower organizations with the talent they need to thrive. We understand the unique regulatory and cultural challenges of these industries, allowing us to deliver precision hiring at scale. Whether you need rapid staffing for a new hospital wing or dedicated educators for a district, FirstHand is your strategic talent partner.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-red">
                <p className="italic text-gray-700 font-medium">
                  "Our vision is to be the most trusted RPO partner for institutions that serve our communities."
                </p>
            </div>
          </div>
          
          <div className="grid gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="shrink-0">
                  <div className="p-3 bg-red-50 rounded-lg">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
