import { experienceData } from '../data/experienceData'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience &amp; <span>Growth</span></h2>
        <p className="section-subtitle">Practical learning through real-world opportunities</p>
        
        <div className="experience-grid">
          {experienceData.map((exp, i) => (
            <div key={i} className="experience-card">
              <h3>{exp.title}</h3>
              <div className="experience-meta">{exp.company} • {exp.period}</div>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}