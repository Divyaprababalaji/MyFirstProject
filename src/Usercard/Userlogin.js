import { useState } from "react";
import "../Usercard/Userlogin.css";
import { useNavigate } from "react-router-dom";

function Userlogin() {
  const navigate = useNavigate();
  const [name, setName] = useState();

  const handlenamechange = (e) => {
    setName(e.target.value);
  };

  const handlelogin =(e) => {
    e.preventDefault();
    console.log(e);
    
    navigate("/usercard");
  }

  return (
    <div className="formcontainer">
      <form onSubmit={handlelogin}>
        <div
          value={name}
          style={{ marginTop: "20px", marginBottom: "20px" }}
          onChange={handlenamechange}
        >
          <label>UserName: </label>
          <input name="username" type="text" placeholder="Enter your name" />
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <label>City: </label>
          <input name="city" type="text" placeholder="Enter city" />
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <button
          
            type="setName"
            style={{ marginRight: "20px", padding: "4px" }}
          >
            Log In
          </button>
          <button style={{ padding: "4px" }}>Log Out</button>
        </div>
      </form>
    </div>
  );
}
export default Userlogin;
