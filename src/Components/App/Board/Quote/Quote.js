import React, { Component } from 'react';

import QuoteAuthor from './QuoteAuthor/QuoteAuthor.js';
import QuoteText from './QuoteText/QuoteText.js';

class Quote extends Component {
  render() {
    return (
      <div>
        <QuoteText quoteText={this.props.quote.text} />
        <QuoteAuthor quoteAuthor={this.props.quote.author} />
      </div>
    );
  }
}

export default Quote;

