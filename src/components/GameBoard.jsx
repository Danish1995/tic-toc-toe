const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ squareClick, turns }) {
  console.log(turns);
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;

    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  // Immutable state updating in React means that you create a new copy of the state object when making changes, instead of
  //  modifying the existing state object directly. This is important for React because it helps to avoid unintended side
  // effects and enables proper handling of component updates.

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => squareClick(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {/* When you write onClick={handleSelectSquare(rowIndex, colIndex)}, you're not passing a function reference;
                   instead, you're invoking the function immediately, and the onClick handler receives the result of that 
                   function call, which is undefined in this case. To fix this, you need to pass a function reference to
                    onClick. You can achieve this by using an arrow function or the bind method. Here's how you can modify 
                    your button component: */}
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
