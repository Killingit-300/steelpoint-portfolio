import ProjectCard from "./components/ProjectCard";
import { siteData } from "./data/siteData";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <div className="container">
        {/* HERO */}
       <div className="hero">

  {/* Centered Logo */}
  <div className="logoWrapper">
    <img className="heroLogo" src="/logo.png" alt="SteelPoint logo" />
  </div>

  {/* Brand / Location */}
  <div className="kicker">
    <span className="dot" />
    {siteData.brand} • {siteData.location}
  </div>

  <h1 className="h1">{siteData.name}</h1>

          <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.2 }}>
            {siteData.headline}
          </div>

          <p className="sub">{siteData.intro}</p>

          <div className="ctaRow">
            <a className="linkBtn primaryBtn" href="#projects">See Projects</a>
            <a className="linkBtn" href="#contact">Get In Touch</a>

            {siteData.socials.map((s) => (
              <a
                key={s.label}
                className="linkBtn"
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div id="projects" className="section">
          <div className="sectionTitle">Projects</div>
          <div className="grid">
            {siteData.projects.map((p) => (
              <div key={p.title} style={{ gridColumn: "span 4" }}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <div id="about" className="section">
          <div className="sectionTitle">About</div>
          <div className="card">
            <p className="projectDesc" style={{ margin: 0, fontSize: 16 }}>
              {siteData.about}
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <div id="contact" className="section">
          <div className="sectionTitle">Contact</div>
          <div
            className="card"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: 680 }}>
              <div style={{ fontSize: 20, fontWeight: 950, letterSpacing: -0.3 }}>
                Let’s build something solid.
              </div>
              <p className="projectDesc" style={{ marginTop: 8 }}>
                Hit me up and let’s make it clean, fast, and professional.
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                className="linkBtn primaryBtn"
                href={siteData.socials.find((s) => s.label === "Email")?.href || "mailto:you@example.com"}
              >
                Email Me
              </a>
              <a className="linkBtn" href="#projects">View Work</a>
            </div>
          </div>
        </div>

        <div className="footer">
          © {new Date().getFullYear()} {siteData.brand}. Built with React + Vite.
        </div>
      </div>
    </>
  );
}