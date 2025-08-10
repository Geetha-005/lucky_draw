import React, { useState, useEffect } from 'react';

const CountdownPage = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = new Date(targetDate).getTime() - now.getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.keys(timeRemaining).map((unit) => {
    if (!timeRemaining[unit]) {
      return null;
    }

    return (
      <div key={unit} className="flex flex-col items-center mx-4 my-2">
        <span className="text-6xl md:text-8xl font-extrabold text-white">
          {String(timeRemaining[unit]).padStart(2, '0')}
        </span>
        <span className="text-xl md:text-2xl uppercase tracking-wider text-gray-400 mt-2">
          {unit}
        </span>
      </div>
    );
  });

  const isEventOver = timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          {isEventOver ? "The Event Has Begun!" : "Contest Starts In"}
        </h1>
        <div className="flex justify-center flex-wrap">
          {timerComponents.length > 0 ? timerComponents : (
            <span className="text-3xl text-green-500">Stay Tuned!</span>
          )}
        </div>
        {isEventOver && (
          <p className="mt-8 text-xl text-gray-300">
            Head to the events page to participate.
          </p>
        )}
      </div>
    </div>
  );
};

export default CountdownPage;