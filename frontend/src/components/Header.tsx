import { Button } from "@/components/ui/button";
import { User, Share2 } from "lucide-react";


const Header = () => {
  return (
    <header className="bg-healthcare-blue text-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-6 gap-4 md:gap-0">
        
        {/* Logo & Branding */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="CGDRC Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full  bg-white "
          />
          <div className="leading-tight">
            <h1 className="text-base md:text-lg font-bold tracking-wide">
              Child Growth & Development Research Centre
            </h1>
            <p className="text-xs md:text-sm opacity-90 italic">
              Nourishing & Caring Future Generation 
              </p>
           
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:underline">Our Services</a>
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#advisory" className="hover:underline">Advisory Panel</a>
            <a href="#guides" className="hover:underline">Guides</a>
          </nav>
        
      </div>
    </header>
  );
};

export default Header;
