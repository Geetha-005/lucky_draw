// const mongoose = require('mongoose');

// const registrationSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//   },
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   phone: {
//     type: String,
//     trim: true,
//   },
//   dob: {
//     type: Date,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   otp: {
//     code: String,
//     expiresAt: Date,
//   },
//   socialMedia: {
//     instagram: { type: Boolean, default: false },
//     facebook: { type: Boolean, default: false },
//   },
//   token: {
//     type: String,
//     unique: true,
//   },
//   paymentStatus: {
//     type: String,
//     enum: ['pending', 'completed', 'failed'],
//     default: 'pending',
//   },
//   appliedDate: {
//     type: Date,
//     default: Date.now,
//   },
//   contestStatus: {
//     type: String,
//     default: 'Draw Not Open',
//   },
// }, { timestamps: true });

// module.exports = mongoose.model('Registration', registrationSchema);

const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
  },
  address: {
    type: String,
    trim: true,
  },
  otp: {
    code: String,
    expiresAt: Date,
  },
  socialMedia: {
    instagram: { type: Boolean, default: false },
    facebook: { type: Boolean, default: false },
  },
  token: {
    type: String,
    unique: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
  contestStatus: {
    type: String,
    default: 'Draw Not Open',
  },
}, { timestamps: true });

 module.exports = mongoose.model('Registration', registrationSchema);