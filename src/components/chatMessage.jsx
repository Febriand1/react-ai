import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow, darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function ChatMessage(props) {
  const selectedStyle = props.isBot ? darcula : tomorrow;
  const position = props.isBot ? "justify-start" : "justify-end";

  return (
    <div className={`flex ${position} mb-4`}>
      <SyntaxHighlighter
        language="javascript"
        style={selectedStyle}
        className="rounded-lg text-lg max-w-md"
        wrapLongLines={true}
      >
        {props.message}
      </SyntaxHighlighter>
    </div>
  );
}

export default ChatMessage;
