const updateConversation = (conversation, data) => {
  setTimeout(() => {
    conversation.setConversation((prev) =>
      prev.map((conv, index) =>
        index === prev.length - 1 ? { ...conv, answer: data } : conv
      )
    );
  }, 1000);
};

export const scrollBottom = () => {
  const chat = document.getElementById("scroll-bottom");
  window.scrollTo(0, chat.scrollHeight);
};

export default updateConversation;
