import React, { useRef, useState, useEffect } from "react";

const TextShow = ({ text, time }) => {
  const [showTextLength, setShowTextLength] = useState(0);

  useEffect(() => {
    setShowTextLength(0);
  }, [text]);

  useEffect(() => {
    let interval = setInterval(() => {
      setShowTextLength((c) => c + 1);
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <>
      <span className="">{text && [...text].slice(0, showTextLength).join("")}</span>
    </>
  );
};

export default TextShow;
