import { useState } from "react";
import YouTube from "react-youtube";
import LoopMoreLogo from "../assets/LoopMoreLogo.svg";

const VideoForm = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [videoId, setVideoId] = useState<string | null>(null);

  const handleLoadVideo = () => {
    const id = extractVideoId(inputUrl);
    setVideoId(id);
  };

  const extractVideoId = (url: string) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v");
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center bg-glass shadow-glass rounded-lg w-[600px] h-[800px] border-glass backdrop-blur-[5px]">
      <div>
        <img src={LoopMoreLogo} alt="LoopMore Logo" className="w-24 h-24" />
        <h2 className="font-cedarville">LoopMore</h2>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <input
          type="text"
          required
          placeholder="Cole a URL do YouTube aqui"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        />
        <button
          onClick={handleLoadVideo}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Carregar Vídeo
        </button>
      </div>

      {videoId && (
        <div className="mt-4 w-full">
          <YouTube videoId={videoId} opts={{ width: "100%", height: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default VideoForm;
