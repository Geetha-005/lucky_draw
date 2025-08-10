import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// The main App component that holds all sections of the homepage.
export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
      <main>
        <HeroSection />
        <ContentSection
          title="How to Participate"
          description="Joining our lucky draw is simple! All you have to do is click the 'Join Now' button, fill out a quick form with your details, and you're automatically entered. There are no hidden fees or complicated steps—just pure luck!"
          imageSrc="https://placehold.co/600x400/312e81/e0e7ff?text=How+To+Participate"
          isReversed={false}
        />
        <ContentSection
          title="What You Can Win"
          description="We've curated a list of amazing prizes just for you. From the latest gadgets to exclusive gift cards, our lucky draw offers something for everyone. Check back often as we add more exciting prizes to the list!"
          imageSrc="https://placehold.co/600x400/9333ea/fafafa?text=Prizes+Image"
          isReversed={true}
        />
        <CountdownSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

// HeroSection: The eye-catching introduction of the page.
const HeroSection = () => {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-800 py-20 md:py-32 flex items-center justify-center text-center">
      {/* Background shape animation for visual interest */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <path fill="currentColor" d="M0 50 L25 0 L75 0 L100 50 L75 100 L25 100 Z" transform="rotate(30, 50, 50)" />
          <path fill="currentColor" d="M20 20 L80 20 L80 80 L20 80 Z" transform="rotate(-45, 50, 50)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
          Win Big in Our <span className="text-yellow-400">Lucky Draw!</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Your chance to win amazing prizes is just around the corner. Enter for free and test your luck!
        </p>
        <button  onClick={handleClick} className="bg-yellow-400 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400">
          Join the Contest Now
        </button>
      </div>
    </section>
  );
};

// ContentSection: A versatile component for two-column, zig-zag content.
const ContentSection = ({ title, description, imageSrc, isReversed }) => {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className={`container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        {/* Text Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-300 text-lg">{description}</p>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

// CountdownSection: A component that displays a dynamic countdown timer.
const CountdownSection = () => {
  const contestDate = new Date('2025-12-31T23:59:59');
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(contestDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [contestDate]);

  const calculateTimeRemaining = (targetDate) => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
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

  const timerComponents = Object.keys(timeRemaining).map((unit) => (
    <div key={unit} className="flex flex-col items-center p-4">
      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400">
        {timeRemaining[unit].toString().padStart(2, '0')}
      </span>
      <span className="text-sm uppercase tracking-wide text-gray-400 mt-2">{unit}</span>
    </div>
  ));

  return (
    <section className="bg-gray-800 py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          The Contest Ends In...
        </h2>
        <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto bg-gray-900 p-6 rounded-xl shadow-lg">
          {timerComponents.length ? timerComponents : <span className="text-lg col-span-4 text-white">Contest is over!</span>}
        </div>
      </div>
    </section>
  );
};

// Footer: A simple footer for the page.
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 border-t border-gray-700 py-8">
//       <div className="container mx-auto px-4 text-center">
//         <p className="text-gray-400 text-sm">
//           &copy; 2025 Lucky Draw Contest. All rights reserved.
//         </p>
//         <div className="mt-4 flex justify-center space-x-6">
//           <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//             Terms of Service
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// The following CSS animation is included directly for a subtle visual effect.
// In a real project, this would be in a CSS file.
const customStyles = `
  @keyframes fadeInFromTop {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInFromTop 0.6s ease-out forwards;
  }
  .delay-200 {
    animation-delay: 0.2s;
  }
  .delay-400 {
    animation-delay: 0.4s;
  }
`;

// Inject the custom CSS animation into the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = customStyles;
  document.head.appendChild(style);
}
