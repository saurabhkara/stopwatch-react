import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const setIntervalRef = useRef(null);

  useEffect(() => {
    if (start) {
      onStart();
    } else {
      clearInterval(setIntervalRef.current);
    }
    return () => {
      clearInterval(setIntervalRef.current);
    };
  }, [start]);

  function onStart() {
    setIntervalRef.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 10);
  }

  const handleOnStart = () => {
    setStart(true);
  };

  const handleOnStop = () => {
    setStart(false);
  };

  return (
    <div className="App">
      <p>{timer}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "blue",
          width: 100,
        }}
      >
        <button onClick={handleOnStart}> start</button>
        <button onClick={handleOnStop}> stop</button>
      </div>
    </div>
  );
}

export default App;
