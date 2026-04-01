import { useState } from "react";
import "../App.css";

function Contract({ goNext }) {
  const [rejected, setRejected] = useState(false);

  return (
    <div className="contract-container">

      <h1>Friendship Contract 📜</h1>

      <ul>
        <li>Tu hamesha meri bestfriend rahegi 💙</li>
        <li>Bina reason ladna allowed hai 😤</li>
        <li>Late reply pe daant milegi 😡</li>
        <li>Cake share karna compulsory hai 🎂😂</li>
      </ul>

      {/* BUTTONS */}
      <div className="contract-buttons">
        <button className="yes-btn" onClick={goNext}>
          Yes 😌
        </button>

        <button
  className="no-btn"
  onMouseEnter={(e) => {
    e.target.style.position = "absolute";
    e.target.style.top = Math.random() * 80 + "%";
    e.target.style.left = Math.random() * 80 + "%";
  }}
>
  No 😏
</button>
      </div>

      {/* FUNNY MESSAGE */}
      {rejected && (
        <p className="warning-text">
          zyada na bann 😤 contract pe YES kar aur aage badh 😂
        </p>
      )}

    </div>
  );
}

export default Contract;