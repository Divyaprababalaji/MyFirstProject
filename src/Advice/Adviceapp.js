import "../Advice/Adviceapp.css";

import React, { useEffect, useState } from "react";

function Adviceapp() {
  const [advice, setAdvice] = useState("Please Click Button to Get Advice");
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  function handlebtnchange() {
    fetch("https://api.adviceslip.com/aadvice")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setAdvice(json.slip.advice);
        setCount((count) => count + 1);
      })
      .catch((error) => {
        console.error(error);
        alert(error) ;
        setCount(0);
      });
  }

  return (
    <div className="advicecontainer">
      <h3 className="advicebox"> {advice}</h3>
      <button className="advicebtn" onClick={handlebtnchange}>
        Get Advice
      </button>
      <p>
        You have read{" "}
        <b style={{ color: "black", backgroundColor: "white" }}>{count}</b>{" "}
        Pieces of advice
      </p>
    </div>
  );
}

export default Adviceapp;
