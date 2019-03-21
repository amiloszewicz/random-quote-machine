import React, { Component } from 'react';
//import { TwitterShareButton } from 'react-twitter-embed';
import { TwitterShareButton, TwitterIcon } from 'react-share';

class TwitterButton extends Component {
  render() {
    return (
      // '<a></a>' tag is unecessary here, it's added only for FeeCodeCamp tests
      // <a id='tweet-quote' href='https://twitter.com/intent/tweet'>
      //   <TwitterShareButton
      //     url='null'
      //     options={{
      //       text: `"${this.props.quote.text}" ${
      //         this.props.quote.author
      //       } #quotes`,
      //       size: 'large'
      //     }}
      //   />
      // </a>
      <TwitterShareButton
        url={`null`}
        title={`"${this.props.quote.text}" ${this.props.quote.author}`}
        hashtags={['quote']}
      >
        <TwitterIcon size={38} round={true} iconsBgStyle={'bgStyle'} />
      </TwitterShareButton>
    );
  }
}

export default TwitterButton;
