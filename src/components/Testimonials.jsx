const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <h2>What People Say</h2>
    <div className="testimonials__grid">
      <Testimonial quote="Loved the challenge mode. UI is slick." name="Sara J." />
      <Testimonial quote="Better than reading docs. Learn by doing." name="David K." />
    </div>
  </section>
);

const Testimonial = ({ quote, name }) => (
  <div className="testimonial">
    <p>"{quote}"</p>
    <span>- {name}</span>
  </div>
);
  
export default Testimonials