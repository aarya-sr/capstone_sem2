const Categories = () => (
  <section id="categories" className="categories">
    <h2>Quiz Topics</h2>
    <div className="categories__grid">
      {["Computers", "Mathematics", "General Knowledge"].map((topic) => (
        <div className="category" key={topic}>
          <h3>{topic}</h3>
          <p>Master the fundamentals and quirks of {topic}.</p>
        </div>
      ))}
    </div>
  </section>
);

export default Categories;