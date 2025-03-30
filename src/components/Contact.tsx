
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, Twitter, Globe, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription successful!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
    }
  };
  
  const scrollToWaitlist = () => {
    const waitlistElement = document.getElementById('waitlist');
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-space-light/10 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Join our community, participate in our airdrop, or reach out to us directly.
            We're here to answer your questions and help you get started with AstraCoin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <Card className="bg-space-light/20 border-astral-700/30 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Mail className="mr-2 h-5 w-5 text-astral-400" /> Contact Us
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Airdrop & Support</h4>
                  <a href="mailto:airdrop@astracoin.space" className="text-astral-300 hover:text-astral-200 transition-colors">
                    airdrop@astracoin.space
                  </a>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-foreground/70 hover:text-astral-300 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-foreground/70 hover:text-astral-300 transition-colors">
                      <Globe size={20} />
                    </a>
                    <a href="#" className="text-foreground/70 hover:text-astral-300 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Office</h4>
                  <p className="text-foreground/70">
                    Decentralized Headquarters<br />
                    Blockchain Avenue<br />
                    Crypto Valley
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-space-light/20 border-astral-700/30 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Subscribe to Updates</h3>
              <p className="text-foreground/70 mb-6">
                Stay updated with the latest news, features, and announcements from AstraCoin.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-space-dark border-astral-700/30 focus:border-astral-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-astral-500 hover:bg-astral-600 w-full">
                  Subscribe <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-astral-700/30">
                <h4 className="font-medium mb-4">Join the Airdrop</h4>
                <p className="text-foreground/70 text-sm mb-4">
                  Be one of the early adopters and receive free AstraCoins by participating in our airdrop campaign.
                </p>
                <Button 
                  variant="outline" 
                  className="border-astral-500 text-astral-300 hover:bg-astral-700/20 w-full"
                  onClick={scrollToWaitlist}
                >
                  Participate in Airdrop
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
