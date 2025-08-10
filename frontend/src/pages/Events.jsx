// import React, { useState, useEffect } from 'react';

// // EventsPage component for displaying a list of events.
// const Events = () => {
//   // Mock event data. You can replace this with data from an API.
//   const events = [
//     {
//       id: 1,
//       title: "Monthly Mega Lucky Draw",
//       description: "Our biggest draw of the month with a grand prize! Don't miss your chance to win big.",
//       date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15, 12, 0, 0),
//     },
//     {
//       id: 2,
//       title: "Weekend Flash Contest",
//       description: "A quick and exciting contest with a new prize every hour. Join the fun!",
//       date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 20, 18, 0, 0),
//     },
//     {
//       id: 3,
//       title: "New Year's Extravaganza",
//       description: "Celebrate the new year with a spectacular lucky draw and amazing prizes.",
//       date: new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0),
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden py-16 md:py-24 bg-gray-900">
//       <div className="container mx-auto px-4 text-center animate-fade-in-up">
//         <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
//           Upcoming Events
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
//           Mark your calendars and get ready to participate in our exciting lucky draw events!
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map(event => (
//             <EventCard key={event.id} event={event} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // EventCard component to display individual event details.
// const EventCard = ({ event }) => {
//   return (
//     <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl text-left">
//       <h3 className="text-3xl font-bold text-yellow-400 mb-2">{event.title}</h3>
//       <p className="text-gray-300 mb-4">{event.description}</p>
//       <EventCountdown targetDate={event.date} />
//       <button className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-6">
//         Register Now
//       </button>
//     </div>
//   );
// };

// // EventCountdown component for a dynamic countdown timer.
// const EventCountdown = ({ targetDate }) => {
//   const [timeRemaining, setTimeRemaining] = useState({});

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeRemaining(calculateTimeRemaining(targetDate));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [targetDate]);

//   const calculateTimeRemaining = (target) => {
//     const now = new Date();
//     const difference = target.getTime() - now.getTime();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     } else {
//       timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }
//     return timeLeft;
//   };

//   const timerComponents = Object.keys(timeRemaining).map((unit) => (
//     <div key={unit} className="flex flex-col items-center p-2">
//       <span className="text-2xl font-bold text-yellow-400">
//         {timeRemaining[unit].toString().padStart(2, '0')}
//       </span>
//       <span className="text-xs uppercase tracking-wide text-gray-400 mt-1">{unit}</span>
//     </div>
//   ));

//   return (
//     <div className="flex justify-center md:justify-start space-x-4 mt-4">
//       {timerComponents.length ? timerComponents : <span className="text-sm text-white">Event has ended!</span>}
//     </div>
//   );
// };

// export default Events;

// // The following CSS animation is included directly for a subtle visual effect.
// // You will need to make sure this code is run in your main file to apply the animations.
// const customStyles = `
//   @keyframes fadeInFromTop {
//     from {
//       opacity: 0;
//       transform: translateY(-20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   .animate-fade-in-up {
//     animation: fadeInFromTop 0.6s ease-out forwards;
//   }
//   .delay-200 {
//     animation-delay: 0.2s;
//   }
// `;

// // Inject the custom CSS animation into the document head
// if (typeof document !== 'undefined') {
//   const style = document.createElement('style');
//   style.textContent = customStyles;
//   document.head.appendChild(style);
// }


import React from 'react';
import EventCard from '../components/EventCard';
import RegistrationModal from '../components/RegistrationModal';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Monthly Mega Lucky Draw",
      description: "Our biggest draw of the month with a grand prize! Don't miss your chance to win big.",
      date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15, 12, 0, 0),
    },
    {
      id: 2,
      title: "Weekend Flash Contest",
      description: "A quick and exciting contest with a new prize every hour. Join the fun!",
      date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 20, 18, 0, 0),
    },
    {
      id: 3,
      title: "New Year's Extravaganza",
      description: "Celebrate the new year with a spectacular lucky draw and amazing prizes.",
      date: new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0),
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Upcoming Events
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Mark your calendars and get ready to participate in our exciting lucky draw events!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;