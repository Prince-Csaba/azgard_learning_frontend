import React, { useState, useEffect } from 'react'
import Lesson from './Lesson';



function BasicCourse(props) {
  const [course, setCourse] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  let lesson;

  useEffect(() => {
    fetch('http://localhost:8000/api/classes')
      .then(res => res.json())
      .then(
        (result) => {
          setCourse(result);
          setIsLoaded(true);
        },

        (error) => {
          setError(true);
          setIsLoaded(true);
        }
      )
  }, [])

  course && console.log(course.myClasses.lessons);

  return (

    course ?
      <div>
        < h1 > {course.myClasses.title}</h1 >
        {course && course.myClasses.lessons.map((lesson, index) => { return <Lesson title={lesson.title} text={lesson.text} key={index} /> })}
      </div >
      :
      <div>Kérem várjon, amíg a tananyag betöltődik</div>
  )
}

export default BasicCourse

