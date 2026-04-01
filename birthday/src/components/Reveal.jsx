import { useEffect, useState } from "react";
import "../App.css";

function Reveal({ goNext }) {
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");

  // ✅ FIX: generate hearts once
  const [hearts] = useState(() =>
    [...Array(15)].map(() => ({
      left: Math.random() * 100,
      duration: 6 + Math.random() * 6
    }))
  );

  const fullText =
    "of course you remember... you remember everything about us !(agr nhi ptaa tohh guuu khaale) 💙";

  useEffect(() => {
    setTimeout(() => setStep(1), 500);
    setTimeout(() => setStep(2), 2500);
  }, []);

  // typing effect
  useEffect(() => {
    if (step === 2) {
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 40);

      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="reveal-container">

      {/* 💗 FIXED HEARTS */}
      {hearts.map((h, i) => (
        <div
          key={i}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            animationDuration: `${h.duration}s`
          }}
        >
          💗
        </div>
      ))}

      <div className="glass-box">
        {step >= 1 && (
          <h1 className="fade-text">
            I knew you'd get it 😌💙
          </h1>
        )}

        {step >= 2 && (
          <p className="typing-text">{text}</p>
        )}

        {step >= 2 && text.length === fullText.length && (
          <button className="gift-btn" onClick={goNext}>
            🎁 Open Gift
          </button>
        )}
      </div>
    </div>
  );
}

export default Reveal;