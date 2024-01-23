import ContactBtn from "./ContactBtn";
import { projectsData } from "./projectsData";

export default function Projects() {
  const reverseProjectsData = [...projectsData].reverse();

  const projectElements = reverseProjectsData.map((project) => {
    return (
      <div key={project.id} className="projects-main">
        <img
          src={`images/${project.imgCover}`}
          alt="Project's preview image"
        ></img>
        <h2>{project.title}</h2>
        <p>{project.skills}</p>

        <div className="project-links">
          <a
            className="live-view"
            href={project.livePreview}
            target="_blank"
            rel="noreferrer"
          >
            VIEW PROJECT
          </a>
          <a
            className="source-view"
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer"
          >
            VIEW CODE
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="projects">
      <div className="projects-heading">
        <h2>Projects</h2>
        <ContactBtn />
      </div>

      <div className="projects-grid">{projectElements}</div>
    </div>
  );
}
