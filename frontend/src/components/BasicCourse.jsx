import React, { useState, useEffect } from 'react'
import Lesson from './Lesson';



function BasicCourse(props) {
  const [course, setCourse] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  let lesson;
  console.log(props.user);

  useEffect(() => {
    fetch('http://localhost:8000/api/classes')
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

  return (

    course ?
      <div>
        < h1 > {course.title}</h1 >
        {course && course.lessons.map((lesson, index) => { return <Lesson title={lesson.title} text={lesson.text} key={index} index={index} classStatus={props.user} /> })}
      </div >
      :
      <div>Kérem várjon, amíg a tananyag betöltődik</div>
  )
}

export default BasicCourse

