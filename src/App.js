const profileLinks = {
  github: "https://github.com/yaswanthhari",
  linkedin: "https://linkedin.com/in/yaswanthhari",
  email: "mailto:yaswanth.hari@gmail.com",
  portfolioDemo: "https://yaswanthhari.github.io/student-portfolio/index.html"
};

const stats = [
  { value: "240+", label: "Internship Hours" },
  { value: "5", label: "Projects Completed" },
  { value: "8+", label: "Technologies" },
  { value: "2+", label: "Years of Learning" }
];

const techSkills = {
  Languages: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"],
  Frontend: ["HTML5/CSS3", "JavaScript (ES6+)", "Responsive Design"],
  "Backend & ML": ["Python (Flask basics)", "REST API concepts", "Linear Regression", "Model Training"],
  "Libraries & Tools": ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Git & GitHub", "VS Code"]
};

const projects = [
  {
    icon: "🧠",
    title: "Migraine Guard",
    stack: ["Python", "Machine Learning", "Predictive Analytics", "Healthcare AI"],
    description:
      "AI-powered migraine prediction and management system. Analyzes trigger patterns, weather data, and lifestyle factors to predict migraine onset and provide preventive recommendations.",
    githubUrl: profileLinks.github
  },
  {
    icon: "🌤️",
    title: "Weather Forecast App",
    stack: ["Python", "Flask", "REST APIs", "JavaScript", "Matplotlib"],
    description:
      "Full-stack weather application providing real-time weather data and 5-day forecasts with interactive temperature charts and city search using OpenWeatherMap API.",
    githubUrl: profileLinks.github
  },
  {
    icon: "⚡",
    title: "Electric Motor Temperature Prediction",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Linear Regression"],
    description:
      "Developed an ML model to predict electric motor temperature using real-world sensor data. Completed preprocessing, feature selection, and regression training with RMSE and R² evaluation.",
    githubUrl: profileLinks.github
  },
  {
    icon: "📚",
    title: "Student Performance Prediction",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Google Colab"],
    description:
      "Built a regression model to predict student final marks from study habits and academic history with data cleaning, feature engineering, and real-time prediction interface.",
    githubUrl: profileLinks.github
  },
  {
    icon: "🏥",
    title: "Seenu Cancer Treatment Website",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description:
      "Designed and developed a multi-page informational website focused on cancer treatment awareness, with semantic structure, accessible design, and clean responsive UI.",
    githubUrl: profileLinks.github,
    liveUrl: profileLinks.portfolioDemo
  }
];

