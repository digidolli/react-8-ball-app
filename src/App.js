import React, { useState } from "react";


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
  "Stop asking stupid questions",
  "Take a shot and try again",
  "Not in your lifetime",
  "So now you need my help?",
  "My reply is no",
  "Let's sleep on it. Goodnight xoxo 💤",
  "#doubt",
  "Empty head, no thoughts. Empty ball, no answer....",
  "Is that what you realllly what to ask me?",
  "Stop thinking, start live, laugh, loving",
  "Dear god no",
  "The sky is the limit! (You dont have wings, so...)",
  "That question is triggering, ask me something else"
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
    <div className="ball">
      <form onSubmit={getAnswer}>
        <div>
          <label>question</label>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <button type="submit">get answer</button>
      </form>
      <div className="circle">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;
