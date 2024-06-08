import React from "react";

const InputArea = (props) => {
  return (
    <input
      ref={props.inputRef}
      type="text"
      value={props.input}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      className="py-3 px-4 text-md rounded-lg shadow border focus:outline-none focus:shadow-outline w-full"
      placeholder="Type your message..."
      disabled={props.isDisabled}
    />
  );
};

export default InputArea;
