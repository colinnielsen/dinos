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
    profiles: []
  }
}


  componentDidMount (){
    fetch('/dinosaurs.json')
    .then(response => response.json())
    .then(profiles => this.setState({
      profiles: profiles
    })
  )}



  render() {
    return (
      <div>
        <Header />
        <main>
          <Profiles profiles={this.state.profiles} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
