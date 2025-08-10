// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// // Load Stripe.js with your public key.
// // Replace 'YOUR_STRIPE_PUBLISHABLE_KEY' with your actual key.
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// // A mock payment form component. In a real app, this would handle a secure payment.
// const PaymentForm = ({ onPaymentSuccess, onPaymentFailure }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       setLoading(false);
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     // Simulate a payment with a random outcome
//     const isPaymentSuccessful = Math.random() > 0.5; // 50% chance of success

//     if (isPaymentSuccessful) {
//       // Simulate success
//       setTimeout(() => {
//         onPaymentSuccess();
//         setLoading(false);
//       }, 2000);
//     } else {
//       // Simulate failure
//       setTimeout(() => {
//         onPaymentFailure('Payment failed. Please try again.');
//         setLoading(false);
//       }, 2000);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="border p-4 rounded-md">
//         <CardElement />
//       </div>
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {loading ? 'Processing...' : 'Pay ₹116'}
//       </button>
//     </form>
//   );
// };

// const RegistrationModal = ({ onClose }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({ name: '', contact: '', otp: '' });
//   const [generatedToken, setGeneratedToken] = useState('');
//   const [message, setMessage] = useState('');
//   const [socialMedia, setSocialMedia] = useState({ instagram: false, facebook: false });

//   const generateToken = () => {
//     const uniqueDigits = new Set();
//     while (uniqueDigits.size < 4) {
//       uniqueDigits.add(Math.floor(Math.random() * 10));
//     }
//     const digits = Array.from(uniqueDigits).join('');
//     return `2025_abc_${digits}`;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSendOtp = (e) => {
//     e.preventDefault();
//     setMessage('OTP sent to your contact. (Simulated)');
//     setStep(2);
//   };

//   const handleVerifyOtp = (e) => {
//     e.preventDefault();
//     if (formData.otp === '1234') {
//       setMessage('OTP verified! Please follow our social media accounts.');
//       setStep(3);
//     } else {
//       setMessage('Invalid OTP. Please try again.');
//     }
//   };

//   const handleSocialFollow = (platform) => {
//     setSocialMedia(prev => ({ ...prev, [platform]: true }));
//   };

//   const handleFinalizeRegistration = () => {
//     if (socialMedia.instagram && socialMedia.facebook) {
//       setMessage('Ready to make a payment to finalize your registration.');
//       setStep(4);
//     }
//   };
  
//   const handlePaymentSuccess = () => {
//     const newToken = generateToken();
//     setGeneratedToken(newToken);
//     setMessage('Payment successful! Your token is generated.');
//     setStep(5);
//   };

