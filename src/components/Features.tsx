
import React from "react";
import { ArrowRight, Smartphone, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Upcoming <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-foreground/70">
            The AstraCoin development team is working on exciting new features
            to enhance your trading experience and expand our ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<Smartphone className="h-10 w-10 text-astral-300" />}
            title="Mini App"
            description="Our mini application is currently in development, bringing the full AstraCoin experience to your smartphone."
            status="Development in Progress"
            statusColor="text-yellow-500"
          />
          
          <FeatureCard
            icon={<Code className="h-10 w-10 text-astral-300" />}
            title="Developer APIs"
            description="Comprehensive APIs and SDKs for developers to build on top of the AstraCoin ecosystem."
            status="Coming Q3 2025"
            statusColor="text-blue-500"
          />
          
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10 text-astral-300" />}
            title="Advanced Analytics"
            description="Powerful trading analytics and insights to help you make better investment decisions."
            status="Beta Testing"
            statusColor="text-green-500"
          />
        </div>

        <div className="mt-20 bg-space-light/20 border border-astral-700/30 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Join the World Chain Revolution</h3>
              <p className="text-foreground/70 mb-6">
                AstraCoin is now actively trading on World Chain, bringing unprecedented 
                speed and security to your cryptocurrency transactions.
              </p>
              <Button className="flex items-center">
                Start Trading <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-space-dark rounded-lg p-6 border border-astral-700/20">
              <h4 className="text-lg font-semibold mb-4">World Chain Integration Benefits</h4>
              <ul className="space-y-3">
              {[
                  "Lightning-fast transaction processing",
                  "Minimal gas fees compared to other networks",
                  "Enhanced security through multi-layer validation",
                  "Seamless cross-chain asset transfers",
                  "Integration with major DeFi protocols"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-astral-400 mr-3 mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, status, statusColor }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
  statusColor: string;
}) => {
  return (
    <div className="bg-space-light/20 border border-astral-700/30 rounded-xl p-6 hover:border-astral-500/50 transition-all">
      <div className="bg-space-dark inline-block p-4 rounded-lg mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <span className={`text-sm font-medium ${statusColor}`}>{status}</span>
    </div>
  );
};

export default Features;
