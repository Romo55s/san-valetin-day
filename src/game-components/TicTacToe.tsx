import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCharacter } from '../context/CharacterContext';

const TicTacToe: React.FC = () => {
  const { character1, character2 } = useCharacter();
  const navigate = useNavigate();

  console.log(character1, character2);

  // Redirect to character selection if characters are not selected
  if (!character1 || !character2) {
    navigate('/character-selection');
    return null;
  }

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
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

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'Player 1' : 'Player 2'}`;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-white text-2xl mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-16 h-16 bg-gray-800 text-white text-2xl flex items-center justify-center"
            onClick={() => handleClick(index)}
          >
            {value && <img src={value === 'X' ? character1 : character2} alt={value} className="w-full h-full" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;