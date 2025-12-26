import React from 'react';

const Preferences = ({ formData, handleChange }) => {
  return (
    <div className="form-step">
      <h2>Preferences</h2>
      <p className="step-description">Customize your experience</p>
      
      <div className="form-grid">
        <div className="form-group">
          <label>Communication Preferences</label>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter">Subscribe to newsletter</label>
          </div>
          
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
            />
            <label htmlFor="notifications">Enable notifications</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="theme">Theme Preference</label>
          <select
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
          >
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
            <option value="auto">Auto (System)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Preferences;