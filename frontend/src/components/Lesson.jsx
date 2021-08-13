import React, { useState } from 'react'

function Lesson(props) {
  const [opened, setOpened] = useState(false);

  let lessonStatus = props.classStatus.thisUser[props.index];

  return (
    lessonStatus === "Done" ?
      <div className="lesson done">
        <h3>{props.title} <span>(kész)</span></h3>
        <p className={opened ? "opened" : ""}>{props.text}</p>
        <button onClick={() => setOpened(!opened)}><strong>▼</strong></button>
      </div >
      :
      lessonStatus === "Act" ?
        <div className="lesson">
          <h3>{props.title}</h3>
          <p className={opened ? "opened" : ""}>{props.text}</p>
          {opened &&
            <button onClick={console.log("Done")}>Kész</button>
          }
          <button onClick={() => setOpened(!opened)}><strong>▼</strong></button>
        </div>
        :
        <div className="lesson next">
          <h3>{props.title}</h3>
          <p className={opened ? "opened" : ""}>{props.text}</p>
        </div>
  )
}

export default Lesson
