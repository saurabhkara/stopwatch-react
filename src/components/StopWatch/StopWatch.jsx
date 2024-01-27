import React, { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import ControlButton from "../ControlButton/ControlButton";
import "./StopWatch.css";

export default function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = null;

    if (isActive && isPause === false) {
      timer = setInterval(() => {
        setTime((preTime) => preTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isActive, isPause]);

  const handleStart = () => {
    setIsPause(false);
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  console.log(time);

  const handlePauseResume = () => {
    setIsPause(!isPause);
  };

  console.log(time);
  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButton
        active={isActive}
        isPaused={isPause}
        handleStart={handleStart}
        handleReset={handleReset}
        handlePauseResume={handlePauseResume}
      />
    </div>
  );
}
