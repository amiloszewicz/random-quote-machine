import React, { useState, useEffect } from 'react';

import Quote from '../Quote';
import NewQuoteButton from '../Buttons/NewQuoteButton';
import TumblrButton from '../Buttons/TumblrButton';
import TwitterButton from '../Buttons/TwitterButton';

import { quotes } from '../Quotes.js';

const Board = () => {

  const [ quote, setQuoteText ] = useState('');
  const [ author, setQuoteAuthor ] = useState('');

  const setQuote = () => {
    console.log('dupa');
    const { quote, author } = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote, author);

    setQuoteText(quote);
    setQuoteAuthor(author);
  };

  useEffect(setQuote, [quote, author]);

  const newQuote = { quote, author };
  const href = 'abc';

  return (
    <div id='quote-box'>
      <Quote quote={newQuote} />
      <TumblrButton quote={{ newQuote, href }} />
      <TwitterButton quote={newQuote} />
      <NewQuoteButton changeQuote={setQuote} />
    </div>
  );
}

export default Board;
