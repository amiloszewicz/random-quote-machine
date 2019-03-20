import React, { Component } from 'react';

class QuoteAuthor extends Component {
  render() {
    return (
      <div id='author'>
        <p>{this.props.quoteAuthor}</p>
      </div>
    );
  }
}

export default QuoteAuthor;

