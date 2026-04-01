import { useState } from "react";
import "../App.css";
import photo from "../assets/hero.jpeg";
import teddy from "../assets/teddy.png";

function LockScreen({ setUnlocked }) {
  const [code, setCode] = useState("");

  const correctCode = "2201";

  function handleClick(num) {
    if (code.length < 4) {
      setCode(code + num);
    }
  }

  function checkCode() {
    if (code === correctCode) {
      setUnlocked(true);
    } else {
      alert("Wrong code 😢");
      setCode("");
    }
  }

  return (
    <div className="lock-container">

      {/* 🌸 FLOWERS */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="flower"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            fontSize: `${15 + Math.random() * 15}px`
          }}
        >
          🌹
        </div>
      ))}

      <h1 className="title">
       It's your day..but first prove it's really you! ❤️
      </h1>

      {/* 🔥 MAIN SIDE-BY-SIDE LAYOUT */}
      <div className="main-container">

        {/* LEFT (PHOTO + TEDDY) */}
        <div className="left">
          <img src={photo} className="photo" />
          <img src={teddy} className="teddy-left" />
        </div>

        {/* RIGHT (CODE + KEYPAD) */}
        <div className="right">

          <div className="code-box">
            {[0,1,2,3].map((i) => (
              <div key={i} className="digit">
                {code[i] ? "•" : ""}
              </div>
            ))}
          </div>

          <div className="keypad">
            {[1,2,3,4,5,6,7,8,9].map((n) => (
              <button key={n} onClick={() => handleClick(n)}>
                {n}
              </button>
            ))}

            <button onClick={() => setCode("")}>C</button>
            <button onClick={() => handleClick(0)}>0</button>
            <button onClick={checkCode}>✔</button>
          </div>

          <p className="hint">
            hint: Abe pehle yeh bta mera birthday kb aata hai..date/month 💭
          </p>

        </div>

      </div>

    </div>
  );
}

export default LockScreen;