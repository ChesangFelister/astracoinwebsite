import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Global fixed date (5 days from today, manually set)
const targetDate = new Date("2025-04-05T12:00:00Z"); // Adjust this date!

const CountdownTimer = () => {
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
    if (!timeLeft) return;

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
            Mini App Launching In:
          </h2>
          <div className="flex justify-center space-x-4 text-4xl font-bold">
            {Object.entries(timeLeft).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 text-green-400 px-6 py-3 rounded-lg shadow-lg border border-green-400"
                aria-label={`${value} ${key}`}
              >
                {value} <span className="text-lg">{key.charAt(0)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <motion.h2
          className="text-3xl font-bold text-green-400 mt-4"
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
