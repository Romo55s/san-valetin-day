import { Routes, Route, useNavigate } from 'react-router-dom';
import "./App.css";
import Stack from "./components/Stack";
import TextPressure from "./components/TextPressure";
import Aurora from "./components/Aurora";
import ShinyText from "./components/ShinyText";
import TicTacToe from "./game-components/TicTacToe";
import CharacterSelection from "./game-components/CharacterSelection";

function Home() {
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="content flex justify-center items-center">
      <div className="container flex flex-col gap-10 text-center p-4 md:p-10">
        <div>
          <div className="relative h-12 md:h-48 lg:h-10 w-full max-w-4xl mx-auto">
            <TextPressure
              text="Happy Valentines Day!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={42}
              maxFontSize={92}
            />
          </div>
        </div>
        <div className="flex justify-center items-center relative flex-col gap-6">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cardDimensions={{ width: 300, height: 300 }}
            cardsData={images}
          />
          <button
            className="mt-4 bg-black text-black py-2 px-4 rounded-lg cursor-pointer shiny-background border-gray-600 border-2 transition duration-300 ease-in-out transform hover:bg-rose-800 hover:scale-105 active:bg-rose-800 active:scale-105"
            onClick={() => navigate('/character-selection')}
          >
            <ShinyText
              text="Click!"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="aurora-background">
        <Aurora colorStops={["#FF1493", "#FF69B4", "#FFC0CB"]} speed={0.5} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character-selection" element={<CharacterSelection />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </>
  );
}

export default App;
