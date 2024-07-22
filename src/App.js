import Recipe from "./Recipes/Recipe";
import Username from "./Users/Username";
import Quote from "./Quotes/Quote";
import TodosList from "./Todos/TodosList";
import MyNewTask from "./MyNewTask/Task";
import Usercard from "./Usercard/Usercard";
import Profiledata from "../src/Usercard/Profiledata.json";
import Experience from "../src/Usercard/Experience.json";
import Currentcompany from "../src/Usercard/Currentcompany.json";
import Userlogin from "./Usercard/Userlogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import QRcode from "../src/QRcode/QRcode";
import Advice from "../src/Advice/Adviceapp";
import BMI from "./BMI/BMIcalculator";
import Currency from "./Currency/Currency";
import DigitalClock from "./DigitalClock/Digitalclock";
import Password from "./SrongPassword/Password";
import Quiz from "./Quizs/QuizApp";
import Searchbox from "../src/Search/Searchbox";



const App = () => {
  // const [selectedusercardprofiledata, setSelectedusercardprofiledata] =
  //   useState([]);

  // useEffect(() => {
  //   let d = Profiledata.filter((e) => {
  //     return e.Username === document.getElementsByName("username").value;
  //   });
  //   console.log(d);
  //   setSelectedusercardprofiledata(d[0]);
  // }, []);
  return (
    // <div style={{ display: "flex", justifyContent: "space-evenly" }}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Userlogin />}></Route>
    //       <Route
    //         path="/usercard"
    //         element={
    //           <Usercard
    //             UsercardProfiledata={selectedusercardprofiledata}
    //             Usercardexpdata={Experience[0]}
    //             Usercardcurrentcompany={Currentcompany[0]}
    //           />
    //         }
    //       ></Route>
    //     </Routes>
    //   </BrowserRouter>
    //   {/* <App /> */}
      // {/* <Counter /> */}
      // {/* <AgeName /> */}
      // {/* <ColorChange/> */}
      // {/* <ColorChangeDD /> */}
      // {/* <Recipe /> */}
      // {/* <Username /> */}
      // {/* <Quote /> */}
      // {/* <TodosList/> */}
      // {/* <MyNewTask/> */}
      // {/* <Usercard UsercardProfiledata={Profiledata[0]} Usercardexpdata={Experience[0]} Usercardcurrentcompany={Currentcompany[0]} />
      // <Usercard UsercardProfiledata={Profiledata[1]} Usercardexpdata={Experience[1]} Usercardcurrentcompany={Currentcompany[1]}/>
      // <Usercard UsercardProfiledata={Profiledata[2]} Usercardexpdata={Experience[2]} Usercardcurrentcompany={Currentcompany[2]}/> */}
      // {/* <Userlogin/> */}
      <div>
        {/* <QRcode /> */}
        {/* <Advice /> */}
        {/* <BMI/> */}
        {/* <Currency/> */}
        {/* <DigitalClock /> */}
        {/* <Password/> */}
        {/* <Quiz/> */}
        <Searchbox/>
      </div>
    // </div>
  );
};

export default App;
