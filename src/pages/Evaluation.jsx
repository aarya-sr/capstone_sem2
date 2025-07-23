import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Evaluation.css";

const Evaluation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total, correctAnswers, questions } = location.state || {};

  if (!questions) {
    return <p>No quiz data found. Please attempt the quiz first.</p>;
  }

  return (
    <div className="evaluation-container">
      <h1>Quiz Evaluation</h1>
      <p className="score-text">
        Your Score: <strong>{score} / {total}</strong>
      </p>

      <div className="answers-list">
        {questions.map((q, index) => (
          <div key={index} className="answer-block">
            <h4>Q{index + 1}. {q.question}</h4>
            <p>
              Correct Answer: <strong>{q.correctAnswer}</strong>
            </p>
            <p>
              Your Answer:{" "}
              <strong className={q.userAnswer === q.correctAnswer ? "correct" : "incorrect"}>
                {q.userAnswer || "No answer"}
              </strong>
            </p>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Evaluation;
