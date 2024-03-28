import React from 'react';
import Chessboard from 'chessboardjs';

// import { Chess } from 'chess.js'; // Import Chess directly from chess.js
 
const App = () => {
  let board1 = Chessboard('board1');



  return (
    <div>
      <h1>Chess Game</h1>
      <div id='board1' style={{ width: '400px' }}>
       
      </div>
    </div>
  );
};

export default App;
