import React from 'react';

import QuoteAuthor from './Author';
import QuoteText from './Text';

const Quote = ({ activeQuote }) => {
  return (
    <>
      <QuoteText quoteText={activeQuote.quote} />
      <QuoteAuthor quoteAuthor={activeQuote.author} />
    </>
  );
}

export default Quote;
