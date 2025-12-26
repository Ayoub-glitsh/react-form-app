import React, { useState } from 'react';
import './ResponsiveForm.css';
import FormStepIndicator from './FormStepIndicator';
import PersonalInfo from './form-steps/PersonalInfo';
import ContactInfo from './form-steps/ContactInfo';
import Preferences from './form-steps/Preferences';
import Review from './form-steps/Review';

const ResponsiveForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    
    // Contact Info
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    
    // Preferences
    newsletter: false,
    notifications: true,
    theme: 'light',
    language: 'en',
    
    // Terms
    termsAccepted: false
  });

  const steps = [
    { id: 1, title: 'Personal', icon: '👤' },
    { id: 2, title: 'Contact', icon: '📍' },
    { id: 3, title: 'Preferences', icon: '⚙️' },
    { id: 4, title: 'Review', icon: '📋' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      alert('Form submitted successfully!');
      console.log('Form Data:', formData);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        newsletter: false,
        notifications: true,
        theme: 'light',
        language: 'en',
        termsAccepted: false
      });
      setCurrentStep(1);
    }
  };

  const validateStep = (step) => {
    switch(step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.zipCode;
      case 4:
        return formData.termsAccepted;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <PersonalInfo formData={formData} handleChange={handleInputChange} />;
      case 2:
        return <ContactInfo formData={formData} handleChange={handleInputChange} />;
      case 3:
        return <Preferences formData={formData} handleChange={handleInputChange} />;
      case 4:
        return <Review formData={formData} handleChange={handleInputChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="responsive-form-container">
      <div className="form-header">
        <h1>📝 Responsive Registration Form</h1>
        <p className="subtitle">Fill in your details below. All fields marked with * are required.</p>
      </div>

      <FormStepIndicator steps={steps} currentStep={currentStep} />

      <form className="form-content" onSubmit={handleSubmit}>
        {renderStep()}

        <div className="form-navigation">
          {currentStep > 1 && (
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={handlePrev}
            >
              ← Previous
            </button>
          )}
          
          <div className="navigation-right">
            {currentStep < steps.length ? (
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!validateStep(currentStep)}
              >
                Next →
              </button>
            ) : (
              <button 
                type="submit" 
                className="btn btn-success"
                disabled={!validateStep(currentStep)}
              >
                Submit Form ✓
              </button>
            )}
          </div>
        </div>

        <div className="form-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>
          <div className="progress-text">
            Step {currentStep} of {steps.length} • {Math.round((currentStep / steps.length) * 100)}% Complete
          </div>
        </div>
      </form>

      <div className="form-footer">
        <p>Need help? Contact support@example.com</p>
        <p className="disclaimer">Your information is secure and will not be shared.</p>
      </div>
    </div>
  );
};

export default ResponsiveForm;