import { useEffect, useState } from "react";

function AgeName() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [errormsg, setErrormsg] = useState(false);
  useEffect(() => {}, [name, age, errormsg]);

  const NameChange = (e) => {
    setName(e.target.value);
  };
  const AgeChange = (e) => {
    if (isNaN(e.target.value)) {
      setErrormsg(true);
    } else {
      setErrormsg(false);
      setAge(e.target.value);
    }
  };
  return (
    <>
      <label>Enter your Name: </label>
      <input type="text" label="Name" onChange={NameChange}></input>
      <br />

      {name && (
        <div>
          <label>Enter your Age: </label>
          <input type="text" label="Age" onChange={AgeChange}></input>
          {errormsg && <p>You type only in numbers</p>}
        </div>
      )}
      {name && age && (
        <p>
          Your Name is{" "}
          <span style={{ color: "green", fontSize: 20 }}>{name}</span> and your
          age is <span style={{ color: "blue", fontSize: 20 }}>{age}</span>
        </p>
      )}
    </>
  );
}
export default AgeName;
