import React, { useState, useEffect, Component } from "react";
import AnswerForm from "./AnswerForm";

const GameMultiplyDetail = () => {
  const [multiplyNum, setMultiplyNum] = useState({
    multiplyNum: "Start",
    round: 0,
    ans: 0,
  });
  const [value, setValue] = useState("");
  const [isResult, setResult] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const ChangeMultiplyNum = () => {
    const nextMultiplyNumA = Math.floor(Math.random() * 100) + 1;
    const nextMultiplyNumB = Math.floor(Math.random() * 100) + 1;
    setMultiplyNum({
      multiplyNum: [nextMultiplyNumA, nextMultiplyNumB],
      round: multiplyNum.round + 1,
      ans: nextMultiplyNumA * nextMultiplyNumB,
    });
  };

  useEffect(() => {
    if (multiplyNum.round === 1) return;
    const timer = setTimeout(() => {
      ChangeMultiplyNum();
    }, 1500);
    return () => clearTimeout(timer);
  }, [multiplyNum.round]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setResult(true);
  };
  const undoGame = (event) => {
    event.preventDefault();
    setMultiplyNum({
      multiplyNum: "Start",
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
            {multiplyNum.ans == value ? <>正確</> : <>失敗</>}
          </div>
          <div className="mt-3 px-2 rounded-3xl border-blue-300 border-solid border-2">
            <button class="answerFormButton" onClick={undoGame} autoFocus>
              <p className="text-green-700 font-bold font-serif">重新</p>
            </button>
          </div>
          <div className="mt-5 font-bold font-sans">答案:{multiplyNum.ans}</div>
        </div>
      </div>
    );
  }
  if (multiplyNum.round === 0) {
    return (
      <div className="gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl">
        <div className="flex flex-col justify-center items-center h-full">
          <div id="p1" className="text-7xl font-mono font-bold">
            {multiplyNum.multiplyNum}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl">
        <div className="flex flex-col justify-center items-center h-full">
          <div id="p1" className="text-7xl font-mono font-bold">
            {multiplyNum.multiplyNum[0]} * {multiplyNum.multiplyNum[1]}
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

export default GameMultiplyDetail;
