import { useEffect, useState } from "react";

export default function QuestionCard({ q, onAnswer }) {
  const [timeLeft, setTimeLeft] = useState(30); // 30 sec per question
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (timeLeft <= 0) {
      onAnswer(q.id, selected);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer); // cleanup
  }, [timeLeft]);

  function handleSelect(option) {
    setSelected(option);
  }

  function handleSubmit() {
    onAnswer(q.id, selected);
  }

  return (
    <div className="card">
      <h3>{q.question}</h3>
      {q.options.map((opt) => (
        <div key={opt}>
          <label>
            <input
              type="radio"
              name={`q-${q.id}`}
              value={opt}
              checked={selected === opt}
              onChange={() => handleSelect(opt)}
            />
            {opt}
          </label>
        </div>
      ))}
      <p>Time left: {timeLeft}s</p>
      <button className="btn" onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
}
