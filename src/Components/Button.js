import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ className, onClick, children }) =>
  <button
    className={className}
    onClick={onClick}
  >{children}
  </button>

export default Button;