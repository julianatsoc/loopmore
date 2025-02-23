import AudioPlayer from "./AudioPlayer";
import TypingNoise from "../assets/audios/typing-noise.mp3";
import BrownNoise from "../assets/audios/brown-noise.ogg";
import CafeNoise from "../assets/audios/cafe-noise.mp3";
import RainNoise from "../assets/audios/rain-noise.mp3";

export default function AvailableAudios() {
  return (
    <>
      <AudioPlayer audioUrl={TypingNoise} audioTitle="Typing Noise" />
      <AudioPlayer audioUrl={BrownNoise} audioTitle="Brown Noise" />
      <AudioPlayer audioUrl={CafeNoise} audioTitle="Cafe Ambience" />
      <AudioPlayer audioUrl={RainNoise} audioTitle="Rain Noise" />
    </>
  );
}
