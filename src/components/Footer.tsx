
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-space-dark py-12 border-t border-astral-700/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://assets.onecompiler.app/42p32vw56/43bcqbgx8/1000012334.png"
                alt="Astracoin Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-gradient">AstraCoin</span>
            </div>
            <p className="text-foreground/70 text-sm">
              The next generation cryptocurrency platform, focused on security, 
              accessibility, and seamless trading experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-astral-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-foreground/70 hover:text-astral-300 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#partners" className="text-foreground/70 hover:text-astral-300 transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-astral-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-astral-300 transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-astral-300 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-astral-300 transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-astral-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-foreground/70">
                <span className="font-medium">Email:</span> airdrop@astracoin.space
              </li>
              <li className="text-foreground/70">
                <span className="font-medium">Support:</span> support@astracoin.space
              </li>
              <li className="text-foreground/70">
                <span className="font-medium">Press:</span> press@astracoin.space
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-astral-700/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} AstraCoin. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="text-foreground/50 hover:text-astral-300 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/50 hover:text-astral-300 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
