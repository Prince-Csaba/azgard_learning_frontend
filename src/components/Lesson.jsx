import React, { useState, useContext } from 'react'
import { UserContext } from '../App';
import axios from 'axios';


function Lesson(props) {
  console.log(props.changed)

  const user = useContext(UserContext);

  const [opened, setOpened] = useState(false);

  let lessonStatus = props.progress[props.index];

  const lessonProgress = () => {
    props.setProgress(props.progress[props.index] = "Done")
    props.setProgress(props.progress[props.index + 1] = "Act")
    console.log(props.progress)

    axios
      .post('http://localhost:8000/api/setprogress', {
        email: user.email,
        progress: props.progress
      })
      .then((res) => {
        console.log(`Request sent`)
        props.setChanged(!props.changed);
        console.log(props.changed)
      })
      .catch((err) => console.log(err.response));
  }


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
            <button onClick={() => lessonProgress()}>Kész</button>
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
