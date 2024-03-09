import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="Player 1" playerSymbol="X"></Player>
          {/* react create isolated instance of using same component, so state change in one component does not effect other
          althogh they using same component, e.g clicking edit buttion does not show input field for player 2.
          so component instance does not intefir with eacth other.
          */}
          <Player playerName="Player 2" playerSymbol="O"></Player>
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
