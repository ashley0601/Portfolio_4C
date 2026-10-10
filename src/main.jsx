import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Palette,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";
import profilePhoto from "./assets/profile.jpg";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";

function GithubIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ---- profile ---- */
const profile = {
  profile_id: 1,
  first_name: "Ashley",
  last_name: "Enallo",
  title: "Web Developer & Designer",
  email: "enalloashie@gmail.com",
  phone: "+63 963 941 4640", 
  location: "Lucena City, Philippines",
  github_url: "https://github.com/ashley0601",
  linkedin_url: "https://www.linkedin.com/in/ashley-enallo-5b53983a4",
  instagram_url: "https://www.instagram.com/ashfallera",
};

/* ---- categories ---- */
const categories = {
  1: "Web App",
  2: "Management System",
  3: "Web System",
};

/* ---- experience ---- */
const experiences = [
  {
    experience_id: 1,
    position: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jun 2026 — Present",
    description:
      "Design and build websites, web apps, and management systems for local businesses and school organizations — from e-commerce fronts to inventory dashboards.",
  },
];

/* ---- education ---- */
const education = [
  {
    education_id: 1,
    degree: "Bachelor of Science in Information Technology", 
    institution: "Dalubasaan Ng Lungsod Ng Lucena",
    period: "2023 — 2027",
    description:
      "Focused on web development, database design and management, and software engineering. Built multiple web-based systems as coursework and capstone projects.",
  },
{
  education_id: 2,
  degree: "Senior High School — STEM Strand",
  institution: "Lucena City National Highschool",
  period: "2021 — 2023",
  description:
    "Developed foundational knowledge in science, technology, engineering, and mathematics, strengthening my analytical thinking and problem-solving skills.",
},
];

/* ---- achievement ---- */
const achievements = [
  {
    achievement_id: 1,
    title: "TEFL Certification",
    description:
      "Completed a Teaching English as a Foreign Language certification, developing skills in English communication, lesson planning, and teaching strategies.",
    date: "2025",
  },
  {
    achievement_id: 2,
    title: "Data Analytics Certification",
    description:
      "Completed training in data analytics, building foundational skills in data interpretation, analysis, and data-driven problem-solving.",
    date: "2025",
  },
  {
    achievement_id: 3,
    title: "Remote Sales Certification",
    description:
      "Completed training in remote sales, developing skills in customer communication, lead generation, sales strategies, and relationship management.",
    date: "2026",
  },
];

const projects = [
  {
    project_id: 1,
    title: "Secret Valentine",
    date: "Feb 2025",
    category_id: 1, 
    github_url: "https://github.com/ashley0601/Secret_Valentine.git", 
    description:
      "An interactive Valentine-themed web application designed to create personalized anonymous messages and memorable digital experiences for couples, friends, and loved ones.",
    media: [project1], 
    skills: ["React", "CSS", "JavaScript"], 
  },
  {
    project_id: 2,
    title: "AI Inventory System",
    date: "Aug 2024",
    category_id: 2,
    github_url: "https://github.com/ashley0601", 
    description:
      "An intelligent inventory management system that helps businesses monitor stocks, manage purchases, identify low-stock items, generate reports, and support data-driven inventory decisions.",
    media: [project2],
    skills: ["React", "Dashboard", "UI/UX"],
  },
  {
    project_id: 3,
    title: "Transpawrency System",
    date: "May 2025",
    category_id: 3,
    website_url: "https://aspintunayattapat.netlify.app/",
    description:
      "A web-based animal welfare and adoption platform designed to improve transparency in animal rescue, adoption, and management while helping users find suitable pets and supporting responsible adoption.",
    media: [project3],
    skills: ["React", "Matching", "Database", "Responsive"],
  },
];

/* ---- skills ---- */
const skills = [
  { skill_id: 1, name: "React / JavaScript", value: 90 },
  { skill_id: 2, name: "HTML / CSS", value: 95 },
  { skill_id: 3, name: "UI / UX Design", value: 88 },
  { skill_id: 4, name: "Responsive Design", value: 94 },
  { skill_id: 5, name: "Database / API", value: 85 },
  { skill_id: 6, name: "Project Development", value: 85 },
];

