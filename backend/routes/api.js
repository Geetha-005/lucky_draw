const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');
const registrationController = require('../controllers/registrationController');
const paymentController = require('../controllers/paymentController');

// OTP routes
router.post('/otp/send', otpController.sendOTP);
router.post('/otp/verify', otpController.verifyOTP);

// Registration routes
router.post('/registration/details', registrationController.savePersonalDetails);
router.post('/registration/social', registrationController.updateSocialStatus);
router.get('/registration/:registrationId', registrationController.getRegistrationDetails);

// Payment route
router.post('/payment/process', paymentController.processPayment);

module.exports = router;