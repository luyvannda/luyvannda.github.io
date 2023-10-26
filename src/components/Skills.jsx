import { skillsData } from "./skillsData"

function Skills() {

  const skillsElement = skillsData.map((skill) => {
    return (
      <div key={skill.id} className="skills">
        <h1>{skill.name}</h1>
        <p>{skill.experience} Experience</p>
      </div>
    )
  })

  return (
    <div>
      <div className="skills-container">
        {skillsElement}
        <img className="skill-rings" src="./images/pattern-rings.svg" alt="rings pattern"></img>

        <div className="bottom-border"></div>

      </div>


    </div>
  )
}

export default Skills