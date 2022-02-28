import React, { useState } from "react";
import "./App.css"


export function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const answers = [
  "Or nah?",
  "Hell nah",
  "Check the mirror lol",
  "You wish",
  "This is why you don't have friends",
  "Duhh??",
  "I dont care, and neither do you",
  "Stop asking me stupid questions",
  "Take a shot and try again",
  "Not in your lifetime",
  "So now you need my help?",
  "My reply is no",
  "Let's sleep on it. Goodnight xoxo 💤",
  "#doubt",
  "Empty head, no thoughts. Empty ball, no answer",
  "Stop thinking, start live, laugh, loving",
  "Dear god no",
  "The sky is the limit! You don't have wings",
  "You do you boo boo"
];

  const getAnswer = (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  return (
    <div className="App">
      <form onSubmit={getAnswer}>
        <h1>Moody 8-Ball</h1>
        <div>
          <input
            value={question}
            placeholder="Ask me a question..."
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <button type="submit">Ask</button>
      </form>
      <div className="circle">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;
