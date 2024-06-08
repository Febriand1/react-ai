const sendMessageToAPI = async (url, message) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default sendMessageToAPI;
