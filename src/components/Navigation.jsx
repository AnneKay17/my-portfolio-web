import { useState } from 'react'

export default function Navigation({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">Karabo <span>Makhubela</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            title="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            title="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#journey" onClick={closeMobileMenu}>Journey</a>
        <a href="#projects" onClick={closeMobileMenu}>Projects</a>
        <a href="#experience" onClick={closeMobileMenu}>Experience</a>
        <a href="#skills" onClick={closeMobileMenu}>Skills</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
      </div>
    </nav>
  )
}