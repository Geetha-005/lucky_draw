import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Contact Us</h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            We'd love to hear from you! Please fill out the form below.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="The subject of your message"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-bold text-gray-800">Email Address</h3>
              <p className="mt-1 text-gray-600">contact@example.com</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Phone Number</h3>
              <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Address</h3>
              <p className="mt-1 text-gray-600">123 Contest St, Tech City, 90210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;