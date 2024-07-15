import "../DigitalClock/Digitalclock.css";

import React, { useEffect, useState } from "react";

function Digitalclock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  });

  const FormatHours = ((hours)=>{
    return hours === 0 ? 12 : hours > 12 ? hours - 12 : hours

  });
  const LeadingZero = ((sec)=>{
    return sec < 10 ? `0${sec}`:sec 
  });

  const FormatDate = ((date)=>{
const options = {weekday:"long", year : "numeric" ,month :"long", day :"numeric"}

return date.toLocaleDateString(undefined,options)
  })


  return (
    <div className="container">
      <div className="box">
        <h2>Digital Clock</h2>
        <div className="timer">
          {LeadingZero(FormatHours(currentTime.getHours()))} 
            :
            {LeadingZero(currentTime.getMinutes())}:{LeadingZero(currentTime.getSeconds()) }
            {currentTime.getHours() >= 12 ? " PM" : " AM"}
        </div>
        <div className="date">{FormatDate(currentTime)}</div>
      </div>
    </div>
  );
}

export default Digitalclock;
