import React, { Component } from 'react';

import Quote from './Quote/Quote.js';
import NewQuoteButton from './Buttons/NewQuoteButton.js';
import TumblrButton from './Buttons/TumblrButton.js';
import TwitterButton from './Buttons/TwitterButton.js';

import { quotes } from '../Quotes.js';

class Board extends Component {
  state = {
    quote: {
      text: '',
      author: ''
    }
  };

  componentWillMount() {
    this.newQuote();
  }

  newQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];

    this.setState({
      quote: {
        text: newQuote.quote,
        author: newQuote.author
      }
    })
  };

  render() {
    return (
      <div id='quote-box'>
       <Quote quote={this.state.quote} />
       <TumblrButton quote={this.state.quote} />
       <TwitterButton quote={this.state.quote} />
       <NewQuoteButton changeQuote={this.newQuote} />
      </div>
    );
  }
}

export default Board;

