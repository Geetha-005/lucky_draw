import React from 'react';

// AboutUsPage component for a new, creative About Us section.
const About = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        {/* Animated Header */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-up">
          Our Story
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          We believe in creating fun and exciting opportunities for everyone to win.
        </p>

        {/* Mission & Values Section with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in-up delay-400">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To provide a fair and transparent platform for lucky draws that brings joy and opportunity to people around the world. We're dedicated to making every contest a memorable experience.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Values</h2>
            <ul className="text-gray-300 text-left list-disc list-inside">
              <li>Transparency and Fairness</li>
              <li>Community and Engagement</li>
              <li>Excitement and Fun</li>
            </ul>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 animate-fade-in-up delay-600">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <TeamMember name="Alice" role="Founder" avatar="https://placehold.co/150x150/0f172a/94a3b8?text=A" />
            <TeamMember name="Bob" role="Developer" avatar="https://placehold.co/150x150/0f172a/94a3b8?text=B" />
            <TeamMember name="Charlie" role="Designer" avatar="https://placehold.co/150x150/0f172a/94a3b8?text=C" />
            <TeamMember name="Diana" role="Marketing" avatar="https://placehold.co/150x150/0f172a/94a3b8?text=D" />
          </div>
        </div>

      </div>
    </section>
  );
};

// TeamMember component for the About Us page.
const TeamMember = ({ name, role, avatar }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
      <img src={avatar} alt={name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-sm text-gray-400">{role}</p>
    </div>
  );
};

export default About;

// The following CSS animation is included directly for a subtle visual effect.
// You will need to make sure this code is run in your main file to apply the animations.
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
  .delay-600 {
    animation-delay: 0.6s;
  }
`;

// Inject the custom CSS animation into the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = customStyles;
  document.head.appendChild(style);
}
