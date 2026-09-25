import { skillsData } from '../data/skillsData'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <p className="section-subtitle">Technologies I've worked with and learned</p>
        
        <div className="skills-container">
          {Object.entries(skillsData).map(([category, skills], i) => (
            <div key={i} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-list">
                {skills.map((skill, j) => (
                  <span key={j} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}