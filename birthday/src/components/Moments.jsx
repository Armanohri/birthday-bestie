import "../App.css";

function Moments({ goNext }) {
  const moments = [
    "yaad hai jab tu bina reason gussa ho gayi thi 😤😂",
    "aur fir khud hi 5 min baad normal bhi ho gayi 💀",
    "aur jab humne random bakchodi ki thi 🤡",
    "honestly… hum dono thode pagal hain 😌"
  ];

  return (
    <div className="moments-container">
      <h1>Our Dumb Moments 😂</h1>

      {moments.map((m, i) => (
        <p key={i} className="moment">{m}</p>
      ))}

      <button className="next-btn" onClick={goNext}>
        Continue 😌
      </button>
    </div>
  );
}

export default Moments;