import React from 'react';

const Review = ({ formData, handleChange }) => {
  return (
    <div className="form-step">
      <h2>Review & Submit</h2>
      <p className="step-description">Please review your information before submitting</p>
      
      <div className="review-section">
        <h3>Personal Information</h3>
        <div className="review-item">
          <span className="review-label">Name:</span>
          <span className="review-value">{formData.firstName} {formData.lastName}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Email:</span>
          <span className="review-value">{formData.email}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Phone:</span>
          <span className="review-value">{formData.phone}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Date of Birth:</span>
          <span className="review-value">{formData.dob || 'Not specified'}</span>
        </div>
      </div>
      
      <div className="review-section">
        <h3>Contact Information</h3>
        <div className="review-item">
          <span className="review-label">Address:</span>
          <span className="review-value">{formData.address}</span>
        </div>
        <div className="review-item">
          <span className="review-label">City, State:</span>
          <span className="review-value">{formData.city}, {formData.state}</span>
        </div>
        <div className="review-item">
          <span className="review-label">ZIP Code:</span>
          <span className="review-value">{formData.zipCode}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Country:</span>
          <span className="review-value">{formData.country}</span>
        </div>
      </div>
      
      <div className="review-section">
        <h3>Preferences</h3>
        <div className="review-item">
          <span className="review-label">Newsletter:</span>
          <span className="review-value">{formData.newsletter ? 'Subscribed' : 'Not subscribed'}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Notifications:</span>
          <span className="review-value">{formData.notifications ? 'Enabled' : 'Disabled'}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Theme:</span>
          <span className="review-value">{formData.theme}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Language:</span>
          <span className="review-value">{formData.language}</span>
        </div>
      </div>
      
      <div className="terms-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label htmlFor="termsAccepted">
            I agree to the Terms & Conditions and Privacy Policy *
          </label>
        </div>
      </div>
    </div>
  );
};

export default Review;