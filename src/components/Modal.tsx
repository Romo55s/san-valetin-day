import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
    <div className="bg-gradient-to-r from-red-500 to-pink-700 p-8 rounded-lg shadow-lg z-10 w-3xl h-72 flex flex-col">
        {children}
        <button
          className="mt-4 bg-black text-gray-600 py-2 px-4 rounded-lg cursor-pointer shiny-background border-gray-600 border-2 transition duration-300 ease-in-out transform hover:bg-rose-800 hover:scale-105 active:bg-rose-800 active:scale-105 hover:text-white active:text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
