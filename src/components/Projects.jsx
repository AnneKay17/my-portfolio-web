import { projectsData } from '../data/projectsData'

export default function Projects() {
  const featured = projectsData.filter(p => p.featured)
  const other = projectsData.filter(p => !p.featured)

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <span className={`project-status status-${project.statusType}`}>● {project.status}</span>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t, i) => (
          <span key={i} className="tech-tag">{t}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">GitHub</a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn">Live Demo</a>
        )}
      </div>
    </div>
  )

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        <p className="section-subtitle">Building practical software for real problems</p>
        
        <div className="featured-section">
          <h3>Featured Projects</h3>
        </div>
        <div className="projects-grid">
          {featured.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <div className="featured-section">
          <h3>Other Projects</h3>
        </div>
        <div className="projects-grid">
          {other.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}