import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">FirstHand Education</h3>
            <p className="text-gray-600 max-w-sm">
              Uniting quality educators with exemplary PreK-12 schools. Your partner in educational staffing excellence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Schools</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>(562) 234-5454</li>
              <li>6575 West Loop South, Suite 500</li>
              <li>Bellaire, TX 77401</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FirstHand Education. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
