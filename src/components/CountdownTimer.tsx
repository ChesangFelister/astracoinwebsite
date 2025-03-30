import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5); // Countdown from 5 days

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-black text-white shadow-lg rounded-lg border border-gray-800">
      {timeLeft ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-300">
            🚀 Mini App Launching In:
          </h2>
          <div className="flex justify-center space-x-4 text-4xl font-bold">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-900 text-neon-green px-6 py-3 rounded-lg shadow-lg border border-neon-green"
              >
                {value} <span className="text-lg">{key.charAt(0)}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <motion.h2
          className="text-3xl font-bold text-neon-green mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          🎉 The Mini App Has Been Released! 🎉
        </motion.h2>
      )}
    </div>
  );
};

export default CountdownTimer;
