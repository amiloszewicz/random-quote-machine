import React, { Component } from 'react';

class Author extends Component {
  render() {
    return (
      <p>by {this.props.aplicationAuthor.name} {this.props.aplicationAuthor.surname}</p>
    );
  }
}

export default Author;

