import React, { useState } from "react";
import "./App.css";

const App = () => {
  const api = "http://127.0.0.1:5000/chat";

  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (input.trim() !== "") {
      setConversation((prev) => [...prev, { input, answer: null }]);
      handleResponse(input);
      setInput("");
      setIsLoading(true);
    }
  };

  const handleResponse = async (textInput) => {
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: textInput }),
      });

      if (res.ok) {
        const data = await res.json();
        setTimeout(() => {
          setConversation((prev) =>
            prev.map((conv, index) =>
              index === prev.length - 1 ? { ...conv, answer: data.ITeung } : conv
            )
          );
        }, 1000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const scrollBottom = () => {
    const chat = document.getElementById("scroll-bottom");
    window.scrollTo(0, chat.scrollHeight);
  };

  React.useEffect(() => {
    scrollBottom();
  } , [conversation]);

  return (
    <div className="flex flex-col min-h-[91vh] bg-chatbg w-full">
      <header className="fixed top-0 py-4 bg-chatbg w-full">
        <h1 className="flex justify-center text-5xl text-indigo-500 font-bold text-center sm:px-[20px]">
          React AI
        </h1>
      </header>
      <div id="scroll-bottom" className="flex-1 py-28 w-full overflow-y- sm:px-[20px]">
        {conversation.map((conv, index) => (
          <React.Fragment key={index}>
            <div className="flex mb-4 justify-end">
              <div className="p-2 rounded-lg max-w-xs bg-blue-500 text-white">
                {conv.input}
              </div>
            </div>

            <div className="flex mb-4 justify-start">
              <div className="p-2 rounded-lg max-w-xs bg-gray-400 text-black">
                {conv.answer}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="fixed bottom-0 py-6 bg-chatbg w-full">
        <div className="flex justify-center items-center sm:px-[20px]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="py-3 px-4 text-md rounded-md shadow border focus:outline-none focus:shadow-outline w-full"
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            className={`bg-indigo-500 hover:bg-indigo-700 py-3 px-4 font-bold text-white rounded-md ml-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
