import React, { Component } from 'react';

class NewQuoteButton extends Component {
  render() {
    return (
      <button onClick={this.props.changeQuote} id='new-quote'>New Quote</button>
    );
  }
}

export default NewQuoteButton;

