import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <span className="Button-container">
        { this.props.children }
      </span>
    );
  }
};

export default Button;