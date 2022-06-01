import React, { useRef, useState, useEffect } from "react";

const TextShow = ({ text, time }) => {
  const [showTextLength, setShowTextLength] = useState(0);

  useEffect(() => {
    setShowTextLength(0);
  }, [text]);

  useEffect(() => {
    let count = 1;
    let max = 0;
    let interval = setInterval(() => {
      max += count;
      setShowTextLength(max);
      if (max === text.length + 1 || max === 0) count = -count;
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [time, text]);

  return (
    <>
      <span className="">{text && [...text].slice(0, showTextLength).join("")}</span>
    </>
  );
};

export default TextShow;
