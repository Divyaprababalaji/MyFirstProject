import { useEffect, useState } from "react";
import "./TodosList.css";
import Todosdata from "./Todosdata.json";
import { blue, red } from "@mui/material/colors";

function TodosList() {
  const [color, setColor] = useState();
  useEffect(() => {}, [color]);

  const handlechangecolor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <div className="boxcontainer" style={{background:color}}></div>
      <div className="textboxcontainer" onChange={handlechangecolor} >
        <input type="text" value={color} ></input>
      </div>

      <div className="Todoscontainer">
        <h2>TodosList</h2>
        {Todosdata.todos.map((e) => (
          <div>
            <div className="TodosDivList">
              <div style={{ fontWeight: 900 }}>{e.todo}</div>
              <div
                style={{
                  backgroundColor: e.completed ? "green" : "red",
                  color: "white",
                  padding: 8,
                  display: "flex",
                  alignSelf: "self-end",
                  borderRadius: 12,
                }}
              >
                {e.completed ? "Completed" : "Not Completed"}
              </div>
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-end",
                  fontStyle: "italic",
                }}
              >
                User ID: {e.userId}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TodosList;
