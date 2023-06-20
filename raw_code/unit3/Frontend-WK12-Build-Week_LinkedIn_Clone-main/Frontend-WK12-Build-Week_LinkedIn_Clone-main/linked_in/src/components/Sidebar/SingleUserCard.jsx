import { Col, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const SingleUserCard = ({ ButtonType, user }) => {
  return (
    <>
      <Col className="col-3">
        <img className="pics ml-4" src={user.image} alt="" />
      </Col>
      <Col className="col-9">
        <p className="user-name mb-0">
          {" "}
          {user.name} {user.surname}{" "}
        </p>
        <p className="mt-0 u-title">{user.title}</p>

        {ButtonType === "Connect" ? (
          <Button className="c-connect mb-3"> Connect</Button>
        ) : (
          <Button className="m-button mb-3 ">
            <span className="mr-2">
              <FontAwesomeIcon icon={faPaperPlane} /> Message
            </span>
          </Button>
        )}
      </Col>
      <hr />
    </>
  )
}

export default SingleUserCard
