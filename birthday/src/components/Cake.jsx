import { useState } from "react";
import "../App.css";

function Cake({ onNext }) {   // ✅ MUST HAVE onNext here
  const [blown, setBlown] = useState(false);

  return (
    <div className="cake-container">

      <div className="cake">
        🎂
        {!blown && (
          <div className="candle" onClick={() => setBlown(true)}>
            🕯️
          </div>
        )}
      </div>

      {!blown ? (
        <p>Make a wish… and blow the candle 🥺</p>
      ) : (
        <>
          <p>Yayyyy 🎉 wish complete 💙</p>

          {/* ✅ BUTTON MUST CALL onNext */}
          <button
            className="next-btn"
            onClick={() => {
              console.log("Next clicked"); // debug
              onNext && onNext();
            }}
          >
            Continue 🎉
          </button>
        </>
      )}

    </div>
  );
}

export default Cake;