const services = [
  {
    icon: <Code2 size={26} />,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with clean and maintainable code.",
  },
  {
    icon: <Palette size={26} />,
    title: "UI / UX Design",
    description:
      "Beautiful interfaces designed around usability, consistency, and a strong visual identity.",
  },
  {
    icon: <Briefcase size={26} />,
    title: "System Development",
    description:
      "Custom systems and dashboards designed to solve real business and organizational problems.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.target.reset();

    setTimeout(() => setSent(false), 6000);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-mark">{profile.first_name.charAt(0)}</span>
            <span>
              {profile.first_name}
              <span className="pink-text">.</span>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#achievements" onClick={closeMenu}>Achievements</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk
            <ArrowUpRight size={17} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main>
        {/* Hero — profile table */}
        <section id="home" className="hero section">
          <div className="hero-background">
            <div className="pink-blob blob-one"></div>
            <div className="pink-blob blob-two"></div>
          </div>

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <Sparkles size={15} />
                Available for new projects
              </div>

              <h1>
                Creative developer
                <br />
                <span>with a passion for</span>
                <br />
                beautiful digital experiences.
              </h1>

              <p className="hero-description">
                Hi, I'm{" "}
                <strong>
                  {profile.first_name} {profile.last_name}
                </strong>{" "}
                — a {profile.title} based in {profile.location}. I design and
                build modern websites and web applications that are beautiful,
                functional, and easy to use.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  View My Work
                  <ArrowUpRight size={18} />
                </a>

                <a href="#contact" className="secondary-button">
                  Let's Work Together
                </a>
              </div>

              <div className="hero-socials">
                <span>Follow me</span>

                <a
                  href={profile.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon size={19} />
                </a>

                <a
                  href={profile.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>

                <a
                  href={profile.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-social"
                >
                  IG
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-card">
                <div className="profile-image">
                  <img
                    src={profilePhoto}
                    alt={`${profile.first_name} ${profile.last_name}`}
                    className="profile-photo"
                  />

                  <div className="floating-badge badge-top">
                    <CheckCircle2 size={17} />
                    <span>Available</span>
                  </div>

                  <div className="floating-badge badge-bottom">
                    <Code2 size={18} />
                    <span>Developer</span>
                  </div>
                </div>

                <div className="profile-caption">
                  <div>
                    <strong>
                      {profile.first_name} {profile.last_name}
                    </strong>
                    <span>{profile.title}</span>
                  </div>

                  <div className="caption-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About — profile table */}
        <section id="about" className="section about-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">01 — About Me</div>
              <h2>
                Turning ideas into
                <span> digital experiences.</span>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-intro">
                <p className="large-text">
                  I'm a passionate developer who enjoys transforming ideas
                  into clean, functional, and visually appealing digital
                  experiences.
                </p>

                <p>
                  I believe great websites should not only look good. They
                  should also be intuitive, responsive, accessible, and
                  genuinely useful to the people who use them.
                </p>

                <p>
                  Whether it's a personal portfolio, business website,
                  dashboard, or custom system, I focus on creating solutions
                  that balance design and functionality.
                </p>
              </div>

              <div className="about-stats">
                <div className="stat">
                  <strong>5+</strong>
                  <span>Projects Completed</span>
                </div>

                <div className="stat">
                  <strong>3+</strong>
                  <span>Years Experience</span>
                </div>

                <div className="stat">
                  <strong>2+</strong>
                  <span>Happy Clients</span>
                </div>

                <div className="stat">
                  <strong>100%</strong>
                  <span>Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-heading centered">
              <div className="section-label">02 — Services</div>

              <h2>
                What I can do
                <span> for you.</span>
              </h2>

              <p>
                From concept to deployment, I create digital solutions
                tailored to your goals.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href="#contact">
                    Discuss a project
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience — experience table */}
        <section id="experience" className="section experience-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">03 — Experience</div>
              <h2>
                Where I've
                <span> worked &amp; grown.</span>
              </h2>
            </div>

            <div className="timeline">
              {experiences.map((exp) => (
                <article className="timeline-item" key={exp.experience_id}>
                  <div className="timeline-marker"></div>

                  <div className="timeline-card">
                    <div className="timeline-head">
                      <h3>{exp.position}</h3>
                      <span className="timeline-badge">Work</span>
                    </div>

                    <div className="timeline-meta">
                      <span className="timeline-company">
                        <MapPin size={13} />
                        {exp.company}
                      </span>

                      <span className="timeline-date">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                    </div>

                    <p>{exp.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education — education table */}
        <section id="education" className="section education-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">04 — Education</div>
              <h2>
                My academic
                <span> journey.</span>
              </h2>
            </div>

            <div className="timeline">
              {education.map((edu) => (
                <article className="timeline-item" key={edu.education_id}>
                  <div className="timeline-marker"></div>

                  <div className="timeline-card">
                    <div className="timeline-head">
                      <h3>{edu.degree}</h3>
                      <span className="timeline-badge">Education</span>
                    </div>

                    <div className="timeline-meta">
                      <span className="timeline-company">
                        <GraduationCap size={14} />
                        {edu.institution}
                      </span>

                      <span className="timeline-date">
                        <Calendar size={13} />
                        {edu.period}
                      </span>
                    </div>

                    <p>{edu.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects — project + project_media + project_skills + categories */}
        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="projects-top">
              <div className="section-heading">
                <div className="section-label">05 — Selected Work</div>

                <h2>
                  A few things I've
                  <span> created.</span>
                </h2>
              </div>

              <p>
                Real projects I've designed and developed — from interactive
                web apps to full management systems.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project, index) => (
                <article className="project-card" key={project.project_id}>
                  <div className={`project-preview preview-${index + 1}`}>
                    <img
                      src={project.media[0]}
                      alt={`${project.title} preview`}
                      className="project-image"
                    />
                  </div>

                  <div className="project-info">
                    <div className="project-number">
                      {String(project.project_id).padStart(2, "0")}
                    </div>

                    <div className="project-content">
                      <div className="project-meta">
                        <span className="project-type">
                          {categories[project.category_id]}
                        </span>
                        <span className="project-date">{project.date}</span>
                      </div>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>

                      <div className="project-tags">
                        {project.skills.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.github_url || "#contact"}
                      className="project-arrow"
                      aria-label={`Open ${project.title}`}
                      {...(project.github_url
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <ArrowUpRight size={22} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills — skills table */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="skills-grid">
              <div>
                <div className="section-label">06 — Skills</div>

                <h2>
                  Tools I use to
                  <span> bring ideas to life.</span>
                </h2>

                <p className="skills-description">
                  I continuously improve my skills and keep learning new
                  technologies to create better digital experiences.
                </p>

                <div className="tech-stack">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>Node.js</span>
                  <span>Git</span>
                </div>
              </div>

              <div className="skills-list">
                {skills.map((skill) => (
                  <div className="skill-item" key={skill.skill_id}>
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <strong>{skill.value}%</strong>
                    </div>

                    <div className="skill-track">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements — achievement table */}
        <section id="achievements" className="section achievements-section">
          <div className="container">
            <div className="section-heading centered">
              <div className="section-label">07 — Achievements</div>

              <h2>
                Milestones I'm
                <span> proud of.</span>
              </h2>
            </div>

            <div className="services-grid achievements-grid">
              {achievements.map((item) => (
                <article className="service-card" key={item.achievement_id}>
                  <div className="service-icon">
                    <Award size={26} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="achievement-date">{item.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial (extra — not in schema, delete if unwanted) */}
        <section className="section testimonial-section">
          <div className="container">
            <div className="quote-mark">"</div>

            <blockquote>
              Ashley transformed our idea into a beautiful and easy-to-use
              website. The result was better than we imagined, and the entire
              process was smooth from start to finish.
            </blockquote>

            <div className="testimonial-author">
              <div className="author-avatar">SD</div>

              <div>
                <strong>Samantha Davis</strong>
                <span>Business Owner</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact — contact_message (demo only) */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="section-label">08 — Contact</div>

                <h2>
                  Let's create
                  <span> something great.</span>
                </h2>

                <p>
                  Have an idea, project, or opportunity? Send me a message
                  and let's talk about how we can turn your idea into reality.
                </p>

                <a href={`mailto:${profile.email}`} className="email-link">
                  <Mail size={20} />
                  {profile.email}
                </a>

                <div className="contact-socials">
                  <a
                    href={profile.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={19} />
                  </a>

                  <a
                    href={profile.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={19} />
                  </a>

                  <a
                    href={profile.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-social"
                  >
                    IG
                  </a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Let's work together"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me a little about your project..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="primary-button submit-button">
                  {sent ? "Message Sent!" : "Send Message"}
                  {sent ? <CheckCircle2 size={18} /> : <Send size={18} />}
                </button>

                {sent && (
                  <div className="success-message">
                    Thanks! This form is for demo purposes — for now, feel
                    free to email me directly at {profile.email}.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="logo">
            <span className="logo-mark">{profile.first_name.charAt(0)}</span>
            <span>
              {profile.first_name}
              <span className="pink-text">.</span>
            </span>
          </a>

          <p>
            © {new Date().getFullYear()} {profile.first_name}{" "}
            {profile.last_name}. All rights reserved.
          </p>

          <a href="#home" className="back-top">
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);