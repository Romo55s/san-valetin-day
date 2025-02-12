import { Routes, Route, useNavigate } from 'react-router-dom';
import "./App.css";
import Stack from "./components/Stack";
import TextPressure from "./components/TextPressure";
import Aurora from "./components/Aurora";
import ShinyText from "./components/ShinyText";
import TicTacToe from "./game-components/TicTacToe";
import CharacterSelection from "./game-components/CharacterSelection";
import { useState, useEffect } from 'react';
import picture1 from '/assets/pictures-together/picture1.jpg';
import picture2 from '/assets/pictures-together/picture2.jpg';
import picture3 from '/assets/pictures-together/picture3.jpg';
import picture4 from '/assets/pictures-together/picture4.jpg';
import picture5 from '/assets/pictures-together/picture5.jpg';
import picture6 from '/assets/pictures-together/picture6.jpg';
import picture7 from '/assets/pictures-together/picture7.jpg';
import picture8 from '/assets/pictures-together/picture8.jpg';
import picture9 from '/assets/pictures-together/picture9.jpg';
import picture10 from '/assets/pictures-together/picture10.jpg';
import picture11 from '/assets/pictures-together/picture11.jpg';
import picture12 from '/assets/pictures-together/picture12.jpg';
import picture13 from '/assets/pictures-together/picture13.jpg';
import picture14 from '/assets/pictures-together/picture14.jpg';
import picture15 from '/assets/pictures-together/picture15.jpg';
import picture16 from '/assets/pictures-together/picture16.jpg';
import picture17 from '/assets/pictures-together/picture17.jpg';
import picture20 from '/assets/pictures-together/picture20.jpg';
import picture21 from '/assets/pictures-together/picture21.jpg';
import picture22 from '/assets/pictures-together/picture22.jpg';
import picture23 from '/assets/pictures-together/picture23.jpg';
import picture24 from '/assets/pictures-together/picture24.jpg';
import TitlePage from './pages/TitlePage';
import NextPage from './pages/NextPage'; // Import the new NextPage component

const images = [
  { id: 1, img: picture1 },
  { id: 2, img: picture2 },
  { id: 3, img: picture3 },
  { id: 4, img: picture4 },
  { id: 5, img: picture5 },
  { id: 6, img: picture6 },
  { id: 7, img: picture7 },
  { id: 8, img: picture8 },
  { id: 9, img: picture9 },
  { id: 10, img: picture10 },
  { id: 11, img: picture11 },
  { id: 12, img: picture12 },
  { id: 13, img: picture13 },
  { id: 14, img: picture14 },
  { id: 15, img: picture15 },
  { id: 16, img: picture16 },
  { id: 17, img: picture17 },
  { id: 20, img: picture20 },
  { id: 21, img: picture21 },
  { id: 22, img: picture22 },
  { id: 23, img: picture23 },
  { id: 24, img: picture24 },
];

const shuffleArray = <T,>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

function Home() {
  const [randomImages, setRandomImages] = useState(images);

  useEffect(() => {
    const shuffledImages = shuffleArray(images);
    setRandomImages(shuffledImages.slice(0, 4)); // Select the first 4 images
  }, []);

  const navigate = useNavigate();

  return (
    <div className="content flex justify-center items-center">
      <div className="container flex flex-col gap-10 text-center p-4 md:p-10">
        <div>
          <div className="relative h-12 md:h-48 lg:h-12 w-full max-w-4xl mx-auto">
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
            cardsData={randomImages}
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
        <Route path="/title" element={<TitlePage />} />
        <Route path="/next-page" element={<NextPage />} /> {/* Add the new route */}
      </Routes>
    </>
  );
}

export default App;
