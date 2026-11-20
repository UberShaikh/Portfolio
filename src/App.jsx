import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const projects = [
  {
    index: '01',
    title: 'AquaAlert',
    type: 'Machine Learning · Climate Tech',
    description:
      'An urban flood detection and early-warning system that classifies SAR satellite imagery and turns model outputs into clear, human-readable risk reports.',
    impact: 'ResNet50 classification + AI risk interpretation',
    stack: ['Python', 'ResNet50', 'CNN', 'Gemini Pro'],
    link: 'https://github.com/UberShaikh/Urban-Flood-Prediction-System',
    accent: 'blue',
  },
  {
    index: '02',
    title: 'Real Estate Analytics',
    type: 'Data Engineering · Predictive ML',
    description:
      'An end-to-end pipeline that cleans fragmented real-estate sources into a reliable dataset, then trains regression models to estimate prices and deal outcomes.',
    impact: 'Messy source data → decision-ready predictions',
    stack: ['Python', 'Pandas', 'Data Cleaning', 'Regression'],
    link: 'https://github.com/UberShaikh/new_real_estate',
    accent: 'lime',
  },
  {
    index: '03',
    title: 'MarkVault',
    type: 'Full Stack · Local-First',
    description:
      'A private markdown knowledge base designed to keep working offline, with IndexedDB storage and automated background synchronization to SQLite.',
    impact: 'Offline-first, private by design',
    stack: ['React', 'Node.js', 'SQLite', 'IndexedDB'],
    link: 'https://github.com/UberShaikh/MarkVault',
    accent: 'orange',
  },
  {
    index: '04',
    title: 'Echo',
    type: 'API Integration · Developer Tool',
    description:
      'A unified social broadcasting tool for publishing to Discord, Telegram, and Slack through a single Flask backend and straightforward frontend.',
    impact: 'One message, multiple platforms',
    stack: ['Python', 'Flask', 'REST APIs', 'Frontend'],
    link: 'https://github.com/UberShaikh/Echo',
    accent: 'violet',
  },
]

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['Python', 'JavaScript', 'SQL', 'HTML / CSS', 'C', 'C++'],
  },
  {
    title: 'Web Engineering',
    icon: Braces,
    items: ['React', 'Node.js', 'Express.js', 'Flask', 'Tailwind CSS', 'RESTful APIs'],
  },
  {
    title: 'ML & Data',
    icon: Database,
    items: ['Machine Learning', 'Deep Learning', 'CNN', 'ResNet50', 'Pandas', 'Data Engineering'],
  },
  {
    title: 'AI & Workflow',
    icon: Sparkles,
    items: ['Gemini Pro', 'Claude API', 'MCP', 'Structured Prompting', 'Git / GitHub', 'Agile / Scrum'],
  },
]

const navItems = ['Work', 'Experience', 'Skills', 'Education']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="US — back to top">
          <span>US</span>
          <span className="brand-dot" />
        </a>

        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a className="nav-contact" href="mailto:ubermanorshaikh@gmail.com" onClick={() => setMenuOpen(false)}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-main">
        <div className="eyebrow reveal">
          <span className="availability-dot" /> Available for opportunities · 2027
        </div>
        <h1 className="reveal delay-1">
          I build software that makes
          <span className="hero-highlight"> complex things feel simple.</span>
        </h1>
        <div className="hero-bottom reveal delay-2">
          <p>
            I’m <strong>Uber Manor Shaikh</strong>, a full stack developer and computer engineering student
            working across web products, machine learning, and data systems.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              See my work <ArrowDown size={17} />
            </a>
            <a href="https://github.com/UberShaikh" className="button button-quiet" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
          </div>
        </div>
      </div>

      <aside className="hero-aside reveal delay-3" aria-label="Professional overview">
        <div className="aside-top">
          <span className="monogram">UMS</span>
          <span className="aside-label">Developer profile</span>
        </div>
        <div className="orbit-graphic" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-core">&lt;/&gt;</span>
        </div>
        <div className="aside-meta">
          <div><MapPin size={15} /> Pune, India</div>
          <div><Check size={15} /> Full Stack · ML · Data</div>
        </div>
      </aside>
    </section>
  )
}

function Marquee() {
  const text = ['FULL STACK DEVELOPMENT', 'MACHINE LEARNING', 'DATA ENGINEERING', 'THOUGHTFUL INTERFACES']
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...text, ...text].map((item, index) => (
          <span key={`${item}-${index}`}>{item}<i>✦</i></span>
        ))}
      </div>
    </div>
  )
}

function SectionHeading({ number, label, title, intro }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{number}</span>{label}</div>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section className="work section-block section-shell" id="work">
      <SectionHeading
        number="01"
        label="Selected work"
        title="Projects built around real problems."
        intro="A selection of systems that turn data, APIs, and thoughtful interfaces into useful products."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card accent-${project.accent}`} key={project.title}>
            <div className="project-card-top">
              <span className="project-number">{project.index}</span>
              <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                <ArrowUpRight size={21} />
              </a>
            </div>
            <div className="project-visual" aria-hidden="true">
              <span className="visual-grid" />
              <span className="visual-code">{project.index === '01' ? '01 / 00' : project.index === '02' ? 'DATA → ML' : project.index === '03' ? 'LOCAL ↻' : 'API × 3'}</span>
            </div>
            <div className="project-content">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-impact"><Check size={15} /> {project.impact}</div>
              <div className="tag-list">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link" href="https://github.com/UberShaikh?tab=repositories" target="_blank" rel="noreferrer">
        Explore all repositories <ArrowUpRight size={17} />
      </a>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience section-block" id="experience">
      <div className="section-shell">
        <SectionHeading
          number="02"
          label="Experience"
          title="Building for production, not just the portfolio."
        />
        <div className="experience-layout">
          <div className="experience-summary">
            <p>
              Hands-on experience shipping features and resolving issues on a live lead-generation SaaS product in a fast-moving startup team.
            </p>
            <div className="experience-stat">
              <strong>2026</strong>
              <span>Production experience</span>
            </div>
          </div>
          <article className="role">
            <div className="role-header">
              <div>
                <span className="role-date">June 2026 — Present</span>
                <h3>Full Stack Developer Intern</h3>
                <p>Pixaflip Technologies Pvt. Ltd. · Pune</p>
              </div>
              <span className="role-status">On-site</span>
            </div>
            <ul className="role-points">
              <li>
                <span>01</span>
                <p>Engineered Node.js and Express APIs for simultaneous publishing across LinkedIn, X, Facebook, and Instagram.</p>
              </li>
              <li>
                <span>02</span>
                <p>Built reusable React components and redesigned onboarding, dashboard, and campaign-builder flows.</p>
              </li>
              <li>
                <span>03</span>
                <p>Executed unit, integration, and regression testing; resolved critical frontend and backend issues before release.</p>
              </li>
              <li>
                <span>04</span>
                <p>Contributed through Agile sprints, standups, planning, and code reviews in a collaborative startup environment.</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills section-block section-shell" id="skills">
      <SectionHeading
        number="03"
        label="Capabilities"
        title="A practical toolkit for end-to-end building."
        intro="From interface details to model pipelines, I choose tools around the problem—not the other way around."
      />
      <div className="skills-grid">
        {skillGroups.map(({ title, icon: Icon, items }, index) => (
          <article className="skill-group" key={title}>
            <div className="skill-title">
              <Icon size={20} />
              <h3>{title}</h3>
              <span>0{index + 1}</span>
            </div>
            <div className="skill-items">
              {items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="education section-block" id="education">
      <div className="section-shell">
        <SectionHeading number="04" label="Foundation" title="Education & continued learning." />
        <div className="education-grid">
          <article className="education-primary">
            <div className="education-year">2023 — 2027</div>
            <div>
              <span className="degree-label">Bachelor of Technology</span>
              <h3>Computer Engineering</h3>
              <p>MIT Academy of Engineering, Pune</p>
            </div>
            <div className="cgpa"><strong>7.76</strong><span>CGPA / 10</span></div>
          </article>
          <article className="certification">
            <div className="certification-icon"><Sparkles size={23} /></div>
            <div>
              <span className="degree-label">Anthropic Academy</span>
              <h3>Applied AI Certifications</h3>
              <p>Structured Prompting · Responsible AI · Claude Code · API Integration · MCP · Cloud Integration</p>
            </div>
          </article>
        </div>
        <div className="earlier-education" aria-label="Earlier education">
          <div>
            <span>2023</span>
            <p><strong>Class XII · MSBSHSE</strong>P.O. Nahata College, Bhusawal</p>
            <b>68.70%</b>
          </div>
          <div>
            <span>2021</span>
            <p><strong>Class X · CBSE</strong>Tapti Public School, Bhusawal</p>
            <b>93%</b>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="section-shell contact-inner">
        <div className="contact-top">
          <span className="contact-label">Have a project or opportunity?</span>
          <h2>Let’s build something<br /><em>worth using.</em></h2>
          <a className="contact-email" href="mailto:ubermanorshaikh@gmail.com">
            ubermanorshaikh@gmail.com <ArrowUpRight size={22} />
          </a>
        </div>
        <div className="footer-bottom">
          <div className="footer-name">
            <span className="footer-mark">US</span>
            <span>Uber Manor Shaikh<br /><small>Software Developer · Pune, India</small></span>
          </div>
          <div className="social-links">
            <a href="https://github.com/UberShaikh" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href="mailto:ubermanorshaikh@gmail.com"><Mail size={17} /> Email</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} · Designed with intent.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.project-card, .role, .skill-group, .education-grid').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Contact />
    </>
  )
}

export default App
