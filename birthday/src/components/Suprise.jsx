import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "../App.css";
import photo from "../assets/hero.jpeg";

function Surprise() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showFunny, setShowFunny] = useState(false);

  useEffect(() => {
    // 🎆 Confetti burst
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });

    // 🎧 music
    const audio = new Audio("/birthday.mp3");
    audio.volume = 0.6;
    audio.play();

    // ⏱️ staged reveal
    setTimeout(() => setShowPhoto(true), 1500);
    setTimeout(() => setShowMessage(true), 3000);
    setTimeout(() => setShowFunny(true), 5000);
  }, []);

  return (
    <div className="surprise-container">

      {/* 💗 Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        >
          ❤️
        </div>
      ))}

      {/* 🎉 TITLE */}
      <h1 className="birthday-text">
        Happy Birthday ❤️
      </h1>

      {/* 📸 PHOTO */}
      {showPhoto && (
        <img src={photo} className="hero-photo" />
      )}

      {/* 💌 MESSAGE */}
      {showMessage && (
        <p className="love-message">
          You make everything feel special…  
          and honestly, I’m just lucky to have you 💙  
          I hope this little surprise made you smile 😊
        </p>
      )}

      {/* 😂 FUNNY LINE */}
      {showFunny && (
        <p className="funny-line">
          okay but seriously… cake share karna padega 😤🎂
        </p>
      )}

    </div>
  );
}

export default Surprise;