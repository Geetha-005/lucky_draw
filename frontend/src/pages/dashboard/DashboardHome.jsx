import React from 'react';

const DashboardHome = () => {
  // In a real application, you'd fetch this data from an API
  const totalUsers = 150; 
  const paidUsers = 75;
  const tokensGenerated = 50000;

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-100">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Total Users Card */}
        <div className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute top-4 left-4 p-2 bg-white bg-opacity-20 rounded-full">
            {/* You can use an icon here, e.g., from heroicons */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m-6 0h18" />
            </svg>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-medium text-gray-100">Total Users</h2>
            <p className="text-5xl font-bold mt-2">{totalUsers}</p>
          </div>
        </div>

        {/* Paid Users Card */}
        <div className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-r from-green-500 to-teal-600 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute top-4 left-4 p-2 bg-white bg-opacity-20 rounded-full">
            {/* Icon for Paid Users */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c-1.11 0-2.08.704-2.736 1.765C9.362 10.231 9 11.233 9 12c0 2.21 2.239 4 5 4s5-1.79 5-4c0-.767-.362-1.769-.736-2.235C14.08 8.704 13.11 8 12 8z" />
            </svg>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-medium text-gray-100">Paid Users</h2>
            <p className="text-5xl font-bold mt-2">{paidUsers}</p>
          </div>
        </div>

        {/* Tokens Generated Card */}
        <div className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-r from-purple-500 to-pink-600 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute top-4 left-4 p-2 bg-white bg-opacity-20 rounded-full">
            {/* Icon for Tokens */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.427a1.99 1.99 0 00-2.828 0L7 10.172l-2.618-2.618a1.99 1.99 0 00-2.828 2.828l4 4a1.99 1.99 0 002.828 0l8-8a1.99 1.99 0 000-2.828z" />
            </svg>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-medium text-gray-100">Tokens Generated</h2>
            <p className="text-5xl font-bold mt-2">{tokensGenerated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;