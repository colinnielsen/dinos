import React from 'react'

  const SkillList = (props) =>{
    const skills = props.skills.map(skill =>{
      return <li key={skill}>{skill}</li>
  })

  return (
    <section className={props.showSkills()}>
      <h4>Skills</h4>
      <ul className="skills-list">
        {skills}
      </ul>
    </section>
  )
}

export default SkillList
