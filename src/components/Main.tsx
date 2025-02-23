import videoBg from "../assets/video/background-video.mp4";
import AvailableAudios from "./AvailableAudios";
import Header from "./Header";
import "./Main.module.css";

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
