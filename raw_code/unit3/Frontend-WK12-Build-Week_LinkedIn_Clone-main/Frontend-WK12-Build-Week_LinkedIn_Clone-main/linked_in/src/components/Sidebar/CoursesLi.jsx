import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const CoursesLi = () => {
  return (
    <div className="card ri-Card">
      <div className="mt-2 ml-3">
        <span className="l-text">
          <FontAwesomeIcon icon={faLinkedin} /> LEARNING
        </span>
      </div>
      <p className="learn ml-3">
        Learn what hiring managers look for in answers to interview questions
      </p>
      <Row>
        <div className="d-flex">
          <Col className="col-3">
            <img
              className="photo"
              src="https://media.licdn.com/media/AAUQAgROAAgAAQAAAAAAAAAQAAAAJGQzNTQwOWIyLTk1MTUtNGFkZC05ZjM0LTFmMzhhOGMxNDNmZA.png"
              alt=""
            />
          </Col>
          <Col className="col-9">
            <p className="l-text"> Describe your most challenging project.</p>
            <hr />
          </Col>
        </div>
        <div className="d-flex">
          <Col className="col-3">
            <img
              className="photo"
              src="https://media.licdn.com/media/AAUQAgROAAgAAQAAAAAAAAR9AAAAJDY5OTA3MmJhLWFkNDAtNDJkMi05OWJhLWViM2UwMjI3YWRiZQ.png"
              alt=""
            />
          </Col>
          <Col className="col-9">
            <p className="l-text"> Describe your core team project strength.</p>
            <hr />
          </Col>
        </div>

        <p className="q-text"> See all questions </p>
      </Row>
    </div>
  )
}

export default CoursesLi
