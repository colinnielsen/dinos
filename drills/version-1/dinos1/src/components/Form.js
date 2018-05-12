import React from 'react'


const Form = (props) => {
  
  return (
    <aside id="side-bar">
      <h3>Add a Job</h3>
    <form onSubmit={props.formSubmitted} className="job-form">
          <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          <label htmlFor="pay">Compensation</label>
            <input type="text" name="pay" />
          <label htmlFor="description">Description</label>
            <textarea name="description" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit"/>
      </form>
    </aside>
  )
}

export default Form
