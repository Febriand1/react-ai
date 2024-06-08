import React from "react";
import ChatMessage from "../components/chatMessage";

function Chat({ conversation }) {
  return (
    <div
      id="scroll-bottom"
      className="flex-1 py-28 w-full sm:px-[20%] scroll-hidden"
    >
      {conversation && conversation.length > 0
        ? conversation.map((conv, index) => (
            <React.Fragment key={index}>
              <ChatMessage message={conv.input} isBot={false} />
              <ChatMessage message={conv.answer} isBot={true} />
            </React.Fragment>
          ))
        : null}
    </div>
  );
}

export default Chat;
