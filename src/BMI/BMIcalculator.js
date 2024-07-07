import React, { useState } from "react";
import "../BMI/BMIcalculator.css";

function BMIcalculator() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmistatus] = useState();
  const [errormsg, setErrormsg] = useState();

  function handleBmicalculate() {
    if (height && weight ) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmistatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.99) {
        setBmistatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.99) {
        setBmistatus("Over Weight");
      } else if (bmiValue >=30) {
        setBmistatus("Obesity");
      }
    } else {
      setBmi(null);
      setBmistatus("");
      setErrormsg("Please enter Numeric value of height and weight");
    }
  }
  const handleClearAll = () => {
    setBmi(null);
    setBmistatus("");
    setHeight("");
    setWeight("");
    setErrormsg("Please enter Numeric value of height and weight");
  };

  return (
    <div className="BMIcontainer">
      <div className="heightdata">
        <h3 style={{ color: "deepskyblue" }}>BMI CALCULATOR</h3>

        <p className="error">{errormsg}</p>
        <label>Height in (cm): </label>
        <input
          htmlfor="Height" type="number"
          className="heightinput"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        ></input>
      </div>
      <div className="weightdata">
        <label>Weight in (kg): </label>
        <input
          htmlfor="Weight" type="number"
          className="weightinput"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        ></input>
      </div>
      <div className="btn">
        <button className="calculatebtn" onClick={handleBmicalculate}>
          Calculate BMI
        </button>
        <button className="clrbtn" onClick={handleClearAll}>
          Clear
        </button>
      </div>
      {bmi !== null && (
        <div className="result">
          <p style={{ color: "deepskyblue" }}>Your BMI is : {bmi}</p>
          <p>BMI Status : {bmistatus}</p>
        </div>
      )}
    </div>
  );
}

export default BMIcalculator;
