import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons"

const EditAction = () => {
  return (
    <div className="card ri-Card">
      <p className="d-flex justify-content-center mt-3 mb-1">
        {" "}
        Edit public profile & URL{" "}
        <span className="c-question ">
          <FontAwesomeIcon icon={faCircleQuestion} />
        </span>
      </p>
      <hr />
      <p className="d-flex justify-content-center">
        {" "}
        Add profile in another language{" "}
        <span className="ml-5">
          <FontAwesomeIcon icon={faCircleQuestion} />
        </span>
      </p>
    </div>
  )
}

export default EditAction
