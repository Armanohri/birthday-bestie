import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "../App.css";

// 👉 IMPORT MULTIPLE PHOTOS
import p1 from "../assets/hero.jpeg";
import p2 from "../assets/hero2.png";
import p3 from "../assets/hero3.png";

function Ending() {
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 80
    });

    // show photos after slight delay
    setTimeout(() => setShowPhotos(true), 1000);
  }, []);

  return (
    <div className="ending-container">

      <h1>Happy Birthday 💙</h1>

      <p className="ending-text">
        jokes apart… tu bohot important hai 💙  
        aur main hamesha rahunga 😌  
      </p>

      {/* 📸 PHOTO GALLERY */}
      {showPhotos && (
        <div className="photo-grid">
          <img src={p1} className="ending-photo" />
          <img src={p2} className="ending-photo" />
          <img src={p3} className="ending-photo" />
        </div>
      )}

      <h3 className="signature">
        – HAPPY BIRTHDAY AGAIN SUAR😌
      </h3>

    </div>
  );
}

export default Ending;