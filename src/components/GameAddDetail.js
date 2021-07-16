import React, { useState, useEffect, Component } from "react";
import AnswerForm from "./AnswerForm";
const GameAddDetail = () => {
  const [addNum, setAddNum] = useState({ add: "Start", round: 0, ans: 0 });
  const [value, setValue] = useState("");
  const [isResult, setResult] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const ChangeAddNum = () => {
    const nextAddNum = Math.floor(Math.random() * 100) + 1;
    setAddNum({
      add: nextAddNum,
      round: addNum.round + 1,
      ans: addNum.ans + nextAddNum,
    });
  };

  useEffect(() => {
    if (addNum.round === 8) return;
    const timer = setTimeout(() => {
      ChangeAddNum();
    }, 1500);
    return () => clearTimeout(timer);
  }, [addNum.round]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(addNum.ans, value);
    setResult(true);
    if (addNum.ans - addNum.add == value) console.log("正確");
  };
  const undoGame = () => {
    setAddNum({
      add: "Start",
      round: 0,
      ans: 0,
    });
    setResult(false);
    setValue("");
  };
  if (isResult) {
    return (
      <div className='gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl'>
        <div className='flex flex-col justify-center items-center h-full'>
          <div id='p1' className='text-7xl font-mono font-bold'>
            {addNum.ans - addNum.add == value ? <>正確</> : <>失敗</>}
          </div>
          <div className='mt-3 px-2 rounded-3xl border-blue-300 border-solid border-2'>
            <button onClick={undoGame}>
              <p className='text-green-700 font-bold font-serif'>重新</p>
            </button>
          </div>
          <div className='mt-5 font-bold font-sans'>
            答案:{addNum.ans - addNum.add}
          </div>
        </div>
      </div>
    );
  }

  if (addNum.round === 8) {
    return (
      <div className='gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl'>
        <div className='flex flex-col justify-center items-center h-full'>
          <div id='p1' className=' font-mono font-bold'>
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
      <div className='gameWindow absolute  w-2/4 h-2/4 bg-green-200  bg-gradient-to-tl bg-opacity-50 z-20 rounded-3xl'>
        <div className='flex flex-col justify-center items-center h-full'>
          <div id='p1' className='text-7xl font-mono font-bold'>
            {addNum.add}
          </div>
        </div>
      </div>
    );
  }
};

export default GameAddDetail;
