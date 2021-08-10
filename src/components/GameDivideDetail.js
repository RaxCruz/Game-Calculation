import React, { useState, useEffect, Component } from "react";
import AnswerForm from "./AnswerForm";

const GameDivideDetail = () => {
  const [divideNum, setDivideNum] = useState({
    divideNum: "Start",
    round: 0,
    ans: 0,
  });
  const [value, setValue] = useState("");
  const [isResult, setResult] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const ChangeDivideNum = () => {
    const nextDivideNumA = Math.floor(Math.random() * 100) + 1;
    const nextDivideNumB = Math.floor(Math.random() * 10) + 1;
    const nextDivideNumMain = nextDivideNumA * nextDivideNumB;
    setDivideNum({
      divideNum: [nextDivideNumMain, nextDivideNumB],
      round: divideNum.round + 1,
      ans: nextDivideNumMain / nextDivideNumB,
    });
  };

  useEffect(() => {
    if (divideNum.round === 1) return;
    const timer = setTimeout(() => {
      ChangeDivideNum();
    }, 1500);
    return () => clearTimeout(timer);
  }, [divideNum.round]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(true);
  };
  const undoGame = (event) => {
    event.preventDefault();
    setDivideNum({
      divideNum: "Start",
      round: 0,
      ans: 0,
    });
    setResult(false);
    setValue("");
  };

  if (isResult) {
    return (
      <div className="gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl">
        <div className="flex flex-col justify-center items-center h-full">
          <div id="p1" className="text-7xl font-mono font-bold">
            {divideNum.ans == value ? <>正確</> : <>失敗</>}
          </div>
          <div className="mt-3 px-2 rounded-3xl border-blue-300 border-solid border-2">
            <button class="answerFormButton" onClick={undoGame} autoFocus>
              <p className="text-green-700 font-bold font-serif">重新</p>
            </button>
          </div>
          <div className="mt-5 font-bold font-mono">答案:{divideNum.ans}</div>
        </div>
      </div>
    );
  }
  if (divideNum.round === 0) {
    return (
      <div className="gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl">
        <div className="flex flex-col justify-center items-center h-full">
          <div id="p1" className="text-7xl font-mono font-bold">
            {divideNum.divideNum}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl">
        <div className="flex flex-col justify-center items-center h-full">
          <div id="p1" className="text-7xl font-mono font-bold">
            {divideNum.divideNum[0]} ÷ {divideNum.divideNum[1]}
          </div>
          <div id="p1" className=" font-mono font-bold pt-8">
            <AnswerForm
              value={value}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default GameDivideDetail;
