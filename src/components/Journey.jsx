export default function Journey() {
  return (
    <section id="journey">
      <div className="container">
        <h2 className="section-title">My <span>Journey</span></h2>
        <p className="section-subtitle">How I got here and where I'm heading</p>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Grade 11</div>
            <div className="timeline-content">
              <h3>First Steps in Programming</h3>
              <p className="timeline-description">
                My interest in programming started with an interactive experience that introduced me to coding. It sparked a curiosity about how software works and what's possible to build.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2024–Present</div>
            <div className="timeline-content">
              <h3>Computer Science at Wits University</h3>
              <p className="timeline-description">
                Studying BSc Computer Science, expected to graduate in 2027. Exploring web development, backend systems, databases, and practical software engineering.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2025–2026</div>
            <div className="timeline-content">
              <h3>Learning and Building</h3>
              <p className="timeline-description">
                Participating in competitive programming and data structures study, working on personal projects, collaborating on team projects, and gaining experience with real clients.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Looking Forward</div>
            <div className="timeline-content">
              <h3>Growing as a Developer</h3>
              <p className="timeline-description">
                Seeking internship and junior developer opportunities. Committed to building useful software, learning from every project, and eventually contributing to solutions that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}