import React, { useState } from "react";
import Quiz from "../components/Quiz";
import "../styles/Quizes.css";

const topicMap = {
  computers: 18,
  math: 19,
  gk: 9,
};

const Quizzes = () => {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    if (topic && difficulty) {
      setQuizStarted(true);
    } else {
      alert("Please select both topic and difficulty.");
    }
  };

  if (quizStarted) {
    return <Quiz category={topicMap[topic]} topicName={topic} difficulty={difficulty} />;
  }

  return (
    <div className="quiz-container">
      <h2>Select a Quiz Topic</h2>
      <div className="button-group">
        <button onClick={() => setTopic("computers")}>Computers</button>
        <button onClick={() => setTopic("math")}>Mathematics</button>
        <button onClick={() => setTopic("gk")}>General Knowledge</button>
      </div>

      {topic && (
        <>
          <h3>Selected Topic: <span style={{ color: "green" }}>{topic}</span></h3>

          <h2>Select Difficulty</h2>
          <div className="button-group">
            <button onClick={() => setDifficulty("easy")}>Easy</button>
            <button onClick={() => setDifficulty("medium")}>Medium</button>
            <button onClick={() => setDifficulty("hard")}>Hard</button>
          </div>
        </>
      )}

      {difficulty && (
        <>
          <h3>Selected Difficulty: <span style={{ color: "blue" }}>{difficulty}</span></h3>
          <button className="start-button" onClick={handleStartQuiz}>Start Quiz</button>
        </>
      )}

      <div className="instructions">
        <h3>📌 Instructions:</h3>
        <ul>
          <li>Read each question carefully before answering.</li>
          <li>Do not refresh the page once the quiz begins.</li>
          <li>Avoid opening other tabs or using external help — this is a self-assessment.</li>
          <li>There’s no negative marking — try every question!</li>
          <li>Your performance is only for your own learning, no one else will see it.</li>
        </ul>
      </div>
    </div>
  );
};

export default Quizzes;
