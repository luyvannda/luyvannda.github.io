import ContactBtn from "./ContactBtn";

export default function Projects() {

  return (
    <div className="projects">

      <div className="projects-heading">
        <h2>Projects</h2>
        <ContactBtn />
      </div>

      <div className="projects-main">

        <img src="images/thumbnail-project-1-large.webp" alt="A project picture"></img>
        <h2>DESIGN PORTFOLIO</h2>
        <p>HTML CSS</p>

        <div className="project-links">
          <a href="#">VIEW PROJECT</a>
          <a href="#">VIEW CODE</a>
        </div>

      </div>

    </div>
  )
}