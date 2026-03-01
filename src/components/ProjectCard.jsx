export default function ProjectCard({ project }) {
  return (
    <div className="card" style={{ height: "100%" }}>
      <h3 className="projectTitle">{project.title}</h3>
      <p className="projectDesc">{project.description}</p>

      <div className="tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div style={{ marginTop: 14 }}>
        <a className="linkBtn" href={project.link} target="_blank" rel="noreferrer">
          View ↗
        </a>
      </div>
    </div>
  );
}