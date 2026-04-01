import { useState, useEffect, useRef } from "react";
import LockScreen from "./components/Lockscreen";
import Reveal from "./components/Reveal";
import Countdown from "./components/Countdown";
import Envelope from "./components/Envelope";
import Cake from "./components/Cake";

import Moments from "./components/Moments";
import Contract from "./components/Contract";
import Ending from "./components/Ending";

function App() {
  const [stage, setStage] = useState("lock");

  // 🎧 AUDIO REF
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/happy.mp3"); // file in public folder
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    // ▶️ play after first click (browser restriction fix)
    const startMusic = () => {
      audioRef.current.play();

      // 🎵 smooth fade-in
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.3) {
          vol += 0.02;
          audioRef.current.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);

      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);
  }, []);

  return (
    <>
      {stage === "lock" && (
        <LockScreen setUnlocked={() => setStage("reveal")} />
      )}

      {stage === "reveal" && (
        <Reveal goNext={() => setStage("countdown")} />
      )}

      {stage === "countdown" && (
        <Countdown onComplete={() => setStage("envelope")} />
      )}

      {stage === "envelope" && (
        <Envelope onOpen={() => setStage("cake")} />
      )}

      {/* 🎂 CAKE */}
      {stage === "cake" && (
        <Cake onNext={() => setStage("moments")} />
      )}

      {/* 😂 MOMENTS */}
      {stage === "moments" && (
        <Moments goNext={() => setStage("contract")} />
      )}

      {/* 📜 CONTRACT */}
      {stage === "contract" && (
        <Contract goNext={() => setStage("ending")} />
      )}

      {/* 💙 ENDING */}
      {stage === "ending" && <Ending />}
    </>
  );
}

export default App;