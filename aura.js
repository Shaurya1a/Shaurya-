async function sendMessage() {
  let input = document.getElementById("userInput").value;
  let box = document.getElementById("responseBox");
  box.innerHTML = "Thinking...";

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openchat/openchat-7b",
      messages: [{ role: "user", content: input }]
    })
  });

  const data = await response.json();
  box.innerHTML = data.choices[0].message.content;
}
