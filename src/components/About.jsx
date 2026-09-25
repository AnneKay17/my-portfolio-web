export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">Curious developer interested in building useful technology</p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science student at the University of the Witwatersrand, passionate about software development and creating technology that solves real problems.
            </p>
            <p>
              I believe in building software that people can actually use and benefit from. I value honesty about what technology can and cannot do, and I'm committed to continuous learning and growth in this field.
            </p>
            <p>
              My journey into tech started with an interest in how things work, which evolved into formal study and practical projects. Today, I'm exploring full-stack development, working on real-world problems, and learning from every project I undertake.
            </p>
          </div>
          <div>
            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-title">Passionate</div>
                <div className="highlight-text">About building practical solutions</div>
              </div>
              <div className="highlight">
                <div className="highlight-title">Ambitious</div>
                <div className="highlight-text">Seeking growth and opportunity</div>
              </div>
              <div className="highlight">
                <div className="highlight-title">Honest</div>
                <div className="highlight-text">About capabilities and learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}