import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-lg text-white font-medium transition duration-300 bg-indigo-600 hover:bg-indigo-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
