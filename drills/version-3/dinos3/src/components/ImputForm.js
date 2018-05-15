import React from 'react'

const ImputForm = (props) => {

  return(
  <form onSubmit={props.submitApplication} id="application-input">
    <label>Apply Here: </label>
    <textarea value={props.messageContent} onChange={props.updatePreview} id="application-text" rows="8" cols="100"></textarea>
    <input id="submit" type="submit" value="Submit" />
    <p id="message">{props.submitMessage}</p>
  </form>

)}

export default ImputForm
