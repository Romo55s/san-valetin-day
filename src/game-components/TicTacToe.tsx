import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCharacter } from '../context/CharacterContext';

const TicTacToe: React.FC = () => {
  const { character1, character2 } = useCharacter();
  const navigate = useNavigate();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setIsDraw] = useState(false);

  // Redirect to character selection if characters are not selected
  if (!character1 || !character2) {
    navigate('/character-selection');
    return null;
  }

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every((cell) => cell !== null)) {
      setIsDraw(true);
    }
  };

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsDraw(false);
  };

  const status = winner
    ? `Winner: ${winner === 'X' ? 'Tony' : 'Mariana'}`
    : isDraw
    ? 'Draw!'
    : `Turn: ${isXNext ? 'Tony' : 'Mariana'}`;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-white text-2xl mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button
            key={index}
            className={`w-32 h-32 lg:w-64 lg:h-64 bg-gray-800 text-white text-2xl flex items-center justify-center ${
              winner && value === (winner === 'X' ? 'X' : 'O') ? 'animate-bounce' : ''
            }`}
            onClick={() => handleClick(index)}
          >
            {value && <img src={value === 'X' ? character1 : character2} alt={value} className="w-full h-full rounded-full" />}
          </button>
        ))}
      </div>
      {(winner || isDraw) && (
        <button
          className="mt-4 bg-black text-white py-2 px-4 rounded-lg"
          onClick={handleRestart}
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default TicTacToe;