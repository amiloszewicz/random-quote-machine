import React, { Component } from 'react';

class QuoteText extends Component {
  render() {
    return (
      <div id='text'>
        <p>{this.props.quoteText}</p>
      </div>
    );
  }
}

export default QuoteText;

