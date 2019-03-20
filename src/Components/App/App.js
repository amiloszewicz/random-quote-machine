import React, { Component } from 'react';

import Author from './Author/Author.js';
import Board from './Board/Board.js';

class App extends Component {
  render() {
    const aplicationAuthor = {
      name: 'adam',
      surname: 'miloszewicz'
    };

    return (
      <>
        <Board />
        <Author aplicationAuthor={aplicationAuthor} />
      </>
    );
  }
}

export default App;
