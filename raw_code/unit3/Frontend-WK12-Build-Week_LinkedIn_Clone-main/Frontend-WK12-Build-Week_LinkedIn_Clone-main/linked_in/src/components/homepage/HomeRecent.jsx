import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faHashtag, faUsers } from "@fortawesome/free-solid-svg-icons"

const HomeRecent = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p>Recent</p>
        <div></div>
        <p className="side-header">
          Groups
          <span></span>
        </p>
        <div>
          <div className="r-font">
            {" "}
            <span className="mr-2">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            HR Nigeria.com{" "}
          </div>
          <div className="r-font">
            {" "}
            <span className="mr-2">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            HR Jobs{" "}
          </div>
          <div className="r-font">
            {" "}
            <span className="mr-2">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            Next Big Thing Fellows{" "}
          </div>
          <div className="r-font">
            {" "}
            <span className="mr-2">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            FastEd Global Leaders{" "}
          </div>
          <div className="r-font">
            {" "}
            <span className="mr-2">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            Software Developers{" "}
          </div>
          <p className="see-all"> See all</p>
        </div>
        <p className="d-flex justify-content-between side-header">
          Events{" "}
          <span className="mr-2">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </p>
        <p className="side-header">Followed Hashtags</p>
        <div>
          <div className="r-font">
            {" "}
            <span className="mr-2">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
            HR Fellow.com
          </div>
          <div className="r-font">
            {" "}
            <span className="mr-2">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
            HR Jobs
          </div>
          <div className="r-font">
            {" "}
            <span className="mr-2">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
            Next Big Thing Fellows
          </div>
          <div className="r-font">
            {" "}
            <span className="mr-2">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
            FastEd Global Leaders
          </div>
          <p className="see-all mt-1"> See all</p>
        </div>
        <hr />
        <div className="disc">Discover more</div>
      </div>
    </div>
  )
}

export default HomeRecent
