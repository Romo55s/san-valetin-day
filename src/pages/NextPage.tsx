import React from "react";
import { useNavigate } from "react-router-dom";
import macaco1 from "/assets/macacos/macaco-feliz-2.gif";

const NextPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToStart = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <img src={macaco1} alt="Next" className="w-64 h-64 rounded-lg mb-8" />
    <h1 className="text-2xl text-center">Love you chula, happy Valentine's Day!</h1>
      <button
        className="mt-4 bg-black text-white py-2 px-4 md:py-4 md:px-8 text-xl md:text-2xl rounded-lg cursor-pointer shiny-background border-gray-600 border-2 transition duration-300 ease-in-out transform hover:bg-rose-800 hover:scale-105 active:bg-rose-800 active:scale-105"
        onClick={handleBackToStart}
      >
        Back to Start
      </button>
    </div>
  );
};

export default NextPage;
