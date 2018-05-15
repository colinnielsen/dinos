import React from 'react'

const JobDetails = (props) => {

  return(
    <section id="job-details">
      <h2>Job Details</h2>
      <h4>{props.jobs.jobs.title}</h4>
      <p>{props.jobs.jobs.description}</p>
    </section>
  )
}



export default JobDetails
