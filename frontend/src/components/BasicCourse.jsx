import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App';
import Lesson from './Lesson';

function BasicCourse(props) {
  const user = useContext(UserContext);

  const [course, setCourse] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  let lesson;
  console.log(user.email);

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

  return (

    course ?
      <div>
        < h1 > {course.title}</h1 >
        {course && course.lessons.map((lesson, index) => { return <Lesson title={lesson.title} text={lesson.text} key={index} index={index} classStatus={user.basic_class} /> })}
      </div >
      :
      <div>Kérem várjon, amíg a tananyag betöltődik</div>
  )
}

export default BasicCourse

