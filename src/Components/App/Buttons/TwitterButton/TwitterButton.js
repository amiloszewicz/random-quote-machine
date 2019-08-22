import React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';

const TwitterButton = ({ quote: { quote, author } }) => (
  <a id='tweet-quote' href='https://twitter.com/intent/tweet'>
    <TwitterShareButton
      url={`null`}
      title={`"${quote}" ${author}`}
      hashtags={['quote']}
    >
      <TwitterIcon size={38} round={true} iconsBgStyle={'bgStyle'} />
    </TwitterShareButton>
  </a>
);

export default TwitterButton;
