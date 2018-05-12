import React from 'react'
import Job from './Job.js'
const JobsList = (props) => {
  // console.log(props.jobList);
  const allTheJobs = props.jobList.map(job => {
    return <Job key={job.id}
                title={job.title}
                pay={job.pay}
                description={job.description}
                interested ={job.interested} />
  })

  return(
    <section>
      <h2>Job Listings</h2>
      <ul id="job-listings">
          {allTheJobs}
      </ul>
    </section>

  )
}
export default JobsList
