import React from 'react';
import { TumblrShareButton, TumblrIcon } from 'react-share';

const TumblrButton = ({ quote, author, href }) => (
    /* On location host you will get 'Not Available for Sharing'.
    *
    *  Tumblr is doing this only for localhost environments.
    *  https://stackoverflow.com/questions/32924603/sharing-to-tumblr-using-angularjs-ng-click-is-banned
    */
    <TumblrShareButton
      url={`${href}`}
      title={`"${quote}" ${author}`}
      tags={['quote']}
    >
      <TumblrIcon size={38} round={true} iconsBgStyle={'bgStyle'} />
    </TumblrShareButton>
  );

export default TumblrButton;
