const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, verifyOtp } = require('../controllers/adminController');

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.post('/verify-otp', verifyOtp);

module.exports = router;
