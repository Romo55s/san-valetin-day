import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tony1 from '/assets/tony-stickers/b1526800-622d-45e5-ae4c-ba4d856e7cc0.webp';
import tony2 from '/assets/tony-stickers/6d4fd6f5-487d-447b-bccc-48a5884845b0.webp';
import mariana1 from '/assets/mariana-stickers/85264251-6945-4308-9ede-990ba3f8e7dc.webp';
import mariana2 from '/assets/mariana-stickers/58ac9e6f-b558-45e8-a100-51fa7bcf8f3d.webp';
import mariana3 from '/assets/mariana-stickers/180b31fc-78f1-48e0-90d3-32d02fe21a31.webp';
import mariana4 from '/assets/mariana-stickers/0311a4d3-20bb-47dd-918c-867cd8d14ea9.webp';
import mariana5 from '/assets/mariana-stickers/85264251-6945-4308-9ede-990ba3f8e7dc.webp';
import { useCharacter } from '../context/CharacterContext';

const tony_characters = [
  { id: 'character1', src: tony1 },
  { id: 'character2', src: tony2 },
];

const mariana_characters = [
  { id: 'character1', src: mariana1 },
  { id: 'character2', src: mariana2 },
  { id: 'character3', src: mariana3 },
  { id: 'character4', src: mariana4 },
  { id: 'character5', src: mariana5 },
];

const CharacterSelection: React.FC = () => {
  const [selectedCharacter1, setSelectedCharacter1] = useState<string | null>(null);
  const [selectedCharacter2, setSelectedCharacter2] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setCharacter1, setCharacter2 } = useCharacter();

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
      <div className="flex gap-4 mb-8">
        {tony_characters.map((character) => (
          <img
            key={character.id}
            src={character.src}
            alt={character.id}
            className={`w-16 h-16 cursor-pointer ${selectedCharacter1 === character.src ? 'border-4 border-blue-500' : ''}`}
            onClick={() => handleSelectCharacter(1, character.src)}
          />
        ))}
      </div>
      <h2 className="text-white text-2xl mb-4">Mariana's</h2>
      <div className="flex gap-4 mb-8">
        {mariana_characters.map((character) => (
          <img
            key={character.id}
            src={character.src}
            alt={character.id}
            className={`w-16 h-16 cursor-pointer ${selectedCharacter2 === character.src ? 'border-4 border-red-500' : ''}`}
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
