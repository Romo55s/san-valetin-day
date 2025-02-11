import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CharacterContextType {
  character1: string | null;
  character2: string | null;
  setCharacter1: (character: string) => void;
  setCharacter2: (character: string) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [character1, setCharacter1] = useState<string | null>(null);
  const [character2, setCharacter2] = useState<string | null>(null);

  return (
    <CharacterContext.Provider value={{ character1, character2, setCharacter1, setCharacter2 }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = (): CharacterContextType => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};
