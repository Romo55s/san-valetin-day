import "./App.css";
import Stack from "./components/Stack";
import TextPressure from "./components/TextPressure";
import Aurora from "./components/Aurora";

function App() {
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

  return (
    <>
      <div className="aurora-background">
        <Aurora colorStops={["#FF1493", "#FF69B4", "#FFC0CB"]} speed={0.5} />
      </div>
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
          <div className="flex justify-center items-center relative">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 300, height: 300 }}
              cardsData={images}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
