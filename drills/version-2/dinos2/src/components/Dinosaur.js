import React from 'react'
import SkillList from './SkillList.js'

class Dinosaur extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listVisibility: false
    }
    this.showSkills = this.showSkills.bind(this)
    this.toggleSkills = this.toggleSkills.bind(this)
  }

  toggleSkills(){
    this.setState({
      listVisibility: !this.state.listVisibility
    })
  }

  showSkills(){
    if (this.state.listVisibility) {
      return "skills-container"
    }else {
      return "skills-container hidden"
    }
  }


render(){
  return (
    <li>
      <div className="profile-card">
        <header onClick={this.toggleSkills} className="profile-header">
          <img src={this.props.dinosaur.image}/>
          <h2>{this.props.dinosaur.name}</h2>
        </header>
        <SkillList
          showSkills={this.showSkills}
          skills={this.props.dinosaur.skills} />
        </div>
      </li>
    )
  }
}

export default Dinosaur
