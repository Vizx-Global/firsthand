export function Trust() {
  const testimonials = [
    {
      quote: "FirstHand completely transformed our nursing recruitment. Their ability to find qualified candidates who matched our culture was impressive.",
      author: "Sarah Jenkins",
      title: "Chief Nursing Officer, Metro General Hospital"
    },
    {
      quote: "The team at FirstHand understands higher education. They helped us fill critical faculty positions in record time before the semester started.",
      author: "Dr. Robert Chen",
      title: "Provost, State University System"
    },
    {
      quote: "Compliance was our biggest headache. FirstHand's RPO solution handled every credentialing detail flawlessly.",
      author: "Michael Ross",
      title: "HR Director, Community Health Network"
    }
  ];



  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Organizations</h2>
          <p className="text-lg text-gray-600">
            Delivering excellence for partners who demand the best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="text-brand-red text-6xl absolute top-4 left-6 opacity-20 font-serif">"</div>
              <p className="text-gray-700 mb-6 italic relative z-10 leading-relaxed">
                {t.quote}
              </p>
              <div>
                <p className="font-bold text-gray-900">{t.author}</p>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
