import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TokenTracker = () => {
  const [tokenNumber, setTokenNumber] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState('');

  const handleTrack = () => {
    setMessage('');
    setUserDetails(null);
    if (!tokenNumber) {
      setMessage('Please enter your token number.');
      return;
    }
    
    const storedUserData = localStorage.getItem(tokenNumber);

    if (storedUserData) {
      const data = JSON.parse(storedUserData);
      
      // Mock winning details for demonstration
      const winningDrawDate = new Date('2025-08-30T10:00:00Z');
      const now = new Date();
      let contestStatus = 'Draw Not Open';
      let prizeDetails = null;

      if (now > winningDrawDate) {
        // Simulate a contest draw
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber === 1) {
          contestStatus = 'Selected (1st Prize: Bike)';
          prizeDetails = 'Bike';
        } else if (randomNumber === 2 || randomNumber === 3) {
          contestStatus = 'Selected (2nd Prize: Money)';
          prizeDetails = 'Money';
        } else {
          contestStatus = 'Not Selected';
        }
      }

      setUserDetails({
        ...data,
        contestStatus,
        prizeDetails
      });
      setMessage('Token details found.');
    } else {
      setMessage('Token number not found. Please check and try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow container mx-auto p-8 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Token Tracking</h1>
          <p className="text-gray-600 mb-6">Enter your unique token number to check your status.</p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <input
              type="text"
              value={tokenNumber}
              onChange={(e) => setTokenNumber(e.target.value)}
              className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your token number (e.g., 2025_abc_1234)"
            />
            <button
              onClick={handleTrack}
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Track Token
            </button>
          </div>
          
          {message && <p className="text-red-500 mb-4">{message}</p>}

          {userDetails && (
            <div className="mt-8 text-left space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">Your Details</h2>
              <div className="bg-gray-50 p-4 rounded-md space-y-2">
                <p><strong>User Name:</strong> {userDetails.name}</p>
                <p><strong>Token Number:</strong> <span className="font-mono text-blue-600">{userDetails.token}</span></p>
                <p><strong>Registration Date:</strong> {new Date(userDetails.appliedDate).toLocaleString()}</p>
                <p><strong>Payment Status:</strong> <span className="text-green-600 font-medium">{userDetails.paymentStatus}</span></p>
                <p><strong>Payment Date:</strong> {new Date(userDetails.paymentDate).toLocaleString()}</p>
                <p><strong>Contest Status:</strong> <span className={`font-bold ${userDetails.contestStatus.includes('Selected') ? 'text-green-600' : userDetails.contestStatus.includes('Not Selected') ? 'text-red-600' : 'text-yellow-600'}`}>{userDetails.contestStatus}</span></p>
                {userDetails.prizeDetails && (
                  <p><strong>Prize Details:</strong> <span className="text-purple-600 font-bold">{userDetails.prizeDetails}</span></p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TokenTracker;