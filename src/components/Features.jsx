const Features = () => (
    <section id="features" className="features">
      <h2>Why Quizlet?</h2>
      <div className="features__grid">
        <Feature icon="" title="Learn Fast" text="Answer and learn with instant feedback." />
        <Feature icon="" title="Progressive Levels" text="3 difficulty levels to keep you challenged." />
        <Feature icon="" title="Track Progress" text="Evaluate your scores and improve over time." />
      </div>
    </section>
);
  
const Feature = ({ icon, title, text }) => (
    <div className="feature">
      <div className="feature__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
);
  
export default Features