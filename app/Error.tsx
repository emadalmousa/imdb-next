import React, { Component } from 'react';

interface ErrorProps {
  message: string;
}

class Error extends Component<ErrorProps> {
  render() {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Error;
