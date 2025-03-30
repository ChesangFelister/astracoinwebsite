import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Coins, Zap } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    const createParticles = () => {
      const heroSection = document.getElementById("hero-section");
      if (!heroSection) return;

      heroSection.querySelectorAll(".particle").forEach((p) => p.remove());

      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        const size = Math.random() * 10 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.backgroundColor = ["#C084FC", "#38BDF8", "#A855F7", "#8B5CF6"][Math.floor(Math.random() * 4)];
        particle.style.animation = `float ${Math.random() * 3 + 3}s ease-in-out infinite`;

        heroSection.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener("resize", createParticles);
    return () => window.removeEventListener("resize", createParticles);
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-astral-700/50 text-astral-200 px-4 py-2 rounded-full text-sm font-medium">
              Now Trading on World Chain
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The Future of <span className="text-gradient">Crypto</span> is Astral
            </h1>
            <p className="text-lg text-foreground/70 max-w-md">
              Join the next generation of digital finance with AstraCoin. Trade securely, invest wisely, and become part of our growing ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                Join Airdrop
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-astral-500 text-astral-300 px-6 py-4 rounded-xl hover:bg-astral-700/20">
                Explore Features
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-4/5 h-4/5 bg-gradient-to-r from-astral-500/20 to-space-accent/20 rounded-full blur-3xl"></div>
            <div className="relative bg-glass border border-astral-700/50 p-6 rounded-3xl backdrop-blur-xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <img src="https://assets.onecompiler.app/42p32vw56/43bcqbgx8/1000012334.png" alt="Astracoin Logo" className="h-10 w-10" />
                  <div>
                    <h3 className="font-bold">ASTRA</h3>
                    <p className="text-xs text-foreground/60">AstraCoin</p>
                  </div>
                </div>
                <div className="flex items-center text-green-500">
                  <TrendingUp size={16} className="mr-1" />
                  <span className="font-medium">+12.4%</span>
                </div>
              </div>
              <div className="h-32 bg-space-light/30 rounded-lg flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 100 50">
                  <path d="M0,40 Q10,37 15,30 T25,25 T35,15 T45,20 T55,10 T65,15 T75,5 T85,10 T100,5" fill="none" stroke="#A855F7" strokeWidth="2" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button size="sm" className="bg-astral-500 hover:bg-astral-600 text-white flex items-center">
                  <Coins className="mr-2 h-4 w-4" /> Buy
                </Button>
                <Button size="sm" variant="outline" className="border-astral-500 text-astral-300 flex items-center">
                  <Zap className="mr-2 h-4 w-4" /> Trade
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)]"></div>
    </section>
  );
};

export default Hero;

/* CSS for Particle Animation */
const styles = `
  @keyframes float {
    0% { transform: translateY(0); opacity: 0.7; }
    50% { transform: translateY(-10px); opacity: 1; }
    100% { transform: translateY(0); opacity: 0.7; }
  }
  .particle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.6;
  }
  .bg-glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);
