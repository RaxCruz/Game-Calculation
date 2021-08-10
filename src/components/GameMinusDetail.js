import React, { useState, useEffect } from "react";
import AnswerForm from "./AnswerForm";

const GameMinusDetail = () => {
  const [minusNum, setMinusNum] = useState({ add: "Start", round: 0, ans: 0 });
  const [value, setValue] = useState("");
  const [isResult, setResult] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const ChangeMinusNum = () => {
    var nextMinusNum = 0;
    if (minusNum.round === 0) {
      nextMinusNum = Math.floor(Math.random() * 100) + 11;
    } else nextMinusNum = -(Math.floor(Math.random() * 10) + 1);
    setMinusNum({
      add: nextMinusNum,
      round: minusNum.round + 1,
      ans: minusNum.ans + nextMinusNum,
    });
  };

  useEffect(() => {
    if (minusNum.round === 8) return;
    const timer = setTimeout(() => {
      ChangeMinusNum();
    }, 1500);
    return () => clearTimeout(timer);
  }, [minusNum.round]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setResult(true);
  };
  const undoGame = () => {
    setMinusNum({
      add: "Start",
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
            {minusNum.ans - minusNum.add == value ? <>正確</> : <>失敗</>}
          </div>
          <div className="mt-3 px-2 rounded-3xl border-blue-300 border-solid border-2">
            <button class="answerFormButton" onClick={undoGame} autoFocus>
              <p className="text-green-700 font-bold font-serif">重新</p>
            </button>
          </div>
          <div className="mt-5 text-lg font-bold font-mono">
            答案:{minusNum.ans - minusNum.add}
          </div>
        </div>
      </div>
    );
  }

  if (minusNum.round === 8) {
    return (
      <div className="gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl">
        <div className="flex flex-col justify-center items-center h-full">
          <div id="p1" className=" font-mono font-bold">
            <AnswerForm
              value={value}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl">
        <div className="flex flex-col justify-center items-center h-full">
          <div
            id="p1"
            className="animate-ChangeNum gameNumber text-7xl font-mono font-bold"
          >
            {minusNum.add}
          </div>
        </div>
      </div>
    );
  }
};

export default GameMinusDetail;
