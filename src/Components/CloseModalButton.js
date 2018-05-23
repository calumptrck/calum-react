import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button'

const CloseModalButton = ({ className, onClick, children }) =>
  <Button
    className={className}
    onClick={onClick}
  >
    <i className="fa fa-times" aria-hidden="true"></i>
  </Button>

export default CloseModalButton;