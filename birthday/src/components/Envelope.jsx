import { useState } from "react";
import "../App.css";

function Envelope({ onOpen }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
    setTimeout(onOpen, 1200);
  }

  return (
    <div className="envelope-container" onClick={handleOpen}>
      <div className={`envelope ${open ? "open" : ""}`}>
        <div className="flap"></div>
        <div className="letter">💌 Tap to Open</div>
      </div>
    </div>
  );
}

export default Envelope;