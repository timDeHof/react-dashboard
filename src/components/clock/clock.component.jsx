import React, { useState, useEffect } from "react";
import "./clock.styles.css";
const Clock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-us", {
          timeStyle: "short",
        })
      );
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className='time'>{time}</h1>
    </div>
  );
};

export default Clock;
