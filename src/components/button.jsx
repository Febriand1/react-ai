import React from "react";

const Buttons = (props) => {
  return (
    <button
      onClick={props.handleSend}
      className={`bg-indigo-500 hover:bg-indigo-700 py-3 px-4 font-bold text-white rounded-lg ml-4 ${
        props.isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={props.isDisabled}
    >
      Send
    </button>
  );
};

export default Buttons;
