
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import WalletConnect from "./WalletConnect";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToWaitlist = () => {
    const waitlistElement = document.getElementById('waitlist');
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://assets.onecompiler.app/42p32vw56/43bcqbgx8/1000012334.png"
              alt="Astracoin Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-gradient">AstraCoin</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#partners" className="text-foreground/80 hover:text-foreground transition-colors">
              Partners
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <WalletConnect buttonClassName="border-astral-500 text-astral-300 hover:bg-astral-700/20 bg-transparent border py-2 px-4 rounded-lg" />
            <Button 
              className="bg-astral-500 hover:bg-astral-600"
              onClick={scrollToWaitlist}
            >
              Join Airdrop
            </Button>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a 
              href="#about" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#features" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#partners" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 space-y-3">
              <div className="mb-3">
                <WalletConnect buttonClassName="w-full border-astral-500 text-astral-300 hover:bg-astral-700/20 bg-transparent border py-2 px-4 rounded-lg" />
              </div>
              <Button 
                className="w-full bg-astral-500 hover:bg-astral-600"
                onClick={() => {
                  scrollToWaitlist();
                  setIsMenuOpen(false);
                }}
              >
                Join Airdrop
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
