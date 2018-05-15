import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import JobDetails from './components/JobDetails.js'
import ImputForm from './components/ImputForm.js'
import Preview from './components/Preview.js'

class App extends Component {

  constructor(){
    super()
  this.state = {
      jobs: [],
      class: "hidden",
      messageContent: "",
      submitMessage: ""
    }
    this.showPreview = this.showPreview.bind(this)
    this.submitApplication = this.submitApplication.bind(this)
    this.updatePreview = this.updatePreview.bind(this)
  }


componentDidMount(){
  fetch('listing.json')
  .then(response => response.json())
  .then(data => this.setState({
    jobs: data
  }))
}

showPreview(){
  var cssChange = (this.state.class === "hidden") ? "show" : "hidden";
  this.setState({
    class: cssChange
  })
}

submitApplication(event){
  event.preventDefault()
  this.setState({
    messageContent:"",
    submitMessage: "Your application was submitted!"
  })
}

updatePreview(event){
  this.setState({
    messageContent: event.target.value,
  })
}


  render() {
    return (
      <div>
        <Header />
        <main>
          <JobDetails jobs={this.state}/>
          <ImputForm
            submitMessage={this.state.submitMessage}
            messageContent={this.state.messageContent}
            updatePreview={this.updatePreview}
            submitApplication={this.submitApplication}/>
          <Preview
            messageContent={this.state.messageContent}
            statefulClassName={this.state.class}
            showPreview={this.showPreview}/>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
