import { useEffect, useState } from "react";

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
      "Full-stack weather app with real-time weather and 5-day forecasts, interactive charts, and city search using OpenWeatherMap API.",
    githubUrl: profileLinks.github
  },
  {
    icon: "⚡",
    title: "Electric Motor Temperature Prediction",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Linear Regression"],
    description:
      "ML model to predict electric motor temperature using sensor data with preprocessing, feature selection, regression training, RMSE and R² evaluation.",
    githubUrl: profileLinks.github
  },
  {
    icon: "📚",
    title: "Student Performance Prediction",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Google Colab"],
    description:
      "Regression model to predict final marks from study and attendance features with data cleaning, feature engineering, and model evaluation.",
    githubUrl: profileLinks.github
  },
  {
    icon: "🏥",
    title: "Seenu Cancer Treatment Website",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description:
      "Multi-page awareness website with clean responsive UI, semantic HTML, and accessible structure.",
    githubUrl: profileLinks.github,
    liveUrl: profileLinks.portfolioDemo
  }
];

const heroBackground =
  "file:///C:/Users/use/.cursor/projects/d-portfolio/assets/c__Users_use_AppData_Roaming_Cursor_User_workspaceStorage_1c4c2b35b34650fe11143056f254d61b_images_image-e2661162-53a3-44c3-98d5-4ad12ddc85e3.png";
const latestHeroBackground =
  "file:///C:/Users/use/.cursor/projects/d-portfolio/assets/c__Users_use_AppData_Roaming_Cursor_User_workspaceStorage_1c4c2b35b34650fe11143056f254d61b_images_WhatsApp_Image_2026-04-20_at_8.16.20_PM-70ea2dad-acee-41fb-9418-29aec2c1c958.png";
const deploySafeHeroImage = "/profile.png";

