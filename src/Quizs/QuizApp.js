import React, { useEffect, useState } from "react";
import "../Quizs/QuizApp.css";
import Questiondata from "../Quizs/Question.json";

function QuizApp() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(()=>{
    let interval;
    if (timer > 0 && !showScore){
      interval = setInterval(()=>{
        setTimer((prevTimer) => prevTimer - 1);
      },1000)
    }else{
      clearInterval(interval);
      setShowScore(true);
    }

return()=>clearInterval(interval);
  },[timer,showScore]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === Questiondata[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion < Questiondata.length - 1) {
      setCurrentQuestion((prevQuestion) => {
        return prevQuestion + 1;        
      });
      setTimer(10);
    }else {
      setShowScore(true);
    }
  };

  const handleRestartClick =(()=>{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);
  });

  return (
    <div className="Appbox">
      {showScore ? (
        <>
          <div className="score-section">
            <h3>Your Score : {score}/{Questiondata.length}</h3>
          </div>
          <div className="Rstbtn">
            <button onClick={handleRestartClick}>Restart</button>
          </div>
        </>
      ) : (
        <>
          <div className="Question-no">
            <h2>Question {currentQuestion + 1}</h2>
          </div>
          <div className="Question-section">
            <p>{Questiondata[currentQuestion].question}</p>
          </div>
          <div className="options">
            {Questiondata[currentQuestion].options.map((options, index) => {
              return (
                <button key={index} onClick={()=>(handleAnswerClick(options))}>
                  {options}
                </button>
              );
            })}
          </div>
          <div className="timer">
            <p>
              Times Left :<span>{timer}s</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default QuizApp;
