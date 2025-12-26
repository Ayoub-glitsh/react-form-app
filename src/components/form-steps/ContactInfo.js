import React from 'react';

const ContactInfo = ({ formData, handleChange }) => {
  return (
    <div className="form-step">
      <h2>Contact Information</h2>
      <p className="step-description">Where can we reach you?</p>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="address">
            Street Address *
            <span className="required-dot"></span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">
            City *
            <span className="required-dot"></span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="New York"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State / Province</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="NY"
          />
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">
            ZIP / Postal Code *
            <span className="required-dot"></span>
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="10001"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="au">Australia</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
            <option value="jp">Japan</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;