import React from "react";
import Buttons from "../components/button";
import InputArea from "../components/inputArea";

const Form = (props) => {
  return (
    <div className="fixed bottom-0 py-6 bg-chatbg w-full">
      <div className="flex justify-center items-center sm:px-[20%]">
        <InputArea
          inputRef={props.inputRef}
          input={props.input}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          isDisabled={props.isDisabled}
        />
        <Buttons handleSend={props.handleSend} isDisabled={props.isDisabled} />
      </div>
    </div>
  );
};

export default Form;
