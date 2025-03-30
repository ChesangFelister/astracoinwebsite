
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Layers, Cpu, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-astral-300" />,
      title: "Secure Transactions",
      description: "Advanced blockchain technology ensures your transactions are always secure and verified.",
    },
    {
      icon: <Layers className="h-8 w-8 text-astral-300" />,
      title: "Scalable Architecture",
      description: "Built for growth with a scalable architecture that can handle millions of transactions.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-astral-300" />,
      title: "Smart Contracts",
      description: "Create and deploy sophisticated smart contracts on our powerful platform.",
    },
    {
      icon: <Globe className="h-8 w-8 text-astral-300" />,
      title: "Global Access",
      description: "Trade from anywhere in the world with our decentralized network.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-space-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="text-gradient">AstraCoin</span>?
          </h2>
          <p className="text-lg text-foreground/70">
            AstraCoin is revolutionizing the cryptocurrency space with innovative technology,
            strong partnerships, and a commitment to security and accessibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-space-light/20 border-astral-700/30 overflow-hidden group hover:border-astral-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-astral-800/50 rounded-lg w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-astral-700/50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Trading on <span className="text-gradient">World Chain</span>
            </h3>
            <p className="text-lg mb-6 text-foreground/70">
              AstraCoin is now available for trading on the World Chain network, 
              offering seamless integration with the global cryptocurrency ecosystem.
            </p>
            <ul className="space-y-3">
              {[
                "High-speed transactions with minimal fees",
                "Advanced security protocols",
                "Cross-chain compatibility",
                "Decentralized trading platform",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-astral-400 mr-3"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-astral-500/10 to-space-accent/10 rounded-full blur-3xl"></div>
            <div className="relative bg-space-light/20 border border-astral-700/30 rounded-xl p-6 overflow-hidden">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-foreground/70">Market Cap</p>
                  <p className="text-2xl font-bold text-astral-300">$18.2M</p>
                  <span className="text-green-500 text-sm flex items-center">
                    +8.4% <TrendingIndicator up={true} />
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/70">24h Volume</p>
                  <p className="text-2xl font-bold text-astral-300">$5.7M</p>
                  <span className="text-green-500 text-sm flex items-center">
                    +12.3% <TrendingIndicator up={true} />
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/70">Circulating Supply</p>
                  <p className="text-2xl font-bold text-astral-300">124.5M</p>
                  <span className="text-foreground/70 text-sm">of 200M</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/70">Current Price</p>
                  <p className="text-2xl font-bold text-astral-300">$0.146</p>
                  <span className="text-green-500 text-sm flex items-center">
                    +5.8% <TrendingIndicator up={true} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrendingIndicator = ({ up }: { up: boolean }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1"
    >
      <path
        d={up ? "M8 4L12 8L8 12" : "M8 12L4 8L8 4"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={up ? "rotate(90 8 8)" : "rotate(-90 8 8)"}
      />
    </svg>
  );
};

export default About;
