import React from 'react'

function Lesson(props) {
  return (
    <div className="lesson">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Lesson
