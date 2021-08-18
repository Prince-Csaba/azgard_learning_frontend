import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App';
import Lesson from './Lesson';
import axios from 'axios';

function BasicCourse(props) {
  const user = useContext(UserContext);

  const [course, setCourse] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const [lessonStatus, setLessonstatus] = useState(user.basic_class);

  let lesson;
  console.log(user.google_id);

  const getProgress = () => {
    axios
      .post('http://localhost:8080/api/progress', user.google_id)
      .then((res) => {
        setLessonstatus(res.data)
        console.log(`This is the user progress:  ${res.data}`)
      })
      .catch((err) => console.log(err.response));
  }

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

  course && console.log(course);
  lessonStatus && console.log(lessonStatus);

  return (

    course ?
      <div>
        This are the lessons
        {/*         < h1 > {course.title}</h1 >
        {course && course.lessons.map((lesson, index) => { return <Lesson title={lesson.title} text={lesson.text} key={index} index={index} classStatus={user.basic_class} /> })} */}
      </div >
      :
      <div>Kérem várjon, amíg a tananyag betöltődik</div>
  )
}

export default BasicCourse

