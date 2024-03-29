import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

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
        <GameBoard
          squareClick={handleSquareClick}
          turns={gameTurns}
        ></GameBoard>
        {/* one important concept is lifting state up. this is needed when we need same information in two differenct componenet
        for example in this case we need to know the active player in Player and GameBoard component.
        
        so in lifting state up we perfrom actions in the parent  component of both of these component and that is this App 
        component because app componnet can pass infomration of active player to both child component via props*/}

        <Log> </Log>
      </div>
    </main>
  );
}

export default App;
