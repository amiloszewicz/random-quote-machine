import React from 'react';

import Author from './AppAuthor';
import Board from './Board';

const App = () => {
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

export default App;
