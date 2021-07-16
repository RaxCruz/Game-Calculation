import { useState } from "react";

const AnswerForm = (props) => {
  return (
    <form id='myform' onSubmit={props.handleSubmit}>
      <input
        className='py-1 px-2 answerInput'
        value={props.value}
        placeholder='Your Answer'
        onChange={props.handleChange}
        autoFocus
      />
    </form>
  );
};
export default AnswerForm;
