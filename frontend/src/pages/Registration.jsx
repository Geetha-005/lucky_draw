import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tokenId: ''
  });
  const [message, setMessage] = useState('');

  const generateToken = () => {
    // Generate 5 unique random numbers
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < 5) {
      uniqueNumbers.add(Math.floor(Math.random() * 10));
    }
    const numbers = Array.from(uniqueNumbers).join('');
    return `2025abc${numbers}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToken = generateToken();
    setFormData(prevState => ({
      ...prevState,
      tokenId: newToken
    }));
    setMessage(`Registration successful! Your Token ID is: ${newToken}`);
    console.log('Registration Data:', { ...formData, tokenId: newToken });
    // In a real app, you would send this data to a backend.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contest Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {formData.tokenId && (
            <div className="mb-4 p-4 bg-gray-200 rounded-md">
              <label className="block text-gray-700">Your Token ID</label>
              <p className="text-lg font-mono text-center mt-2">{formData.tokenId}</p>
            </div>
          )}
          {message && (
            <p className="text-green-500 text-center mb-4">{message}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;