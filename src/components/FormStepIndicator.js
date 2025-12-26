import React from 'react';
import './FormStepIndicator.css';

const FormStepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="step-indicator">
      <div className="step-tracks">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={`step-track ${index < currentStep ? 'completed' : ''} ${step.id === currentStep ? 'active' : ''}`}
          >
            <div className="step-number">
              {index < currentStep ? '✓' : step.icon}
            </div>
            <div className="step-title">{step.title}</div>
            {index < steps.length - 1 && (
              <div className={`step-connector ${index < currentStep - 1 ? 'completed' : ''}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormStepIndicator;