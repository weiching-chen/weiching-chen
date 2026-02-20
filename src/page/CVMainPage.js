import React from 'react';
import '../CVMainPage.css';
import { Link } from 'react-router-dom';
import experienceData from '../content/experience.json';
import archiveData from '../content/archive.json';

export default function CVMainPage() {
  const [experience, setExperience] = React.useState([]);
  const [expGroups, setExpGroups] = React.useState([]);
  const [activeSection, setActiveSection] = React.useState('experience');

  React.useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    const groupsOut = Array.isArray(experienceData)
      ? experienceData.map((g) => ({
          group: g.group,
          location: g.location,
          timeline: g.timeline,
          description: g.description,
          items: Array.isArray(g.roles) ? g.roles : []
        }))
      : [];
    setExpGroups(groupsOut);
    setExperience(groupsOut.flatMap((g) => g.items || []));
    return () => {
      isMounted = false;
    };
  }, []);

  // Highlight nav item based on scroll position
  React.useEffect(() => {
    const sectionIds = ['experience', 'projects', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const contentEl = document.getElementById('content');

    const observer = new IntersectionObserver(
      (entries) => {
        // If scrolled to the very bottom of the scroll container, force 'contact' active
        if (contentEl) {
          const atBottom =
            contentEl.scrollTop + contentEl.clientHeight >= contentEl.scrollHeight - 20;
          if (atBottom) {
            setActiveSection('contact');
            return;
          }
        }
        // Pick the entry with highest visibility
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target && visible.target.id) {
          setActiveSection(visible.target.id);
        } else {
          // Fallback: find the section closest to top
          const byTop = sections
            .map((el) => ({ id: el.id, top: Math.abs(el.getBoundingClientRect().top) }))
            .sort((a, b) => a.top - b.top)[0];
          if (byTop) setActiveSection(byTop.id);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -40% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="cv-page" role="document">

      <div className="cv-layout">
        <aside className="cv-aside" aria-label="Profile and navigation">
          <div>
            <h1 className="cv-name">Weiching (Julia) Chen</h1>
            <h2 className="cv-role">Entrepreneur · Software Engineer · Designer</h2>
            <p className="cv-summary">
              I build accessible, performant, and thoughtful interactive experiences across robotics,
              product, and the web.
            </p>

            <nav className="cv-nav" aria-label="Section navigation">
              <ul>
                <li>
                  <a
                    href="#experience"
                    className={`cv-nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                    aria-current={activeSection === 'experience' ? 'true' : undefined}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className={`cv-nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                    aria-current={activeSection === 'projects' ? 'true' : undefined}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`cv-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                    aria-current={activeSection === 'contact' ? 'true' : undefined}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <ul className="cv-social" aria-label="Social links">
            <li>
              <a href="https://github.com/w20010703" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.53 1.01.11-.8.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.64.25 2.86.12 3.16.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .5Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/weiching-chen" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.52 6.5H2.5V21.5h3V10Zm5.5 0h-3V21.5h3v-6.1c0-1.61.3-3.17 2.3-3.17 1.96 0 1.99 1.83 1.99 3.27v6h3v-6.73c0-3.33-.72-5.9-4.62-5.9-1.87 0-3.12 1.02-3.63 1.99h-.05V10Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:weichingchen73@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8.24l7.4 5.55c.36.27.84.27 1.2 0L20 8.24V18H4Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </aside>

        <main className="cv-content" id="content">

          <section id="experience" className="cv-section" aria-labelledby="experience-title">
            <h3 id="experience-title" className="cv-section-title">Experience</h3>

            

            {expGroups.length ? (
              <div className="cv-subgroups">
                {expGroups.map((g, gi) => (
                  <div key={gi} className="cv-subgroup">
                    <div className="cv-subgroup-header">
                      <h4 className="cv-subtitle">{g.group}</h4>
                      <div className="cv-subgroup-meta">
                        {g.location ? <span className="cv-item-meta">{g.location}</span> : null}
                        {g.timeline ? <span className="cv-item-meta">{g.timeline}</span> : null}
                      </div>
                    </div>
                    {g.description ? <p className="cv-item-desc">{g.description}</p> : null}
                    {Array.isArray(g.items) && g.items.length ? (
                      g.items.map((item, idx) => (
                        <Link key={idx} to={item.link || '/'} className="cv-item cv-item-link" aria-label={`Open ${item.title}`}>
                          <div className="cv-item-header">
                            <h4 className="cv-item-title">{item.title}</h4>
                            {item.period ? <span className="cv-item-meta">{item.period}</span> : null}
                          </div>
                          {item.description ? <p className="cv-item-desc">{item.description}</p> : null}
                          {Array.isArray(item.tags) && item.tags.length ? (
                            <ul className="cv-tags">
                              {item.tags.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                          ) : null}
                        </Link>
                      ))
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
            <Link to="/cv.pdf" className="cv-item-jump-page" aria-label="View all projects">{"View Full Resume > "}</Link>
          </section>

          <section id="projects" className="cv-section" aria-labelledby="projects-title">
            <h3 id="projects-title" className="cv-section-title">More Projects</h3>

            <div className="cv-grid" role="list">
              {Array.isArray(archiveData) && archiveData.slice(0, 3).map((p, i) => (
                <Link to={p.projectUrl} className="cv-card cv-item-link" role="listitem" key={i} aria-label={`Open ${p.project}`}>
                  <p className="cv-card-desc">{p.madeAt || ''}</p>
                  <h4 className="cv-card-title">{p.project}</h4>
                  {Array.isArray(p.builtWith) && p.builtWith.length ? (
                    <ul className="cv-tags">{p.builtWith.map((t, ti) => <li key={ti}>{t}</li>)}</ul>
                  ) : null}
                </Link>
              ))}
            </div>

            <Link to="/archive" className="cv-item-jump-page" aria-label="View all projects">{"View Full Project Archive > "}</Link>
            
          </section>

          <section id="contact" className="cv-section" aria-labelledby="contact-title">
            <h3 id="contact-title" className="cv-section-title">Contact</h3>
            <p>
              Email me at{' '}
              <a className="cv-link" href="mailto:weichingchen73@gmail.com">weichingchen73@gmail.com</a>.
            </p>
          </section>

          <footer className="cv-footer">
            ©2025 — Weiching (Julia) Chen
          </footer>
        </main>
      </div>
    </div>
  );
}
