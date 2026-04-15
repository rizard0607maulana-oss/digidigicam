import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  { name: "Booking", path: "/booking" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-xl border-b border-white/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 gradient-pastel rounded-xl text-white group-hover:rotate-12 transition-transform duration-300">
            <Camera size={24} />
          </div>
          <span className="text-2xl font-extrabold font-heading text-gradient-pastel tracking-tighter">
            DigiDigiCam.
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-all hover:opacity-100 ${
                location.pathname === link.path
                  ? "text-foreground opacity-100"
                  : "text-foreground opacity-60"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="btn-cta">
            <Link to="/catalog">Sewa Sekarang</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-pastel-blue">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-pastel-blue/20">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium ${
                      location.pathname === link.path
                        ? "text-pastel-blue"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="gradient-pastel w-full rounded-full mt-4">
                  <Link to="/catalog" onClick={() => setIsOpen(false)}>
                    Sewa Sekarang
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
