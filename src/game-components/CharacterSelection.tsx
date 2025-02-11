import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tony1 from '/assets/tony-stickers/tony1.webp';
import tony2 from '/assets/tony-stickers/tony2.webp';
import tony3 from '/assets/tony-stickers/tony3.webp';
import tony4 from '/assets/tony-stickers/tony4.webp';
import tony5 from '/assets/tony-stickers/tony5.webp';
import tony6 from '/assets/tony-stickers/tony6.webp';
import mariana1 from '/assets/mariana-stickers/mariana1.webp';
import mariana2 from '/assets/mariana-stickers/mariana2.webp';
import mariana3 from '/assets/mariana-stickers/mariana3.webp';
import mariana4 from '/assets/mariana-stickers/mariana4.webp';
import mariana5 from '/assets/mariana-stickers/mariana5.webp';
import mariana6 from '/assets/mariana-stickers/mariana6.webp';
import mariana7 from '/assets/mariana-stickers/mariana7.webp';
import { useCharacter } from '../context/CharacterContext';

const tony_characters = [
  { id: 'character1', src: tony1 },
  { id: 'character2', src: tony2 },
  { id: 'character3', src: tony3 },
  { id: 'character4', src: tony4 },
  { id: 'character5', src: tony5 },
  { id: 'character6', src: tony6 },
];

const mariana_characters = [
  { id: 'character1', src: mariana1 },
  { id: 'character2', src: mariana2 },
  { id: 'character3', src: mariana3 },
  { id: 'character4', src: mariana4 },
  { id: 'character5', src: mariana5 },
  { id: 'character6', src: mariana6 },
  { id: 'character7', src: mariana7 },
];

const shuffleArray = <T,>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

const CharacterSelection: React.FC = () => {
  const [shuffledTonyCharacters, setShuffledTonyCharacters] = useState(tony_characters);
  const [shuffledMarianaCharacters, setShuffledMarianaCharacters] = useState(mariana_characters);
  const [selectedCharacter1, setSelectedCharacter1] = useState<string | null>(null);
  const [selectedCharacter2, setSelectedCharacter2] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setCharacter1, setCharacter2 } = useCharacter();

  useEffect(() => {
    setShuffledTonyCharacters(shuffleArray(tony_characters));
    setShuffledMarianaCharacters(shuffleArray(mariana_characters));
  }, []);

  const handleSelectCharacter = (player: number, characterSrc: string) => {
    if (player === 1) {
      setSelectedCharacter1(characterSrc);
    } else {
      setSelectedCharacter2(characterSrc);
    }
  };

  const handleStartGame = () => {
    if (selectedCharacter1 && selectedCharacter2) {
      setCharacter1(selectedCharacter1);
      setCharacter2(selectedCharacter2);
      navigate('/tic-tac-toe');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-white text-2xl mb-4">Tony's</h2>
      <div className="flex gap-4 mb-8 overflow-x-auto">
        {shuffledTonyCharacters.map((character) => (
          <img
            key={character.id}
            src={character.src}
            alt={character.id}
            className={`w-32 h-32 cursor-pointer transform transition-transform duration-300 hover:scale-102 rounded-full ${selectedCharacter1 === character.src ? 'border-4 border-blue-500' : ''}`}
            onClick={() => handleSelectCharacter(1, character.src)}
          />
        ))}
      </div>
      <h2 className="text-white text-2xl mb-4">Mariana's</h2>
      <div className="flex gap-4 mb-8 overflow-x-auto">
        {shuffledMarianaCharacters.map((character) => (
          <img
            key={character.id}
            src={character.src}
            alt={character.id}
            className={`w-32 h-32 cursor-pointer transform transition-transform duration-300 hover:scale-102 rounded-full ${selectedCharacter2 === character.src ? 'border-4 border-red-500' : ''}`}
            onClick={() => handleSelectCharacter(2, character.src)}
          />
        ))}
      </div>
      <button
        className="bg-black text-white py-2 px-4 rounded-lg"
        onClick={handleStartGame}
        disabled={!selectedCharacter1 || !selectedCharacter2}
      >
        Start Game
      </button>
    </div>
  );
};

export default CharacterSelection;
