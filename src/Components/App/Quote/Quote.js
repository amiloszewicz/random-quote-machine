import React from 'react';

import QuoteAuthor from './Author';
import QuoteText from './Text';

const Quote = ({ text, author }) => {
  return (
    <>
      <QuoteText quoteText={text} />
      <QuoteAuthor quoteAuthor={author} />
    </>
  );
}

export default Quote;
