const Registration = require('../models/Registration');
const { generateRegistrationToken } = require('../services/tokenService');

exports.savePersonalDetails = async (req, res) => {
  try {
    const { registrationId, name, dob, address, phone } = req.body;
    
    if (!registrationId || !name || !dob || !address) {
      return res.status(400).json({ 
        success: false, 
        message: 'Required fields are missing' 
      });
    }

    const registration = await Registration.findByIdAndUpdate(
      registrationId,
      { name, dob, address, phone },
      { new: true }
    );

    if (!registration) {
      return res.status(404).json({ 
        success: false, 
        message: 'Registration not found' 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Personal details saved successfully',
      registration
    });
  } catch (error) {
    console.error('Error saving personal details:', error);
    res.status(500).json({ success: false, message: 'Failed to save personal details' });
  }
};

exports.updateSocialStatus = async (req, res) => {
  try {
    const { registrationId, platform } = req.body;
    
    if (!registrationId || !platform) {
      return res.status(400).json({ 
        success: false, 
        message: 'Registration ID and platform are required' 
      });
    }

    const registration = await Registration.findById(registrationId);
    
    if (!registration) {
      return res.status(404).json({ 
        success: false, 
        message: 'Registration not found' 
      });
    }

    // Update social media status
    if (platform === 'instagram' || platform === 'facebook') {
      registration.socialMedia[platform] = true;
      await registration.save();
    }

    res.status(200).json({ 
      success: true, 
      message: 'Social media status updated',
      socialMedia: registration.socialMedia
    });
  } catch (error) {
    console.error('Error updating social status:', error);
    res.status(500).json({ success: false, message: 'Failed to update social status' });
  }
};

exports.getRegistrationDetails = async (req, res) => {
  try {
    const { registrationId } = req.params;
    
    const registration = await Registration.findById(registrationId);
    
    if (!registration) {
      return res.status(404).json({ 
        success: false, 
        message: 'Registration not found' 
      });
    }

    res.status(200).json({ 
      success: true, 
      registration 
    });
  } catch (error) {
    console.error('Error getting registration details:', error);
    res.status(500).json({ success: false, message: 'Failed to get registration details' });
  }
};