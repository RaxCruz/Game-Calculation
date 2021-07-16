import React from "react";
import OptionComponent from "./OptionComponent";

const OptionList = () => {
  const GameMode = {
    add: {
      img: "https://semantic-ui.com/images/avatar2/large/elyse.png",
      title: "加法",
      link: "add",
    },
    minus: {
      img: "https://semantic-ui.com/images/avatar/large/elliot.jpg",
      title: "減法",
      link: "minus",
    },
    multiply: {
      img: "https://semantic-ui.com/images/avatar/large/steve.jpg",
      title: "乘法",
      link: "multiply",
    },
    divide: {
      img: "https://semantic-ui.com/images/avatar2/large/kristy.png",
      title: "除法",
      link: "divide",
    },
  };
  return (
    <div className='absolute top-64 min-w-full container  mx-auto z-20'>
      <div className=' flex gap-14 justify-center'>
        <OptionComponent mode={GameMode.add} />
        <OptionComponent mode={GameMode.minus} />
        <OptionComponent mode={GameMode.multiply} />
        <OptionComponent mode={GameMode.divide} />
      </div>
    </div>
  );
};

export default OptionList;
