import React from 'react';

const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 ${className}`}
    {...props}
  />
);

export default Input;
