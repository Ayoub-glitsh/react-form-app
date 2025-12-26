import React from 'react';
import './FormSteps.css';

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div className="form-step">
      <h2>Personal Information</h2>
      <p className="step-description">Please provide your basic details</p>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="firstName">
            First Name *
            <span className="required-dot"></span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            Last Name *
            <span className="required-dot"></span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email Address *
            <span className="required-dot"></span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone Number *
            <span className="required-dot"></span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;