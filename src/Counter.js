import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {}, [counter]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
    const handleDecrement = () => {
    if (counter > 10) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <button onClick={handleIncrement}>Increment </button>
      <input type="text" value={counter}></input>

      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
export default Counter;
