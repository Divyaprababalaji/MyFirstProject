import React, { useEffect, useState } from "react";
import "../Currency/Currency.css";
import axios from "axios";

function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromcurrency, setFromcurrency] = useState("USD");
  const [tocurrency, setTocurrency] = useState("INR");
  const [convertedamount, setConvertedamount] = useState(null);
  const [exchangerate, setExchangerate] = useState(null)

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;
        const response = await axios.get(url);
        // console.log(response);
        setExchangerate(response.data.rates[tocurrency]);
      } catch (error) {
        console.error("Error Fetching Exchange Rate:", error);
      }
    };
getExchangeRate();
  },[fromcurrency,tocurrency]);

  useEffect(()=>{
    if (exchangerate !==null){
 setConvertedamount((amount * exchangerate).toFixed(2));

}},[amount,exchangerate]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromcurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setTocurrency(e.target.value);
  };

  return (
    <div className="appcontainer">
      <div className="box">
        <div className="data">
          <h1>Currency Converter</h1>
        </div>
        <div className="input-container">
          <label>Amount: </label>
          <input
            htmlfor="Amtinput"
            style={{
              height: "40px",
              padding: "10px",
              borderRadius: "4px",
              fontSize: "15px",
            }}
            value={amount}
            onChange={handleAmountChange}
          ></input>
        </div>
        <div className="input-container">
          <label htmlfor="FrmCurr">From Currency: </label>
          <select
            style={{
              height: "40px",
              padding: "10px",
              borderRadius: "4px",
              fontSize: "15px",
            }}
            value={fromcurrency}
            onChange={handleFromCurrencyChange}
          >
            <option value="USD"> USD - United States Dollar</option>
            <option value="EUR"> EUR - Euro</option>
            <option value="GBP"> GBP - British Pound Sterilings</option>
            <option value="JPY"> JPY - Japanese Yen</option>
            <option value="AUD"> AUD - Australian Dollar</option>
            <option value="CAD"> CAD - Canadian Dollar</option>
            <option value="CNY"> CNY - Chinese Yuan</option>
            <option value="INR"> INR - Indian Rupee</option>
            <option value="BRL"> BRL - Brazilian Real</option>
            <option value="ZAR"> ZAR - South African Rand</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlfor="ToCurr">To Currency: </label>
          <select
            style={{
              height: "40px",
              padding: "10px",
              borderRadius: "4px",
              fontSize: "15px",
            }}
            value={tocurrency}
            onChange={handleToCurrencyChange}
          >
            <option value="USD"> USD - United States Dollar</option>
            <option value="EUR"> EUR - Euro</option>
            <option value="GBP"> GBP - British Pound Sterilings</option>
            <option value="JPY"> JPY - Japanese Yen</option>
            <option value="AUD"> AUD - Australian Dollar</option>
            <option value="CAD"> CAD - Canadian Dollar</option>
            <option value="CNY"> CNY - Chinese Yuan</option>
            <option value="INR"> INR - Indian Rupee</option>
            <option value="BRL"> BRL - Brazilian Real</option>
            <option value="ZAR"> ZAR - South African Rand</option>
          </select>
        </div>
        <div className="result">
          <p>
            {amount} {fromcurrency} is equal to {convertedamount} {tocurrency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Currency;
