
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { name } = useUser(); 

  const handleClick = () => {
    if (name) {
      navigate("/quizes");  
    } else {
      navigate("/signup");  
    }
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Challenge Your Skills</h1>
        <p>Test your knowledge with quizzes</p>
        <button className="hero__button" onClick={handleClick}>
          {name ? "Start Quizzing" : "Join Now"}
        </button>
      </div>
      <div className="hero__image">
        <img src="/quiz-hero.svg" alt="Quiz Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
