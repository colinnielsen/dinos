import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Profiles from './components/Profiles'
import SkillList from './components/SkillList'
class App extends Component {

constructor(){
  super()
  this.state = {
    profiles: [],
    listVisibility: false
  }
  this.toggleSkills = this.toggleSkills.bind(this)
  this.showSkills = this.showSkills.bind(this)
}

  componentDidMount (){
    fetch('/dinosaurs.json')
    .then(response => response.json())
    .then(profiles => this.setState({
      profiles: profiles
    })
  )}


// showSkills(event){
//   var css = (this.state.listVisibility === "skills-container hidden") ? "skills-container" : "skills-container hidden"
//   this.setState({listVisibility:css})
// }

showSkills(event){
  if (this.state.listVisibility) {
    return "skills-container"
  }else {
    return "skills-container hidden"
  }
}

toggleSkills(event){
  console.log(event.target);
  this.setState({
    listVisibility: !this.state.listVisibility
  })

}


  render() {

    return (
      <div>
        <Header />
        <main>
          <Profiles profiles={this.state.profiles} toggleSkills={this.toggleSkills}
          showSkills={this.showSkills}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
