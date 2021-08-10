import React from "react";
import { Link } from "react-router-dom";

const OptionComponent = (props) => {
  return (
    <div className="bg-red-400 rounded-3xl relative option_card">
      <div className="option_photo">
        <img className="rounded-t-3xl" src={props.mode.img} alt="" />
        <div className="option_button">
          <Link to={`/game/${props.mode.link}`}>
            <div className="rounded-lg px-2 py-1 border-1 border-solid bg-yellow-200">
              <p className="text-green-700 font-serif font-bold">挑戰</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="py-4">
        <div className="px-1 pt-2 pb-1 text-center">
          <h1 className="leading-3 text-xl font-bold">{props.mode.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default OptionComponent;
