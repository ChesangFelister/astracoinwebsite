import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaitlistSignup from "@/components/WaitlistSignup";
import CountdownTimer from "@/components/CountdownTimer"; // Import the countdown component

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      
      {/* Countdown Section */}
      <div className="flex justify-center items-center py-8">
        <CountdownTimer targetDate="2024-04-04T00:00:00" />
      </div>

      <About />
      <Features />
      <Partners />
      <WaitlistSignup />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
