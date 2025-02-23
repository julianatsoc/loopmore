import videoBg from "../assets/background-video.mp4";
import Header from "./Header";
import AudioPlayer from "./AudioPlayer";
import TypingNoise from "../assets/keyboard.mp3";
import BrownNoise from "../assets/brown-noise.ogg";

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
          className="mt-16 flex gap-4 flex-col items-center justify-center bg-glass shadow-glass rounded-lg w-2xl
 h-auto border-glass backdrop-blur-[10px] p-12"
        >
          <Header />
          <AudioPlayer audioUrl={TypingNoise} audioTitle="Typing Noise" />
          <AudioPlayer audioUrl={BrownNoise} audioTitle="Brown Noise" />
        </div>
      </div>
    </div>
  );
};

export default Main;
