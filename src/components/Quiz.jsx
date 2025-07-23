import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Quiz.css";
import fallbackQuestions from "../constants/fallbackData";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Quiz = ({ category, topicName, difficulty }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currQnIndex, setCurrQnIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchQuestions = async () => {
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        throw new Error("Empty result");
      }

      const formatted = data.results.map((q) => ({
        question: q.question,
        correct_answer: q.correct_answer,
        incorrect_answers: q.incorrect_answers,
      }));

      setQuestions(formatted);
    } catch (err) {
      console.warn("Using fallback:", err.message);
  const localFallback = fallbackQuestions[topicName]?.[difficulty] || [];
  setQuestions(localFallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [category, difficulty]);

  const handleAnswer = (ans) => {
    if (selectedAnswer) return;

    setSelectedAnswer(ans);

    const isCorrect = ans === questions[currQnIndex].correct_answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [...prev, ans]);

    setTimeout(() => {
      if (currQnIndex + 1 < questions.length) {
        setCurrQnIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        // Finish and go to evaluation
        navigate("/evaluation", {
          state: {
            questions,
            userAnswers: [...userAnswers, ans],
            score: isCorrect ? score + 1 : score,
            total: questions.length,
            topicName,
          },
        });
      }
    }, 1000);
  };

  if (loading) {
    return <div className="quiz-box">Loading questions...</div>;
  }

  if (!questions || questions.length === 0) {
    return <div className="quiz-box">Failed to load questions.</div>;
  }

  const currentQn = questions[currQnIndex];
  const allOptions = shuffleArray([
    currentQn.correct_answer,
    ...currentQn.incorrect_answers,
  ]);

  return (
    <div className="quiz-box">
      <h2>
        Topic: {topicName.toUpperCase()} | Question {currQnIndex + 1} of {questions.length}
      </h2>

      <p
        className="question-text"
        dangerouslySetInnerHTML={{ __html: currentQn.question }}
      />

      <div className="options">
        {allOptions.map((option, idx) => {
          const isCorrect = selectedAnswer && option === currentQn.correct_answer;
          const isIncorrect = selectedAnswer === option && option !== currentQn.correct_answer;
          const isDisabled = selectedAnswer && option !== selectedAnswer;

          return (
            <button
              key={idx}
              className={`option-btn ${
                isCorrect
                  ? "correct"
                  : isIncorrect
                  ? "incorrect"
                  : isDisabled
                  ? "disabled"
                  : ""
              }`}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedAnswer}
              dangerouslySetInnerHTML={{ __html: option }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
