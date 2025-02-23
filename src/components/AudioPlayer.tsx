import { useRef, useState, ChangeEvent } from "react";
import { Switch } from "@headlessui/react";

interface AudioPlayerProps {
  audioUrl: string;
  audioTitle: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, audioTitle }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioUrl));
  const [enabled, setEnabled] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.4);

  const handleSwitchChange = (state: boolean) => {
    setEnabled(state);
    const audio = audioRef.current;
    if (state) {
      audio.loop = true;
      audio.volume = volume;
      audio.play();
    } else {
      audio.pause();
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    const audio = audioRef.current;
    audio.volume = newVolume;
  };

  return (
    <div className="flex text-white justify-center items-center align-text-top gap-2">
      <span className="font-bold">{audioTitle}</span>
      <Switch
        checked={enabled}
        onChange={handleSwitchChange}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/20 backdrop-blur-lg p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/20"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>

      {enabled && (
        <div className="flex items-center space-y-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-32 h-2 bg-[#DE7738] rounded-lg appearance-none cursor-pointer transition-all backdrop-blur-lg"
            style={{
              background: `linear-gradient(to right, #ECB72C ${
                volume * 100
              }%, #444444 ${volume * 100}%)`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
