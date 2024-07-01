import { useEffect, useState } from "react";

function MyNewTask() {
  const [name, setName] = useState();
  // const [users,setUsers] =useState();


  const handlechangenum = (e) => {
    e.target.innerHTML = "";
  };
  const handlechangename = (e) => {
    setName(e.target.innerHTML);
  };

// const handlechangeusers =(e)=>{
//   return (fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res)=>res.json())
//   .then(msg=>msg[0].address.city))
// }

   


  return (
    <div>
      <h1>{name}</h1>
      <h1 onClick={handlechangenum}>One</h1>
      <h1 onClick={handlechangenum}>Two</h1>
      <h1 onClick={handlechangenum}>Three</h1>
      <h1 onClick={handlechangenum}>Four</h1>
      <h1 onClick={handlechangenum}>Five</h1>

      <br />
      <br />
      <button id="john" value={name} onClick={handlechangename}>
        John
      </button>
      <button id="hari" onClick={handlechangename}>
        Hari
      </button>
      <button id="praveen" onClick={handlechangename}>
        Praveen
      </button>
      <div>
{/* <button onClick={handlechangeusers}> User city : </button> */}
      </div>
    </div>
  );
}
export default MyNewTask;
