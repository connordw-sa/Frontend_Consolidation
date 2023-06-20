import { Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import SingleUserCard from "./SingleUserCard"
import { useEffect } from "react"
import { useState } from "react"

const SideProfiles = ({ Title, ButtonType, Users }) => {
  const [test, setTest] = useState([])

  useEffect(() => {
    console.log("sideprofiles", Users)
    setTest(Users)
  }, [Users])
  return (
    <div className="card ri-Card">
      <h6 className="ml-4 title-text my-4">{Title}</h6>

      <Row>
        {test &&
          test.length > 0 &&
          test
            .slice(0, 5)
            .map((singleuser) => (
              <SingleUserCard
                ButtonType={ButtonType}
                user={singleuser}
                key={singleuser._id}
              />
            ))}
      </Row>

      <hr />
      <div className="text-center">
        <h5 className="sh-more">
          {" "}
          Show More{" "}
          <span className=" mr-2 ">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </h5>
      </div>
    </div>
  )
}

export default SideProfiles
