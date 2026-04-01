import { useEffect, useState } from "react";
import "../App.css";

function Countdown({ onComplete }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="countdown-container">
      <h1 className="count">{count}</h1>
      <p>Get ready 🎉</p>
    </div>
  );
}

export default Countdown;