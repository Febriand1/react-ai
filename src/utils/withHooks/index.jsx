import React, { useState, useEffect, useRef } from "react";
import updateConversation, { scrollBottom } from "../utils";
import sendMessageToAPI from "../api";

const BaseURL = import.meta.env.VITE_API_CHAT_URL;

const withHooks = (WrappedComponent) => {
  return (props) => {
    const api = BaseURL + "/chat";

    const [input, setInput] = useState("");
    const [conversation, setConversation] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const inputRef = useRef(null);

    const handleSend = () => {
      if (input.trim() !== "") {
        setConversation((prev) => [...prev, { input, answer: null }]);
        handleResponse(input);
        setInput("");
        setIsDisabled(true);
      }
    };

    const handleResponse = async (textInput) => {
      try {
        const data = await sendMessageToAPI(api, textInput);
        if (data) {
          updateConversation({ setConversation }, data.ITeung);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setTimeout(() => {
          setIsDisabled(false);
        }, 1000);
      }
    };

    useEffect(() => {
      if (!isDisabled && inputRef.current) {
        inputRef.current.focus();
      }
      scrollBottom();
    }, [conversation]);

    return(
      <WrappedComponent
        inputRef={inputRef}
        input={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && handleSend();
        }}
        conversation={conversation}
      />
    )
  };
};

export default withHooks;
