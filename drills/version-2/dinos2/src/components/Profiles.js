import React from 'react'
import SkillList from './SkillList.js'

const Profiles = (props) =>{
  const profilesLis = props.profiles.map(profile =>{
    return <li key={profile.name}>
          <div className="profile-card">
              <header onClick={props.toggleSkills} className="profile-header">
                <img src={profile.image}/>
                <h2>{profile.name}</h2>
              </header>
              <SkillList
                 showSkills={props.showSkills}
                 skills={profile.skills} />
           </div>
         </li>
  })



  return (
    <section id="profiles-container">
        <h2>Profiles</h2>
        <ul id="profiles">
          {profilesLis}
        </ul>
    </section>
  )
}

export default Profiles
