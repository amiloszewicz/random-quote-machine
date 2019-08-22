import React from 'react';

const Author = ({ aplicationAuthor: {name, surname} }) => (
  <p>by {name} {surname}</p>
);

export default Author;
