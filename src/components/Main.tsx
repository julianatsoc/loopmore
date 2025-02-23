import videoBg from "../assets/video/background-video.mp4";
import AvailableAudios from "./AvailableAudios";
import Header from "./Header";
import "./Main.module.css";

const Main = () => {
  return (
    <div className="relative w-screen min-h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <video
        className="fixed top-0 left-0 w-screen h-screen object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
        <div className="flex flex-col gap-4 items-center justify-center bg-glass shadow-glass rounded-lg w-full max-w-lg sm:max-w-2xl h-auto border-glass backdrop-blur-[15px] px-6 py-6 sm:p-12">
          <Header />
          <AvailableAudios />

          <iframe
            src="https://open.spotify.com/embed/album/6AORtDjduMM3bupSWzbTSG?utm_source=generator"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Main;
