import videoBg from "../assets/background-video.mp4";
import Header from "./Header";
import AudioPlayer from "./AudioPlayer";
import TypingNoise from "../assets/keyboard.mp3";
import BrownNoise from "../assets/brown-noise.ogg";
import CafeNoise from "../assets/cafe-noise.mp3";
import RainNoise from "../assets/rain.mp3";

const Main = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover repeat"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-4/5 ">
        <div
          className="mt-35 flex gap-4 flex-col items-center justify-center bg-glass shadow-glass rounded-lg w-2xl
 h-auto border-glass backdrop-blur-[15px] p-12"
        >
          <Header />
          <AudioPlayer audioUrl={TypingNoise} audioTitle="Typing Noise" />
          <AudioPlayer audioUrl={BrownNoise} audioTitle="Brown Noise" />
          <AudioPlayer audioUrl={CafeNoise} audioTitle="Cafe Ambience" />
          <AudioPlayer audioUrl={RainNoise} audioTitle="Rain Noise" />

          <iframe
            src="https://open.spotify.com/embed/album/6AORtDjduMM3bupSWzbTSG?utm_source=generator"
            width="100%"
            height="152"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 8px;
          background: #444444;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          background-color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          cursor: pointer;
          border: 2px solid #ecb72c;
        }

        input[type="range"]::-moz-range-thumb {
          background-color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          cursor: pointer;
          border: 2px solid #ecb72c;
        }
      `}</style>
    </div>
  );
};

export default Main;
