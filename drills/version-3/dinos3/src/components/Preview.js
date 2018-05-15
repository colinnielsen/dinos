import React from 'react'

const Preview = (props) =>{

    return (
      <div>
        <button onClick={props.showPreview} id="preview-toggle">Show Preview</button>
        <section id="application-preview" className={props.statefulClassName}>{props.messageContent}</section>
      </div>
    )

}

export default Preview
