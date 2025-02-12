import React from "react";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  nextPage: string; // Add nextPage prop
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, nextPage, children }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNext = () => {
    navigate(nextPage);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-gradient-to-r from-red-500 to-pink-700 p-8 rounded-lg shadow-lg z-10 w-full max-w-3xl flex flex-col">
        {children}
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-black text-gray-600 py-2 px-4 md:py-4 md:px-8 rounded-lg cursor-pointer shiny-background border-gray-600 border-2 transition duration-300 ease-in-out transform hover:bg-rose-800 hover:scale-105 active:bg-rose-800 active:scale-105 hover:text-white active:text-white"
            onClick={onClose}
          >
            Play again
          </button>
          <button
            className="bg-black text-gray-600 py-2 px-4 md:py-4 md:px-8 rounded-lg cursor-pointer shiny-background border-gray-600 border-2 transition duration-300 ease-in-out transform hover:bg-rose-800 hover:scale-105 active:bg-rose-800 active:scale-105 hover:text-white active:text-white"
            onClick={handleNext} // Navigate to the next page
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