function App() {
  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        .app {
          min-height: 100vh;
          padding: 24px 20px 44px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #e2e8f0;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 40%, #0f172a 100%);
        }

        .container {
          width: min(1080px, 100%);
          margin: 0 auto;
          display: grid;
          gap: 22px;
        }

        .surface {
          border: 1px solid rgba(226, 232, 240, 0.2);
          background: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(8px);
          border-radius: 18px;
          box-shadow: 0 15px 32px rgba(2, 6, 23, 0.35);
        }

        .navbar {
          position: sticky;
          top: 8px;
          z-index: 10;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .brand {
          font-weight: 800;
          color: #67e8f9;
          font-size: 1.15rem;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .nav-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .nav-link:hover { color: #67e8f9; }

        .hero {
          display: grid;
          gap: 20px;
          grid-template-columns: 1.35fr 1fr;
          padding: 32px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(1.9rem, 5vw, 3rem);
          line-height: 1.1;
        }

        .name-highlight { color: #fde047; }
        .subtitle {
          margin: 8px 0 14px;
          color: #dbeafe;
          font-weight: 600;
        }
        .hero p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.65;
          max-width: 640px;
        }

        .hero-actions {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .hero-icon {
          align-self: center;
          justify-self: center;
          width: 132px;
          aspect-ratio: 1;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 3rem;
          font-weight: 800;
          color: #f8fafc;
          border: 1px solid rgba(148, 163, 184, 0.35);
          background: rgba(99, 102, 241, 0.36);
          box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.08);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 12px;
        }

        .stat {
          text-align: center;
          padding: 20px 12px;
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.28);
          background: rgba(30, 41, 59, 0.56);
        }

        .stat-value {
          display: block;
          font-size: 1.9rem;
          font-weight: 800;
          color: #38bdf8;
        }

        .section {
          padding: 24px;
        }

        .section-title {
          margin: 0 0 6px;
          font-size: 1.6rem;
          color: #f8fafc;
        }

        .section-intro {
          margin: 0 0 16px;
          color: #bfdbfe;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 16px;
        }

        .panel {
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.24);
          padding: 18px;
          background: rgba(30, 41, 59, 0.5);
        }

        .panel h3 {
          margin: 0 0 10px;
          color: #67e8f9;
        }

        .panel p,
        .panel li {
          color: #dbeafe;
          line-height: 1.6;
        }

        .skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .chip {
          list-style: none;
          padding: 7px 12px;
          border-radius: 999px;
          border: 1px solid rgba(56, 189, 248, 0.42);
          background: rgba(56, 189, 248, 0.14);
          color: #e0f2fe;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .chip:hover {
          transform: translateY(-2px);
          background: rgba(56, 189, 248, 0.28);
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 15px;
        }

        .project-card {
          padding: 18px;
          border-radius: 15px;
          border: 1px solid rgba(148, 163, 184, 0.22);
          background: rgba(30, 41, 59, 0.56);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(125, 211, 252, 0.8);
          box-shadow: 0 14px 24px rgba(2, 6, 23, 0.4);
        }

        .project-head {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .project-head h3 {
          margin: 0;
          font-size: 1.05rem;
          color: #f8fafc;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 10px 0;
          padding: 0;
        }

        .project-stack li {
          list-style: none;
          font-size: 0.82rem;
          border-radius: 8px;
          padding: 5px 8px;
          background: rgba(15, 23, 42, 0.74);
          border: 1px solid rgba(148, 163, 184, 0.3);
        }

        .project-actions {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 14px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          border: 1px solid transparent;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
        }

        .btn-primary {
          background: #facc15;
          color: #111827;
        }

        .btn-secondary {
          color: #f1f5f9;
          background: rgba(15, 23, 42, 0.78);
          border-color: rgba(148, 163, 184, 0.38);
        }

        .internship-list {
          margin: 0;
          padding-left: 18px;
          display: grid;
          gap: 8px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .contact-card {
          text-decoration: none;
          color: inherit;
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.26);
          background: rgba(30, 41, 59, 0.56);
          padding: 14px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .contact-card:hover {
          transform: translateY(-3px);
          border-color: rgba(250, 204, 21, 0.7);
        }

        .contact-card span {
          display: block;
          color: #cbd5e1;
          font-size: 0.9rem;
        }

        .contact-card strong {
          color: #f8fafc;
        }

        footer {
          text-align: center;
          color: #cbd5e1;
          font-size: 0.9rem;
          padding-top: 10px;
        }

        @media (max-width: 840px) {
          .hero,
          .about-grid {
            grid-template-columns: 1fr;
          }

          .hero-icon { width: 105px; font-size: 2.4rem; }
        }
      `}</style>

      <main className="container">
        <nav className="navbar surface">
          <a href="#home" className="brand">YH</a>
          <div className="nav-links">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </nav>

        <header id="home" className="hero surface">
          <div>
            <h1>
              Hi, I&apos;m <span className="name-highlight">Yaswanth Hari</span>
            </h1>
            <p className="subtitle">B.Tech in computer science and artificial intelligence</p>
            <p>
              Motivated AI student with hands-on experience in Python, Machine Learning, and Web
              Development. Passionate about building problem-solving applications that make a difference.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                 Connect
              </a>
              <a className="btn btn-secondary" href="#projects">
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-icon">&lt;/&gt;</div>
        </header>

        <section className="stats-grid">
          {stats.map((item) => (
            <article className="stat surface" key={item.label}>
              <span className="stat-value">{item.value}</span>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="section surface">
          <h2 className="section-title">About Me</h2>
          <p className="section-intro">Get to know me better</p>
          <div className="about-grid">
            <article className="panel">
              <h3>Professional Summary</h3>
              <p>
                Motivated B.Tech (AI) student with hands-on experience in Python, Machine Learning,
                and Web Development. Completed a 240-hour AI/ML internship (SmartBridge x APSCHE)
                where I built real-world predictive models. Skilled in frontend (HTML, CSS, JavaScript)
                and backend fundamentals (Python, SQL). Actively seeking a Full Stack Developer internship
                or fresher role.
              </p>
              <h3>Education</h3>
              <ul>
                <li>B.Tech - CSE (Artificial Intelligence), Siddhartha Institute of Engineering & Technology, Puttur (2024 - Present | 3rd Year)</li>
                <li>Diploma - Computer Science & Engineering, Audisankara College of Engineering & Technology, Gudur (2021 - 2024)</li>
              </ul>
            </article>

            <article className="panel">
              <h3>Certifications & Achievements</h3>
              <ul>
                <li>SmartBridge AI/ML Internship Completion Certificate - 240 Hours (APSCHE Collaboration), 2024</li>
                <li>MakeForMadanapalle Hackathon - Participation & Achievement Certificate</li>
              </ul>
              {Object.entries(techSkills).map(([group, values]) => (
                <div key={group}>
                  <h3>{group}</h3>
                  <ul className="skills-wrap">
                    {values.map((skill) => (
                      <li className="chip" key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          </div>
        </section>

        <section id="projects" className="section surface">
          <h2 className="section-title">My Projects</h2>
          <p className="section-intro">Real-world applications I&apos;ve built</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-head">
                  <span>{project.icon}</span>
                  <h3>{project.title}</h3>
                </div>
                <ul className="project-stack">
                  {project.stack.map((item) => (
                    <li key={`${project.title}-${item}`}>{item}</li>
                  ))}
                </ul>
                <p>{project.description}</p>
                <div className="project-actions">
                  {project.liveUrl ? (
                    <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : null}
                  <a className="btn btn-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section surface">
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-intro">AI & Machine Learning Intern - SmartBridge</p>
          <article className="panel">
            <p>APSCHE Collaboration | 240-Hour Industry Internship | 2024</p>
            <ul className="internship-list">
              <li>Completed a 240-hour (6-month) structured AI/ML internship in collaboration with APSCHE and SmartBridge.</li>
              <li>Built and deployed two end-to-end machine learning projects covering data collection, preprocessing, model training, and evaluation.</li>
              <li>Gained hands-on experience solving industrial AI problems using Python, Pandas, NumPy, and Scikit-learn.</li>
              <li>Presented project outcomes and documented findings, improving communication of technical results to non-technical audiences.</li>
            </ul>
          </article>
        </section>

        <section id="contact" className="section surface">
          <h2 className="section-title">Contact</h2>
          <p className="section-intro">Let&apos;s connect for internship and fresher opportunities.</p>
          <div className="contact-grid">
            <a className="contact-card" href={profileLinks.email}>
              <span>📧 Email</span>
              <strong>yaswanth.hari@gmail.com</strong>
            </a>
            <a className="contact-card" href={profileLinks.github} target="_blank" rel="noreferrer">
              <span>💼 GitHub</span>
              <strong>github.com/yaswanthhari</strong>
            </a>
            <a className="contact-card" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              <span>🔗 LinkedIn</span>
              <strong>linkedin.com/in/yaswanthhari</strong>
            </a>
          </div>
        </section>

        <footer>
          <p>© 2025 Yaswanth Hari. All rights reserved.</p>
          <p>
            <a className="nav-link" href={profileLinks.github} target="_blank" rel="noreferrer">GitHub</a>
            {" | "}
            <a className="nav-link" href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;