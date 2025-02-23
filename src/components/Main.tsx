import videoBg from "../assets/background-video.mp4";
import VideoForm from "./VideoForm";

const Main = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-4/5">
        <VideoForm />
      </div>
    </div>
  );
};

export default Main;
