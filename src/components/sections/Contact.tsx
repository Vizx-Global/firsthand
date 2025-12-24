import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">
                We're here to help. Reach out to us for any inquiries or assistance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(562) 234-5454</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    6575 West Loop South, Suite 500<br />
                    Bellaire, TX 77401
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@firsthand-education.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                   <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                   <span>Map Integration Placeholder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How can we help?</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Your full name" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="you@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="Tell us how we can help..." />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
