import React from 'react';

const Button = ({ className, onClick, children }) =>
  <button
    className={className}
    onClick={onClick}
  >{children}
  </button>

export default Button;