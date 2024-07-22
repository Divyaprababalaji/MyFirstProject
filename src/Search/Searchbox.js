import React, { useEffect, useState } from "react";
import "./Searchbox.css";
import Questiondata from "../Quizs/Question.json";

function Searchbox() {
  const [inputText, setInputText] = useState("");
  const [searchData, setSearchData] = useState(Questiondata);

  const handleSearchInput = (e) => {
    setInputText(e.target.value);
    let userTypedValue = e.target.value;

    if (userTypedValue !== "") {
      let filterData = Questiondata.filter((data) => {
        return data?.question?.toLowerCase().includes(userTypedValue?.toLowerCase());
      });
      setSearchData(filterData);
    } else {
      setSearchData(Questiondata);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="inputbox"
        placeholder="Search text"
        onChange={handleSearchInput}
        value={inputText}
      ></input>
      {/* {searchData?.map((Questiondata,index)=>{
return  <div className="questionsec" key={index}>{Questiondata?.question}</div>;
      })} */}
      {searchData?.map((e,index) => {
        return <div key={index} className="questionsec">{e.question}</div>;
      })}
    </div>
  );
}

export default Searchbox;
