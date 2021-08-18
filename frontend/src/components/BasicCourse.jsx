import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App';
import Lesson from './Lesson';
import axios from 'axios';

function BasicCourse(props) {
  const user = useContext(UserContext);

  const [course, setCourse] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const [progress, setProgress] = useState("start");
  const [changed, setChanged] = useState(false);

  let lesson;
  console.log(user.email);

  useEffect(() => {
    axios
      .post('http://localhost:8000/api/progress', user.email)
      .then((res) => {
        setProgress(res.data)
        console.log(`This is the user progress: ${res.data}`)
      })
      .catch((err) => console.log(err.response));
  }, [changed])

  useEffect(() => {
    fetch('http://localhost:8000/api/lessons')
      .then(res => res.json())
      .then(
        (result) => {
          setCourse(result.myClasses);
          setIsLoaded(true);
        },

        (error) => {
          setError(true);
          setIsLoaded(true);
        }
      )
  }, [])

  progress && console.log(progress);

  return (

    course ?
      <div>
        < h1 className="title"> {course.title}</h1 >
        {course && course.lessons.map((lesson, index) => { return <Lesson title={lesson.title} text={lesson.text} key={index} index={index} progress={progress} setProgress={setProgress} changed={changed} setChanged={setChanged} /> })}
      </div >
      :
      <div>Kérem várjon, amíg a tananyag betöltődik</div>
  )
}

export default BasicCourse

