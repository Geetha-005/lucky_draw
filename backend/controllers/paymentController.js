const Registration = require('../models/Registration');
const { generateRegistrationToken } = require('../services/tokenService');

exports.processPayment = async (req, res) => {
  try {
    const { registrationId } = req.body;
    
    if (!registrationId) {
      return res.status(400).json({ 
        success: false, 
        message: 'Registration ID is required' 
      });
    }

    const registration = await Registration.findById(registrationId);
    
    if (!registration) {
      return res.status(404).json({ 
        success: false, 
        message: 'Registration not found' 
      });
    }

    // Check if social media is followed
    if (!registration.socialMedia.instagram || !registration.socialMedia.facebook) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please follow our social media accounts first' 
      });
    }

    // Simulate payment processing (50% success rate)
    const isPaymentSuccessful = Math.random() > 0.5;
    
    if (isPaymentSuccessful) {
      // Generate and assign registration token
      registration.token = generateRegistrationToken();
      registration.paymentStatus = 'completed';
      registration.paymentDate = new Date();
      await registration.save();
      
      return res.status(200).json({ 
        success: true, 
        message: 'Payment successful',
        token: registration.token,
        registration
      });
    } else {
      registration.paymentStatus = 'failed';
      await registration.save();
      
      return res.status(400).json({ 
        success: false, 
        message: 'Payment failed. Please try again.' 
      });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, message: 'Payment processing failed' });
  }
};