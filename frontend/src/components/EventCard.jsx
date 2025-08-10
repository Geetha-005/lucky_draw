import React, { useState, useEffect } from 'react';
import RegistrationModal from './RegistrationModal';

// EventCard component to display individual event details and handle modal state.
const EventCard = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl text-left">
        <h3 className="text-3xl font-bold text-yellow-400 mb-2">{event.title}</h3>
        <p className="text-gray-300 mb-4">{event.description}</p>
        <EventCountdown targetDate={event.date} />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-6"
        >
          Register Now
        </button>
      </div>
      {isModalOpen && <RegistrationModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

// EventCountdown component for a dynamic countdown timer.
// This is now correctly placed within the file, or you can create it as a separate file.
const EventCountdown = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const calculateTimeRemaining = (target) => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);
    
    // Clean up the timer when the component unmounts or the targetDate changes.
    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.keys(timeRemaining).map((unit) => (
    <div key={unit} className="flex flex-col items-center p-2">
      <span className="text-2xl font-bold text-yellow-400">
        {String(timeRemaining[unit]).padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-wide text-gray-400 mt-1">{unit}</span>
    </div>
  ));

  return (
    <div className="flex justify-center md:justify-start space-x-4 mt-4">
      {timerComponents.length > 0 ? timerComponents : <span className="text-sm text-white">Event has ended!</span>}
    </div>
  );
};

export default EventCard;