//   const handlePaymentFailure = (errorMessage) => {
//     setMessage(errorMessage);
//     setStep(4); // Keep on the payment step to allow retrying
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <form onSubmit={handleSendOtp} className="space-y-4">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Your Details</h3>
//             {/* ... (form inputs from previous version) ... */}
//             <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" required />
//             </div>
//             <div>
//                 <label className="block text-sm font-medium text-gray-700">Email / Phone Number</label>
//                 <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="email@example.com or +91 9876543210" required />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition">Send OTP</button>
//           </form>
//         );
//       case 2:
//         return (
//           <form onSubmit={handleVerifyOtp} className="space-y-4">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Verify OTP</h3>
//             <p className="text-sm text-gray-600">{message}</p>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
//               <input type="text" name="otp" value={formData.otp} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Enter 4-digit OTP" required />
//             </div>
//             <button type="submit" className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition">Verify OTP</button>
//           </form>
//         );
//       case 3:
//         return (
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 3: Follow Us</h3>
//             <p className="text-lg text-gray-700 mb-6">{message}</p>
//             {/* ... (social media buttons from previous version) ... */}
//             <div className="flex flex-col space-y-4">
//               <button
//                 onClick={() => handleSocialFollow('instagram')}
//                 disabled={socialMedia.instagram}
//                 className={`flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-bold transition ${socialMedia.instagram ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-pink-500 text-white hover:bg-pink-600'}`}
//               >
//                 {socialMedia.instagram ? (<><span>Followed on Instagram</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></>) : (<><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.77 1.687 4.908 4.908.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.687 4.77-4.908 4.908-1.265.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.77-1.687-4.908-4.908-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.687-4.77 4.908-4.908 1.265-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.357-.2 6.78-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.358-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.442.646-1.442 1.442s.646 1.442 1.442 1.442 1.442-.646 1.442-1.442-.646-1.442-1.442-1.442z" /></svg><span>Follow on Instagram</span></>)}
//               </button>
//               <button
//                 onClick={() => handleSocialFollow('facebook')}
//                 disabled={socialMedia.facebook}
//                 className={`flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-bold transition ${socialMedia.facebook ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
//               >
//                 {socialMedia.facebook ? (<><span>Followed on Facebook</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></>) : (<><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.909c0-.867.198-1.091 1.03-1.091h2.97v-3h-4c-3.123 0-4 2.116-4 4v2.909z"/></svg><span>Follow on Facebook</span></>)}
//               </button>
//             </div>
//             {socialMedia.instagram && socialMedia.facebook && (
//               <button
//                 onClick={handleFinalizeRegistration}
//                 className="mt-6 w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition"
//               >
//                 Continue to Payment
//               </button>
//             )}
//           </div>
//         );
//       case 4:
//         return (
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 4: Make a Payment</h3>
//             <p className="text-lg text-gray-700 mb-4">{message}</p>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <p className="text-xl font-bold mb-4">Amount: ₹116</p>
//               <Elements stripe={stripePromise}>
//                 <PaymentForm onPaymentSuccess={handlePaymentSuccess} onPaymentFailure={handlePaymentFailure} />
//               </Elements>
//             </div>
//           </div>
//         );
//       case 5:
//         return (
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-bounce">Registration Complete! 🎉</h3>
//             <p className="text-lg text-gray-700">{message}</p>
//             <div className="mt-6 p-4 bg-gray-100 rounded-md">
//               <p className="text-sm text-gray-600 font-medium">Your Unique Token ID:</p>
//               <p className="text-2xl font-mono text-blue-600 mt-1">{generatedToken}</p>
//             </div>
//             {/* Mock PDF generation and email simulation */}
//             <div className="mt-4 text-sm text-gray-500">
//               <p>An animated PDF file with your details has been generated and sent to your email.</p>
//               <p>(This is a simulated process.)</p>
//             </div>
//             <button onClick={onClose} className="mt-8 w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition">
//               Close
//             </button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75 backdrop-blur-sm">
//       <div className="relative w-full max-w-lg mx-auto bg-white rounded-xl shadow-2xl p-6">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
//         </button>
//         {renderStep()}
//       </div>
//     </div>
//   );
// };

// export default RegistrationModal;


import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import jsPDF from 'jspdf';

// Stripe public key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const PaymentForm = ({ onPaymentSuccess, onPaymentFailure }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }
    
    // Simulate a payment with a random outcome
    const isPaymentSuccessful = Math.random() > 0.5;

    if (isPaymentSuccessful) {
      setTimeout(() => {
        onPaymentSuccess();
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        onPaymentFailure('Payment failed. Please try again.');
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border p-4 rounded-md">
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : 'Pay ₹116'}
      </button>
    </form>
  );
};

const RegistrationModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', dob: '', address: '', otp: '' });
  const [generatedToken, setGeneratedToken] = useState('');
  const [message, setMessage] = useState('');
  const [socialMedia, setSocialMedia] = useState({ instagram: false, facebook: false });

  const generateToken = () => {
    const uniqueDigits = new Set();
    while (uniqueDigits.size < 4) {
      uniqueDigits.add(Math.floor(Math.random() * 10));
    }
    const digits = Array.from(uniqueDigits).join('');
    return `2025_abc_${digits}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    setMessage('OTP sent to your contact. (Simulated)');
    setStep(2);
  };

  const handlePersonalDetailsSubmit = (e) => {
    e.preventDefault();
    setMessage('Details saved. Please follow our social media accounts.');
    setStep(3);
  };

  const handleSocialFollow = (platform) => {
    setSocialMedia(prev => ({ ...prev, [platform]: true }));
  };

  const handleFinalizeRegistration = () => {
    if (socialMedia.instagram && socialMedia.facebook) {
      setMessage('Ready to make a payment to finalize your registration.');
      setStep(4);
    }
  };
  
  const handlePaymentSuccess = () => {
    const newToken = generateToken();
    setGeneratedToken(newToken);
    setMessage('Payment successful! Your token is generated.');
    
    // Store user data in localStorage
    const userData = {
      name: formData.name,
      token: newToken,
      appliedDate: new Date().toISOString(),
      paymentStatus: 'Completed',
      paymentDate: new Date().toISOString(),
      contestStatus: 'Draw Not Open'
    };
    localStorage.setItem(newToken, JSON.stringify(userData));

    setStep(5);
  };

  const handlePaymentFailure = (errorMessage) => {
    setMessage(errorMessage);
    setStep(4);
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.text(`Registration Details`, 10, 10);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Token Number: ${generatedToken}`, 10, 30);
    doc.text(`Applied Date: ${new Date().toLocaleDateString()}`, 10, 40);
    doc.save(`${generatedToken}.pdf`);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Verify Phone/Email</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone / Email</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Enter Phone or Email" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition">Send OTP</button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={handlePersonalDetailsSubmit} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Personal Details</h3>
            <p className="text-sm text-gray-600 mb-4">{message}</p>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Permanent Address</label>
              <textarea name="address" value={formData.address} onChange={handleInputChange} rows="3" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition">Continue</button>
          </form>
        );
      case 3:
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 3: Follow Us</h3>
            <p className="text-lg text-gray-700 mb-6">{message}</p>
            {/* Social media buttons */}
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleSocialFollow('instagram')} disabled={socialMedia.instagram} className={`flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-bold transition ${socialMedia.instagram ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-pink-500 text-white hover:bg-pink-600'}`}>
                {socialMedia.instagram ? (<><span>Followed on Instagram</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></>) : (<><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.77 1.687 4.908 4.908.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.687 4.77-4.908 4.908-1.265.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.77-1.687-4.908-4.908-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.687-4.77 4.908-4.908 1.265-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.357-.2 6.78-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.358-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.442.646-1.442 1.442s.646 1.442 1.442 1.442 1.442-.646 1.442-1.442-.646-1.442-1.442-1.442z" /></svg><span>Follow on Instagram</span></>)}
              </button>
              <button onClick={() => handleSocialFollow('facebook')} disabled={socialMedia.facebook} className={`flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-bold transition ${socialMedia.facebook ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                {socialMedia.facebook ? (<><span>Followed on Facebook</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></>) : (<><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.909c0-.867.198-1.091 1.03-1.091h2.97v-3h-4c-3.123 0-4 2.116-4 4v2.909z"/></svg><span>Follow on Facebook</span></>)}
              </button>
            </div>
            {socialMedia.instagram && socialMedia.facebook && (
              <button onClick={handleFinalizeRegistration} className="mt-6 w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition">
                Continue to Payment
              </button>
            )}
          </div>
        );
      case 4:
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 4: Make a Payment</h3>
            <p className="text-lg text-gray-700 mb-4">{message}</p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl font-bold mb-4">Amount: ₹116</p>
              <Elements stripe={stripePromise}>
                <PaymentForm onPaymentSuccess={handlePaymentSuccess} onPaymentFailure={handlePaymentFailure} />
              </Elements>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-bounce">Registration Complete! 🎉</h3>
            <p className="text-lg text-gray-700">{message}</p>
            <div className="mt-6 p-4 bg-gray-100 rounded-md">
              <p className="text-sm text-gray-600 font-medium">Your Unique Token ID:</p>
              <p className="text-2xl font-mono text-blue-600 mt-1">{generatedToken}</p>
            </div>
            <button onClick={handleDownloadPdf} className="mt-4 flex items-center justify-center space-x-2 w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 11.586V3a1 1 0 112 0v8.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Download Token PDF</span>
            </button>
            <button onClick={onClose} className="mt-4 w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition">
              Close
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-auto bg-white rounded-xl shadow-2xl p-6">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {renderStep()}
      </div>
    </div>
  );
};

export default RegistrationModal;