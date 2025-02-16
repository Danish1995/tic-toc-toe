import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  console.log(gameBoard);

  // let gameBoard = initialGameBoard; in this way we use reference value array and by setting
  // some value to these array will change into initialGameBoard array and by clearing state on
  // button rematch it still not clear the board

  for (const turn of gameTurns) {
    const { square, player } = turn;

    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secpmdSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secpmdSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSquareClick(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    // curActivePlayer will automaticly get the active player that is X because in useState intial value is X.
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function restartGame() {
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="Player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          {/* react create isolated instance of using same component, so state change in one component does not effect other
          althogh they using same component, e.g clicking edit buttion does not show input field for player 2.
          so component instance does not intefir with eacth other.
          */}
          {/* lift the state up to the closest ancestor component that has access to all components that need to work with that state
           */}
          {/* ancestor or parent component passes a function that eventually changes tht state via props to the child component */}
          <Player
            playerName="Player 2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={restartGame}></GameOver>
        )}
        <GameBoard
          squareClick={handleSquareClick}
          board={gameBoard}
        ></GameBoard>
        {/* one important concept is lifting state up. this is needed when we need same information in two differenct componenet
        for example in this case we need to know the active player in Player and GameBoard component.
        
        so in lifting state up we perfrom actions in the parent  component of both of these component and that is this App 
        component because app componnet can pass infomration of active player to both child component via props*/}
      </div>
      <Log turns={gameTurns}> </Log>
      <p>Test paragraph in master branch</p>
    </main>
  );
}

export default App;

