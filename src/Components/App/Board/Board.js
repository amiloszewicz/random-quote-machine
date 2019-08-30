import React, { useState, useEffect } from 'react';

import Quote from '../Quote';
import NewQuoteButton from '../Buttons/NewQuoteButton';
import TumblrButton from '../Buttons/TumblrButton';
import TwitterButton from '../Buttons/TwitterButton';

import { quotes } from '../Quotes.js';

const Board = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  const href = 'abc';

  const randomQuote = e => {
    const len = quotes.length;

    setActiveQuote(Math.round(Math.random() * len));
  }

  return (
    <div id='quote-box'>
      <Quote activeQuote={quotes[activeQuote]} />
      <TumblrButton activeQuote={quotes[activeQuote]} />
      <TwitterButton activeQuote={quotes[activeQuote]} />
      <NewQuoteButton changeQuote={randomQuote} />
    </div>
  );
}

export default Board;
