import React, { Component } from 'react';
import { TumblrShareButton, TumblrIcon } from 'react-share';

class TumblrButton extends Component {
  render() {
    return (
      // on location host you will get 'Not Available for Sharing'.
      // Tumblr is doing this only for localhost environments.
      // https://stackoverflow.com/questions/32924603/sharing-to-tumblr-using-angularjs-ng-click-is-banned
      <TumblrShareButton
        url={`${location.href}`}
        title={`"${this.props.quote.text}" ${this.props.quote.author}`}
        tags={['quote']}
      >
        <TumblrIcon size={38} round={true} iconsBgStyle={'bgStyle'} />
      </TumblrShareButton>
    );
  }
}

export default TumblrButton;
