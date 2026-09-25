export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-label">KARABO MAKHUBELA</div>
          <h1>I build things people can <span>actually use</span></h1>
          <p className="hero-tagline">REAL PROBLEMS · REAL PROJECTS · REAL IMPACT</p>
          <p className="hero-subtitle">
            Computer Science student at the University of Wits, exploring web and software development through client work, personal projects, and continuous learning.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/AnneKay17" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/karabo-makhubela-0bbb5b387" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="mailto:annetamakhubela@gmail.com" className="social-link" title="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {/* Main Project Card */}
          <div className="visual-card visual-card-main">
            <div className="visual-header">
              <div className="visual-dot"></div>
              <div>
                <div className="visual-title">Hair Booking</div>
                <div className="visual-subtitle">Full-stack platform</div>
              </div>
            </div>
            <div className="visual-content">
              <div className="visual-bar medium"></div>
              <div className="visual-bar short"></div>
            </div>
            <div className="visual-tags">
              <span className="visual-tag">React</span>
              <span className="visual-tag">Node.js</span>
              <span className="visual-tag">MongoDB</span>
            </div>
            <div className="status-badge">
              <div className="status-pulse"></div>
              Building
            </div>
          </div>

          {/* Secondary Card 1 */}
          <div className="visual-card visual-card-1">
            <div className="visual-header">
              <div className="visual-dot"></div>
              <div>
                <div className="visual-title">FlowConnect</div>
                <div className="visual-subtitle">CRM System</div>
              </div>
            </div>
            <div className="visual-tags">
              <span className="visual-tag">Dashboard</span>
              <span className="visual-tag">Analytics</span>
            </div>
          </div>

          {/* Secondary Card 2 */}
          <div className="visual-card visual-card-2">
            <div className="visual-header">
              <div className="visual-dot"></div>
              <div>
                <div className="visual-title">Zambia Food Security</div>
                <div className="visual-subtitle">Datathon · Data + Simulation</div>
              </div>
            </div>
            <div className="visual-tags">
              <span className="visual-tag">Interactive</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <p>Scroll to explore</p>
        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  )
}