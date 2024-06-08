import React from "react";
import Headers from "./header";
import Chat from "./chat";
import Form from "./form";
import withHooks from "../utils/withHooks";

const Layouts = withHooks(
  ({ inputRef, input, onChange, onKeyDown, conversation }) => {
    return (
      <div className="flex flex-col min-h-[91vh] bg-chatbg w-full">
        <Headers />
        <Chat conversation={conversation} />
        <Form
          inputRef={inputRef}
          input={input}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  }
);

export default Layouts;
