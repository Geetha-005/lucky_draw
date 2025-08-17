const Registration = require('../models/Registration');
const { sendOTPEmail } = require('../services/emailService');
const { generateOTP } = require('../utils/helpers');

exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    // Upsert registration record
    const registration = await Registration.findOneAndUpdate(
      { email },
      { 
        email,
        otp: {
          code: otp,
          expiresAt: otpExpiry
        }
      },
      { upsert: true, new: true }
    );

    // Send OTP via email
    await sendOTPEmail(email, otp);

    res.status(200).json({ 
      success: true, 
      message: 'OTP sent successfully',
      registrationId: registration._id
    });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
};



exports.verifyOTP = async (req, res) => {
  try {
    const { registrationId, otp } = req.body;
    
    if (!registrationId || !otp) {
      return res.status(400).json({ 
        success: false, 
        message: 'Registration ID and OTP are required' 
      });
    }

    const registration = await Registration.findById(registrationId);
    
    if (!registration) {
      return res.status(404).json({ 
        success: false, 
        message: 'Registration not found' 
      });
    }

    // Check if OTP exists and is not expired
    if (!registration.otp || registration.otp.expiresAt < new Date()) {
      return res.status(400).json({ 
        success: false, 
        message: 'OTP expired or invalid' 
      });
    }

    // Verify OTP
    if (registration.otp.code !== otp) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid OTP' 
      });
    }

    // Clear OTP after successful verification
    registration.otp = undefined;
    await registration.save();

    res.status(200).json({ 
      success: true, 
      message: 'OTP verified successfully' 
    });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to verify OTP' 
    });
  }
};

// exports.verifyOTP = async (req, res) => {

//   try {
//     const { registrationId, otp } = req.body;
    
//     if (!registrationId || !otp) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Registration ID and OTP are required' 
//       });
//     }

//     const registration = await Registration.findById(registrationId);
    
//     if (!registration) {
//       return res.status(404).json({ 
//         success: false, 
//         message: 'Registration not found' 
//       });
//     }

//     // Check if OTP exists and is not expired
//     if (!registration.otp || registration.otp.expiresAt < new Date()) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'OTP expired or invalid' 
//       });
//     }

//     // Verify OTP
//     if (registration.otp.code !== otp) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Invalid OTP' 
//       });
//     }

//     // Clear OTP after successful verification
//     registration.otp = undefined;
//     await registration.save();

//     res.status(200).json({ 
//       success: true, 
//       message: 'OTP verified successfully' 
//     });
//   } catch (error) {
//     console.error('Error verifying OTP:', error);
//     res.status(500).json({ success: false, message: 'Failed to verify OTP' });
//   }
// };