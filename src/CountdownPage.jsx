import React, { useEffect, useState } from "react";

const CountdownPage = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(now.getFullYear(), 5, 23, 0, 0, 0); // June 23, 00:00:00
    const difference = target - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">🎁 A Surprise is Waiting…</h1>
      <p className="text-xl mb-8">Countdown to Prince's Special Day 🎉</p>
      <div className="text-4xl font-mono flex gap-6">
        <div>
          {timeLeft.days} <span className="block text-sm">Days</span>
        </div>
        <div>
          {timeLeft.hours} <span className="block text-sm">Hours</span>
        </div>
        <div>
          {timeLeft.minutes} <span className="block text-sm">Min</span>
        </div>
        <div>
          {timeLeft.seconds} <span className="block text-sm">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
