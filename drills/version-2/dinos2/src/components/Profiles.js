import React from 'react'
import Dinosaur from './Dinosaur.js'


const Profiles = (props) =>{

  const profilesLis = props.profiles.map(profile =>{
    return (
      <Dinosaur key={profile.name} dinosaur={profile}/>
    )
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
