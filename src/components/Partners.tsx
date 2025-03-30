
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-space-dark relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Strategic <span className="text-gradient">Partnerships</span>
          </h2>
          <p className="text-lg text-foreground/70">
            AstraCoin is building a strong ecosystem through strategic partnerships
            with leading blockchain and financial technology companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-space-light/20 border-astral-700/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-astral-700/50 text-astral-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                      <Handshake size={16} />
                      <span>Featured Partner</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">TradePulse Token</h3>
                    <p className="text-foreground/70 mb-6">
                      We're excited to announce our strategic partnership with TradePulse Token,
                      creating new opportunities for cross-platform trading and enhanced
                      liquidity for both ecosystems.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-astral-400 mr-3"></div>
                        <span>Shared liquidity pools</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-astral-400 mr-3"></div>
                        <span>Cross-chain trading capabilities</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-astral-400 mr-3"></div>
                        <span>Combined technical development</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="flex items-center w-fit">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="bg-space-dark flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-astral-500/10 to-space-accent/10 blur-3xl"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <img
                      src="https://assets.onecompiler.app/42p32vw56/43d5t2qyx/1000035087.png"
                      alt="TradePulse Token Logo"
                      className="h-32 w-32 mb-6 animate-float"
                    />
                    <h4 className="text-xl font-bold mb-2 text-center">TradePulse Token</h4>
                    <p className="text-foreground/70 text-center max-w-xs">
                      A revolutionary trading platform with AI-powered market insights
                      and advanced analytics.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl mb-6">More Partners Coming Soon</h3>
          <div className="flex justify-center gap-8 opacity-50">
            <div className="w-24 h-24 bg-space-light/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl font-bold">?</span>
            </div>
            <div className="w-24 h-24 bg-space-light/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl font-bold">?</span>
            </div>
            <div className="w-24 h-24 bg-space-light/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl font-bold">?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
