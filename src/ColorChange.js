import { useEffect, useState } from "react";

function ColorChange() {
  const [colorcode, setColorcode] = useState("green");
  useEffect(()=>{

  },[colorcode])
  const handleColorCodeChange = (e) => {
    setColorcode(e.target.value);
  };

  return (
    <div className="colorchange">
      <div style={{ display: "flex", height: 40 }}>
        <input type="text" onChange={handleColorCodeChange}></input>
      </div>
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: colorcode,
          marginTop: 20,
        }}
      ></div>
    </div>
  );
}
export default ColorChange;
