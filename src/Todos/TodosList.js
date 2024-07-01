import { useEffect, useState } from "react";
import "./TodosList.css";
// import Todosdata from "./Todosdata.json";
import { blue, red } from "@mui/material/colors";
import Userid from "./Userid";
import Completed from "./Completed";
import Todocomponent from "./Todocomponent";

function TodosList() {
  //  var inputbox =document.getElementById("inputbox");
  // var result = document.getElementById("result");

  const [todosdata, setTodosdata] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos/")
      .then((res) => res.json())
      .then((todosdata) => {
        console.log(todosdata);
        setTodosdata(todosdata);
      })
      .catch((err) => console.log(err));
  }, []);

  const [color, setColor] = useState();
  useEffect(() => {}, [color]);

  const handlechangecolor = (e) => {
    setColor(e.target.value);
  };
  const [inputbox, setInputbox] = useState([]);

  const handlechangeinput = (e) => {
    setInputbox(e.target.value);
  };

  return (
    <div>
      <div className="boxcontainer" style={{ background: color }}></div>
      <div className="textboxcontainer" onChange={handlechangecolor}>
        <input type="text" value={color}></input>
      </div>

      <div className="Todoscontainer">
        <h2>TodosList</h2>
        {todosdata?.todos?.map((e) => (
          <div>
            <div className="TodosDivList">
              {/* <div style={{ fontWeight: 900 }}>{e.todo}</div> */}
              <Todocomponent Todosdes={e}></Todocomponent>
              <Completed Todosdata={e}></Completed>
              <Userid userid={e}></Userid>
            </div>
          </div>
        ))}
      </div>
      <div>
        <input id="inputbox" value={inputbox} onChange={handlechangeinput}></input>
        {/* <button onClick={update}>btn</button> */}
        <h1 id="result">{inputbox}</h1>
      </div>
    </div>
  );
}
export default TodosList;
