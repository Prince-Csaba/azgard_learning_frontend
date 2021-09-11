import React from 'react'
import { Container, Card } from 'react-bootstrap';

function Course(props) {
  console.log(props.course.length);
  return (
    props.course.av === "yes" ?
      <>
        <div className="course">
          <div>
            {props.course.title}
          </div>
          <div className="details">
            <div>
              {props.course.recommended === "yes" ? "Ajánlott" : "Nem ajánlott"}
            </div>
            {props.course.status === "done" ?
              <div className="green">
                Elvégezve
              </div>
              :
              <div className="red">
                Nem volt elkezdve
              </div>
            }
            <div>
              Időtartam: {props.course.length} óra
            </div>
          </div>
        </div>
      </>
      :
      <>
        <div className="course notAv">
          <div>
            {props.course.title}
          </div>
          <div className="details">
            <div>
              {props.course.recommended === "yes" ? "Ajánlott" : "Nem ajánlott"}
            </div>
            <div>
              {props.course.status === "done" ? "Elvégezve" : "Nem volt elkezdve"}
            </div>
            <div>
              Időtartam: {props.course.length}
            </div>
          </div>
        </div>
      </>
  )
}

export default Course;
