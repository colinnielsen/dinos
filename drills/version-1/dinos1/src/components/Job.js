import React from 'react'

const Job = (props) => {
  return(
    <li>
      <h4>{props.title}</h4>
      <small>{props.pay}</small>
      <p>{props.description}</p>
      <small>{props.interested.length} dinos are interested in this job</small>
    </li>
  )
}

export default Job;
