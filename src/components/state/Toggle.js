//stateless functional component: component nhung khong su dung state
//statefull functional component: component nhung co su dung state

//1. enabling state
//2. initialize state
//3. reading state
//4. update state

import React, { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [spinner, setSpinner] = useState(false);
  console.log(spinner);

  return (
    <div
      className={`toggle ${spinner ? "active" : ""}`}
      onClick={() => setSpinner(!spinner)}
    >
      <div className={`spinner ${spinner ? "active" : ""}`}></div>
    </div>
  );
};

export default Toggle;
