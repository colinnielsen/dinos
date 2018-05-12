import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js'
import JobsList from './components/JobsList.js'
import Form from './components/Form.js'
import Footer from './components/Footer.js'
class App extends Component {

constructor(){
  super()
  this.state ={ jobs: [] }
  this.formSubmitted = this.formSubmitted.bind(this)

}

formSubmitted(event) {
 event.preventDefault()
 this.setState({
        jobs: [{
          description: event.target.description.value,
          id: this.state.jobs.length + 1,
          interested: [],
          pay: event.target.pay.value,
          title: event.target.title.value

        }, ...this.state.jobs]
    })
    console.log(event.target.title);
    console.log(this.state.jobs);
}

componentDidMount() {
  fetch('/listings.json')
  .then(response => response.json())
  .then(jobs => {
    this.setState({
    jobs: jobs
  })
})
}


render() {
  return (
    <div>
      <Header/>
      <main>
        <JobsList jobList={this.state.jobs}/>
      <Form jobList={this.state} formSubmitted={this.formSubmitted}/>
      </main>
      <Footer />
    </div>
  )}
}



export default App;
