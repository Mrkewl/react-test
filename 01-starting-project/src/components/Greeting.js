import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setchangedText] = useState();
  const changeTextHandler = () => {
    setchangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}

      <button onClick={changeTextHandler}></button>
    </div>
  );
};

export default Greeting;
