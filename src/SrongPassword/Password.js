import React, { useState } from "react";
import "./Password.css";

function Password() {
const [length,setLength] = useState(8);
const [upper,setUpper] = useState(true);
const [lower,setLower] = useState(true);
const [number,setNumber] = useState(true);
const [symbol,setSymbol] = useState(true);
const [Password,setPassword] = useState();



const handleGeneratePassword = (()=>{
    let charset = "";
    if (upper) charset +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) charset +="abcdefghijklmnopqrstuvwxyz";
    if (number) charset +="0123456789";
    if (symbol) charset +="!@#$%^&*()_+-=";

    let genertePassword ="";
    for ( let i=0; i<length; i++) {
        const randomIndex = Math.floor(Math.random()* charset.length);
        genertePassword += charset[randomIndex]
    }
    setPassword(genertePassword);
});
const copyToClipboard =(()=>{
    window.navigator.clipboard.writeText(Password);
    alert("Password Copied");
})



  return (
    <div className="box">
      <h3> Strong Password Generator</h3>
      <div>
        <label className="pwdlbl" htmlfor="pwdlbl">
          Password Length:
        </label>
        <input htmlfor="Pwdinput" type="number" className="pwdinput" value={length} onChange={((e)=>{setLength(parseInt(e.target.value))})}></input>
      </div>
      <div className="selectbox">
        <div>
          <input type="checkbox" id="upper" checked={upper} onChange={((e)=>{setUpper(e.target.checked)})} />
          <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div>
          <input type="checkbox" id="lower" checked={lower} onChange={((e)=>{setLower(e.target.checked)})} />
          <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div>
          <input type="checkbox" id="number" checked={number} onChange={((e)=>{setNumber(e.target.checked)})} />
          <label htmlFor="number">Include Numbers</label>
        </div>
        <div>
          <input type="checkbox" id="symbol" checked={symbol} onChange={((e)=>{setSymbol(e.target.checked)})}/>
          <label htmlFor="symbol">Include Symbol</label>
        </div>
      </div>
      <div>
        <button className="Generatebtn" onClick={handleGeneratePassword} >Generate Password</button>
      </div>
      <div style={{ display: "flex", height: "45px" }}>
        <input style={{ width: "100%" }} value={Password}></input>
        <button className="copybtn" onClick={copyToClipboard}>Copy</button>
      </div>
    </div>
  );
}

export default Password;
