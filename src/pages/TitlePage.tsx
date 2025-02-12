import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlurText from "../components/BlurText";
import ShinyText from "../components/ShinyText";
import CircularGallery from "../components/CircularGallery";
import macaco1 from "/assets/macacos/macaco-enojado.gif";
import macaco2 from "/assets/macacos/macaco-enojado2.gif";
import macaco3 from "/assets/macacos/macaco-enojado3.gif";
import macaco4 from "/assets/macacos/macaco-enojado4.gif";
import macaco5 from "/assets/macacos/macaco-enojado5.gif";
import macaco6 from "/assets/macacos/macaco-enojado6.gif";
import macaco7 from "/assets/macacos/macaco-enojado7.gif";
import macaco8 from "/assets/macacos/macaco-enojado8.gif";

const images = [
  macaco1, macaco2, macaco3, macaco4, macaco5, macaco6, macaco7, macaco8
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

const TitlePage: React.FC = () => {
  const navigate = useNavigate();
  const [showYesImage, setShowYesImage] = useState(false);
  const [noImages, setNoImages] = useState<{ src: string; position: { top: string; left: string } }[]>([]);

  const handleYesClick = () => {
    setShowYesImage(true);
  };

  const handleNoClick = () => {
    let newPosition;
    let isValidPosition = false;

    while (!isValidPosition) {
      newPosition = {
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      };

      const noButtonRect = { top: 50, left: 50, width: 25, height: 25 }; // Approximate "No" button position and size
      const yesButtonRect = { top: 50, left: 50, width: 25, height: 25 }; // Approximate "Yes" button position and size

      const newImageRect = {
        top: parseFloat(newPosition.top),
        left: parseFloat(newPosition.left),
        width: 10,
        height: 10,
      };

      const isNotNearNoButton = !(
        newImageRect.left < noButtonRect.left + noButtonRect.width &&
        newImageRect.left + newImageRect.width > noButtonRect.left &&
        newImageRect.top < noButtonRect.top + noButtonRect.height &&
        newImageRect.top + newImageRect.height > noButtonRect.top
      );

      const isNotNearYesButton = !(
        newImageRect.left < yesButtonRect.left + yesButtonRect.width &&
        newImageRect.left + newImageRect.width > yesButtonRect.left &&
        newImageRect.top < yesButtonRect.top + yesButtonRect.height &&
        newImageRect.top + newImageRect.height > yesButtonRect.top
      );

      isValidPosition = isNotNearNoButton && isNotNearYesButton;
    }

    const newImage = {
      src: getRandomImage(),
      position: newPosition,
    };

    setNoImages([...noImages, newImage]);
  };

  const handleGoToNextPage = () => {
    navigate("/next-page");
  };

  return (
    <div className="h-full w-full relative">
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="text-center text-2xl md:text-6xl lg:text-8xl mb-8">
          <BlurText
            text="Do you want to be my valentine?"
            delay={150}
            animateBy="letters"
            direction="top"
            className="text-2xl md:text-6xl lg:text-8xl mb-8"
          />
        </div>
        <div className="flex justify-center gap-4 relative z-10">
          <button
            className="mt-4 bg-black text-white py-2 px-4 md:py-4 md:px-8 text-xl md:text-2xl rounded-lg cursor-pointer shiny-background border-gray-600 border-2 transition duration-300 ease-in-out transform hover:bg-rose-800 hover:scale-105 active:bg-rose-800 active:scale-105"
            onClick={handleGoToNextPage}
          >
            <ShinyText
              text="Yes"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </button>
          <button
            className="mt-4 bg-black text-white py-2 px-4 md:py-4 md:px-8 text-xl md:text-2xl rounded-lg cursor-pointer shiny-background border-gray-600 border-2 transition duration-300 ease-in-out transform hover:bg-rose-800 hover:scale-105 active:bg-rose-800 active:scale-105"
            onClick={handleNoClick}
          >
            <ShinyText
              text="No"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </button>
        </div>
        {noImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="No"
            className="w-32 h-32 rounded-lg absolute z-0"
            style={{ top: image.position.top, left: image.position.left }}
          />
        ))}
      </div>
      <div className="w-full" style={{ height: "50vh", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  );
};

export default TitlePage;
