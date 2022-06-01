import React from "react";
import TextShow from "../TextShow/TextShow";
import Lighter from "../Lighter/Lighter";

import "./Output.css";

const OutputContainer = ({ children = "Hello World!", time = 500, lighter = false }) => {
  return (
    <p className="light-background">
      <TextShow text={children} time={time} />
      {lighter && <Lighter />}
    </p>
  );
};

export default OutputContainer;
