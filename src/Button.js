import { useState } from "react";

function Button() {
  const [Value, setValue] = useState({
    one: " ",
  });

  const updateValue = () => {
   
      setValue((previousState) =>
      {
          return { ...previousState, one: "X" }
      })
      
  };

  return (
    <button
      onClick={updateValue}
      className="text-[100px] text-lime-300 h-full w-full"
    >
      {Value.one}
    </button>
  );
}

export default Button;
