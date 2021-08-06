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
      .finally(
        lesson = course
      )
  }, [])

  course && console.log(course.myClasses);

  return (

    course ?
      <div>
        < h1 > {course.myClasses.title}</h1 >
        {for (lesson in course.myClasses.lessons) { } .map((lesson, index) => { return <Lesson lesson={lesson} key={index} /> })}
      </div >
      :
      <div>Kérem várjon, amíg a tananyag betöltődik</div>
  )
}

export default BasicCourse

