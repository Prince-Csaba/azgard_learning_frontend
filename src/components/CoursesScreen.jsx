import { useState, useEffect } from 'react';
import Course from './BasicCourse';


function CoursesScreen() {
  const [courses, setCourses] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isLong, setIsLong] = useState(false);

  useEffect(() => {
    fetch('process.env.server/old')
      .then(res => res.json())
      .then(
        (result) => {
          setCourses(result);
          setIsLoaded(true);
        },

        (error) => {
          setError(true);
          setIsLoaded(true);
        }
      )
  }, [])

  return (
    <div>
      <h1>
        Üdvözlünk a képzési rendszerünkben.
      </h1>
      <h2>
        Alább láthatod az aktuális képzéseket.
      </h2>
      <div className="sort">
        Kurzusok:
        <label className="checkSpan">
          Elérhetőség:
          <input type="checkbox" onClick={() => { setIsAvailable(!isAvailable) }} />
        </label>
        <label className="checkSpan">
          Hosszú kurzusok:
          <input type="checkbox" onClick={() => { setIsLong(!isLong) }} />
        </label>
      </div>
      {isLoaded && !error && !isAvailable && !isLong && courses.courses.map((course, index) => { return <Course course={course} key={index} /> })}
      {isLoaded && !error && isAvailable && !isLong && courses.courses.filter(course => { return course.av === "yes" }).map((course, index) => { return <Course course={course} key={index} /> })}
      {isLoaded && !error && isLong && !isAvailable && courses.courses.filter(course => { return parseInt(course.length) > 35 }).map((course, index) => { return <Course course={course} key={index} /> })}
      {isLoaded && !error && isLong && isAvailable && courses.courses.filter(course => { return course.av === "yes" }).filter(course => parseInt(course.length) > 35).map((course, index) => { return <Course course={course} key={index} /> })}
    </div>
  )
}

export default CoursesScreen;