function App() {
  const imageCandidates = [deploySafeHeroImage, latestHeroBackground, heroBackground];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-16px) translateX(8px); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 21ch; }
        }

        @keyframes hideCursor {
          0%, 85% { border-right-color: #48cfff; }
          100% { border-right-color: transparent; }
        }

        @keyframes pulseGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(249, 115, 22, 0.25); }
          50% { text-shadow: 0 0 22px rgba(249, 115, 22, 0.75); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.03); }
        }

        @keyframes photoGlow {
          0%, 100% {
            box-shadow:
              0 0 0 2px rgba(72, 207, 255, 0.18),
              0 0 22px rgba(72, 207, 255, 0.38),
              0 0 46px rgba(72, 207, 255, 0.2);
          }
          50% {
            box-shadow:
              0 0 0 2px rgba(72, 207, 255, 0.32),
              0 0 28px rgba(72, 207, 255, 0.58),
              0 0 64px rgba(72, 207, 255, 0.3);
          }
        }

        .app {
          min-height: 100vh;
          padding: 26px 16px 44px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #d9ecff;
          background:
            radial-gradient(circle at 12% 18%, rgba(38, 173, 255, 0.18), transparent 36%),
            radial-gradient(circle at 84% 78%, rgba(14, 132, 255, 0.18), transparent 36%),
            linear-gradient(160deg, #010712 0%, #020a1d 45%, #03122f 100%);
          background-size: 180% 180%;
          animation: gradientMove 14s ease infinite;
          position: relative;
          overflow: hidden;
        }

        .app::before,
        .app::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .app::before {
          background-image:
            radial-gradient(2px 2px at 12% 22%, rgba(255, 255, 255, 0.75) 45%, transparent 46%),
            radial-gradient(1.5px 1.5px at 28% 64%, rgba(255, 255, 255, 0.65) 45%, transparent 46%),
            radial-gradient(1.8px 1.8px at 44% 18%, rgba(125, 211, 252, 0.7) 45%, transparent 46%),
            radial-gradient(1.4px 1.4px at 61% 48%, rgba(255, 255, 255, 0.62) 45%, transparent 46%),
            radial-gradient(2px 2px at 74% 28%, rgba(56, 189, 248, 0.75) 45%, transparent 46%),
            radial-gradient(1.3px 1.3px at 83% 73%, rgba(255, 255, 255, 0.6) 45%, transparent 46%),
            radial-gradient(1.7px 1.7px at 92% 15%, rgba(125, 211, 252, 0.68) 45%, transparent 46%);
          opacity: 0.65;
          animation: twinkle 6s ease-in-out infinite;
        }

        .app::after {
          background-image:
            radial-gradient(1.2px 1.2px at 8% 78%, rgba(255, 255, 255, 0.45) 45%, transparent 46%),
            radial-gradient(1.5px 1.5px at 22% 40%, rgba(125, 211, 252, 0.5) 45%, transparent 46%),
            radial-gradient(1.3px 1.3px at 36% 86%, rgba(255, 255, 255, 0.5) 45%, transparent 46%),
            radial-gradient(1.4px 1.4px at 55% 70%, rgba(56, 189, 248, 0.55) 45%, transparent 46%),
            radial-gradient(1.2px 1.2px at 69% 10%, rgba(255, 255, 255, 0.44) 45%, transparent 46%),
            radial-gradient(1.5px 1.5px at 79% 58%, rgba(125, 211, 252, 0.48) 45%, transparent 46%),
            radial-gradient(1.1px 1.1px at 95% 92%, rgba(255, 255, 255, 0.42) 45%, transparent 46%);
          opacity: 0.48;
          animation: twinkle 8s ease-in-out infinite reverse;
        }

        .container {
          width: min(980px, 100%);
          margin: 0 auto;
          display: grid;
          gap: 16px;
          position: relative;
        }

        .container::before,
        .container::after {
          content: "";
          position: fixed;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(48px);
          z-index: 0;
          opacity: 0.22;
          animation: floatOrb 8s ease-in-out infinite;
        }

        .container::before {
          width: 240px;
          height: 240px;
          top: 8%;
          left: 2%;
          background: radial-gradient(circle, #22d3ee 0%, rgba(34, 211, 238, 0) 70%);
        }

        .container::after {
          width: 210px;
          height: 210px;
          bottom: 8%;
          right: 4%;
          background: radial-gradient(circle, #3b82f6 0%, rgba(59, 130, 246, 0) 70%);
          animation-delay: 2s;
        }

        .surface {
          position: relative;
          z-index: 1;
          border: 1px solid rgba(56, 189, 248, 0.2);
          background: rgba(3, 16, 38, 0.88);
          backdrop-filter: blur(8px);
          border-radius: 18px;
          box-shadow: 0 14px 30px rgba(0, 7, 20, 0.65), inset 0 0 0 1px rgba(56, 189, 248, 0.08);
          animation: fadeUp 0.65s ease both;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.65s ease-out, transform 0.65s ease-out;
        }

        .fade-up.appear {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-up-delay-1 { transition-delay: 0.1s; }
        .fade-up-delay-2 { transition-delay: 0.2s; }
        .fade-up-delay-3 { transition-delay: 0.3s; }

        .navbar {
          position: sticky;
          top: 8px;
          z-index: 15;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .brand {
          font-weight: 800;
          color: #60dfff;
          font-size: 1rem;
          text-decoration: none;
          letter-spacing: 0.3px;
          border: 1px solid rgba(96, 223, 255, 0.35);
          background: rgba(8, 42, 88, 0.5);
          border-radius: 9px;
          padding: 3px 9px;
        }

        .nav-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .nav-link {
          color: #d4e7fb;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.8rem;
          transition: color 0.2s ease, text-shadow 0.2s ease;
        }

        .nav-link:hover {
          color: #60dfff;
          text-shadow: 0 0 12px rgba(96, 223, 255, 0.5);
        }

        .hero {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 20px;
          min-height: 360px;
          align-items: center;
          padding: 22px;
          isolation: isolate;
          border: 1px solid rgba(96, 223, 255, 0.28);
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(95deg, rgba(2, 10, 24, 0.95) 0%, rgba(3, 14, 35, 0.78) 38%, rgba(4, 19, 46, 0.32) 70%), var(--hero-bg);
          background-size: cover, cover;
          background-position: center 20%, center;
          z-index: -2;
          transform: scale(1.02);
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: -45% -20%;
          background: conic-gradient(from 90deg, transparent, rgba(14, 165, 233, 0.15), transparent, rgba(56, 189, 248, 0.15), transparent);
          animation: gradientMove 9s linear infinite;
          z-index: -1;
          mix-blend-mode: screen;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.2rem);
          line-height: 1.1;
          color: #eff7ff;
        }

        .name-row {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .name-highlight {
          color: #48cfff;
          display: inline-block;
          animation: pulseGlow 2.6s ease-in-out infinite;
        }

        .role-line {
          margin: 10px 0 14px;
          font-size: 1.1rem;
          font-weight: 800;
          color: #d2eaff;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        .role-highlight {
          display: inline-block;
          color: #48cfff;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #48cfff;
          width: 0;
          animation:
            typing 2.2s steps(20, end) forwards,
            hideCursor 2.5s ease forwards;
          text-shadow: 0 0 12px rgba(72, 207, 255, 0.65);
          min-height: 1.3em;
          padding-right: 3px;
        }

        .hero-media {
          justify-self: end;
          position: relative;
          width: min(250px, 100%);
          aspect-ratio: 1 / 1.2;
          animation: fadeUp 0.9s ease both;
        }

        .hero-media::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 24px;
          border: 1px solid rgba(72, 207, 255, 0.28);
          box-shadow: 0 0 18px rgba(72, 207, 255, 0.35);
          pointer-events: none;
          animation: photoGlow 3.2s ease-in-out infinite;
        }

        .hero-media::after {
          content: "";
          position: absolute;
          inset: -16px;
          border-radius: 30px;
          background:
            linear-gradient(110deg, rgba(72, 207, 255, 0.2), transparent 35%, transparent 65%, rgba(72, 207, 255, 0.2));
          filter: blur(8px);
          z-index: -1;
          pointer-events: none;
          opacity: 0.85;
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 26%;
          border-radius: 18px;
          border: 1px solid rgba(72, 207, 255, 0.7);
          box-shadow: 0 0 0 3px rgba(72, 207, 255, 0.16), 0 0 28px rgba(72, 207, 255, 0.45);
          animation: floatOrb 5s ease-in-out infinite;
          background: radial-gradient(circle at 40% 20%, rgba(34, 211, 238, 0.22), rgba(0, 0, 0, 0.65));
        }

        .hero-photo-fallback {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          color: #f8fafc;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .hero-badge {
          position: absolute;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(3, 14, 35, 0.95);
          border: 1px solid rgba(72, 207, 255, 0.55);
          color: #7ee7ff;
          font-weight: 700;
          font-size: 0.7rem;
          box-shadow: 0 0 16px rgba(34, 211, 238, 0.25);
        }

        .hero-badge-top {
          top: 18px;
          right: -6px;
          animation: floatOrb 4.3s ease-in-out infinite;
        }

        .hero-badge-bottom {
          left: -8px;
          bottom: 24px;
          border-color: rgba(72, 207, 255, 0.55);
          color: #7ee7ff;
          box-shadow: 0 0 16px rgba(72, 207, 255, 0.25);
          animation: floatOrb 4.8s ease-in-out infinite;
        }

        .subtitle {
          margin: 8px 0 14px;
          color: #c7dcf7;
          font-weight: 600;
        }

        .hero p {
          margin: 0;
          color: #c8dcf6;
          line-height: 1.65;
          max-width: 640px;
        }

        .social-row {
          margin-top: 10px;
          display: flex;
          gap: 8px;
        }

        .social-btn {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          border: 1px solid rgba(72, 207, 255, 0.35);
          color: #7ee7ff;
          text-decoration: none;
          font-size: 0.8rem;
          background: rgba(5, 25, 56, 0.8);
        }

        .hero-actions {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
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
          border: 1px solid rgba(72, 207, 255, 0.2);
          background: rgba(4, 19, 46, 0.86);
        }

        .stat-value {
          display: block;
          font-size: 1.9rem;
          font-weight: 800;
          color: #48cfff;
        }

        .section { padding: 24px; }

        .section-title {
          margin: 0 0 6px;
          font-size: 1.6rem;
          color: #fff7ed;
        }

        .section-intro {
          margin: 0 0 16px;
          color: #f9c8a8;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 16px;
        }

        .panel {
          border-radius: 14px;
          border: 1px solid rgba(34, 211, 238, 0.22);
          padding: 18px;
          background: rgba(9, 9, 9, 0.65);
        }

        .panel h3 {
          margin: 0 0 10px;
          color: #22d3ee;
        }

        .panel p,
        .panel li {
          color: #f5e5d8;
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
          border: 1px solid rgba(249, 115, 22, 0.35);
          background: rgba(249, 115, 22, 0.12);
          color: #ffe9dc;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .chip:hover {
          transform: translateY(-2px);
          background: rgba(249, 115, 22, 0.22);
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 15px;
        }

        .project-card {
          padding: 18px;
          border-radius: 15px;
          border: 1px solid rgba(249, 115, 22, 0.24);
          background: rgba(15, 15, 15, 0.76);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: #22d3ee;
          box-shadow: 0 14px 24px rgba(34, 211, 238, 0.2);
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
          color: #fff7ed;
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
          background: rgba(251, 146, 60, 0.14);
          border: 1px solid rgba(251, 146, 60, 0.32);
          color: #ffe9dc;
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
          filter: brightness(1.1);
        }

        .btn-primary {
          background: linear-gradient(90deg, #22d3ee 0%, #38bdf8 100%);
          color: #012032;
        }

        .btn-secondary {
          color: #e5f3ff;
          background: rgba(3, 19, 45, 0.82);
          border-color: rgba(72, 207, 255, 0.4);
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
          border: 1px solid rgba(249, 115, 22, 0.24);
          background: rgba(15, 15, 15, 0.74);
          padding: 14px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .contact-card:hover {
          transform: translateY(-3px);
          border-color: #22d3ee;
        }

        .contact-card span {
          display: block;
          color: #f9c8a8;
          font-size: 0.9rem;
        }

        .contact-card strong { color: #fff7ed; }

        footer {
          text-align: center;
          color: #f9c8a8;
          font-size: 0.9rem;
          padding-top: 10px;
        }

        @media (max-width: 840px) {
          .about-grid { grid-template-columns: 1fr; }
          .hero { min-height: 430px; padding: 20px; }
          .hero { grid-template-columns: 1fr; }
          .hero-media {
            justify-self: center;
            width: min(220px, 100%);
            margin-top: 8px;
          }
          .role-highlight { width: auto; max-width: 100%; }
        }
      `}</style>

      <main className="container">
        <nav className="navbar surface fade-up">
          <a href="#home" className="brand">YH</a>
          <div className="nav-links">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </nav>

        <header id="home" className="hero surface fade-up" style={{ "--hero-bg": `url("${heroBackground}")` }}>
          <div>
            <h1>
              Hello, It&apos;s Me{" "}
              <span className="name-row">
                <span className="name-highlight">Yaswanth Hari</span>
              </span>
            </h1>
            <p className="role-line">
              <span>And I&apos;m a</span>
              <span className="role-highlight">Full Stack Developer</span>
            </p>
            <p className="subtitle">B.Tech in Computer Science and Artificial Intelligence</p>
            <p>
              Motivated AI student with hands-on experience in Python, Machine Learning, and Web
              Development. Passionate about building problem-solving applications that make a difference.
            </p>
            <div className="social-row">
              <a className="social-btn" href={profileLinks.github} target="_blank" rel="noreferrer">G</a>
              <a className="social-btn" href={profileLinks.linkedin} target="_blank" rel="noreferrer">in</a>
              <a className="social-btn" href={profileLinks.email}>@</a>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                Let&apos;s Connect
              </a>
              <a className="btn btn-secondary" href="#projects">
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-media">
            {imageIndex < imageCandidates.length ? (
              <img
                src={imageCandidates[imageIndex]}
                alt="Yaswanth Hari"
                className="hero-photo"
                onError={() => setImageIndex((prev) => prev + 1)}
              />
            ) : (
              <div className="hero-photo hero-photo-fallback">Yaswanth Hari</div>
            )}
            <span className="hero-badge hero-badge-top">React + ML</span>
            <span className="hero-badge hero-badge-bottom">Web Developer</span>
          </div>
        </header>

        <section className="stats-grid fade-up">
          {stats.map((item) => (
            <article className="stat surface fade-up fade-up-delay-1" key={item.label}>
              <span className="stat-value">{item.value}</span>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="section surface fade-up">
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

        <section id="projects" className="section surface fade-up">
          <h2 className="section-title">My Projects</h2>
          <p className="section-intro">Real-world applications I&apos;ve built</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card fade-up fade-up-delay-2" key={project.title}>
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

        <section className="section surface fade-up">
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

        <section id="contact" className="section surface fade-up">
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

        <footer className="fade-up">
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