import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  onClick, 
  disabled = false,
  fullWidth = false,
  icon = null 
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;