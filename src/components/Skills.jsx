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
  return <div>{skillsElement}</div>
}

export default Skills