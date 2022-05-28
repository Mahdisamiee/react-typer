import React from "react";
import TextShow from "../TextShow/TextShow";
import Lighter from "../Lighter/Lighter";

import "./Output.css";

const OutputContainer = () => {
  return (
    <p className="light-background">
      <TextShow text="mahdi samieenia is here! " time={200} />
      <Lighter />
    </p>
  );
};

export default OutputContainer;
