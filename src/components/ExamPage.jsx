import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

export default function ExamPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  // fetch questions dynamically (simulate API)
  useEffect(() => {
    async function fetchQuestions() {
      const fakeData = [
        { id: 1, question: "Capital of France?", options: ["Paris", "London", "Rome"], answer: "Paris" },
        { id: 2, question: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
        { id: 3, question: "React hook for state?", options: ["useFetch", "useState", "useClass"], answer: "useState" },
      ];
      setQuestions(fakeData);
    }
    fetchQuestions();
  }, []);

  function handleAnswer(id, option) {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  }

  // auto save progress every 30s
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Auto-saving progress...", answers);
    }, 30000);
    return () => clearInterval(interval);
  }, [answers]);

  function finishExam() {
    let sc = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) sc++;
    });
    setScore(sc);
  }

  if (score !== null) {
    return (
      <div className="card">
        <h2>Exam Finished</h2>
        <p>Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      {questions.map((q) => (
        <QuestionCard key={q.id} q={q} onAnswer={handleAnswer} />
      ))}
      <button className="btn primary" onClick={finishExam}>Submit Exam</button>
    </div>
  );
}
