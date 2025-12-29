import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              First<span className="text-brand-red">Hand</span>
            </span>
          </a>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button
              className="bg-brand-red hover:bg-red-700 text-white"
              onClick={() => (window.location.href = "#contact")}
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-gray-900 hover:text-brand-red transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button
                    className="bg-brand-red hover:bg-red-700 w-full mt-4"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Request Consultation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}