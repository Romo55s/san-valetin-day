import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCharacter } from "../context/CharacterContext";
import DecryptedText from "../components/DecryptedText";
import Modal from "../components/Modal";

const TicTacToe: React.FC = () => {
  const { character1, character2 } = useCharacter();
  const navigate = useNavigate();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Redirect to character selection if characters are not selected
  if (!character1 || !character2) {
    navigate("/character-selection");
    return null;
  }

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner.winner);
      setWinningLine(gameWinner.line);
      setIsModalOpen(true);
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine(null);
    setIsDraw(false);
    setIsModalOpen(false);
  };

  const status = winner
    ? `Winner: ${winner === "X" ? "Tony" : "Mariana"}`
    : isDraw
    ? "Draw!"
    : `Turn: ${isXNext ? "Tony" : "Mariana"}`;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-white text-2xl mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button
            key={index}
            className={`w-32 h-32 lg:w-64 lg:h-64 bg-gray-800 text-white text-2xl flex items-center justify-center ${
              winningLine && winningLine.includes(index) ? "animate-bounce" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {value && (
              <img
                src={value === "X" ? character1 : character2}
                alt={value}
                className="w-full h-full rounded-full"
              />
            )}
          </button>
        ))}
      </div>
      {(winner || isDraw) && (
        <button
          className="mt-4 bg-black text-gray-600 py-2 px-4 rounded-lg cursor-pointer shiny-background border-gray-600 border-2 transition duration-300 ease-in-out transform hover:bg-rose-800 hover:scale-105 active:bg-rose-800 active:scale-105 hover:text-white active:text-white"
          onClick={handleRestart}
        >
          Restart Game
        </button>
      )}

      <Modal isOpen={isModalOpen} onClose={handleRestart}>
        <div className="flex flex-col items-center">
          <DecryptedText
            text={`Winner: ${winner === "X" ? "Tony" : "Mariana"}`}
            animateOn="view"
            speed={300}
            maxIterations={10}
            sequential={true}
            revealDirection="start"
          />
          <img
            src={winner === "X" ? character1 : character2}
            alt="Winner"
            className="w-32 h-32 rounded-full mt-4"
          />
        </div>
      </Modal>
    </div>
  );
};

export default TicTacToe;
