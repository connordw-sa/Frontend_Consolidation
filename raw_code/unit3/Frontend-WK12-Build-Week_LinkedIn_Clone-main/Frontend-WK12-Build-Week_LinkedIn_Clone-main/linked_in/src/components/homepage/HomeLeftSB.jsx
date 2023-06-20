import React from "react"
import "./css/index.css"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"

const HomeLeftSB = () => {
  const storeProfile = useSelector((state) => state.personal.personal)
  const [personalProfile, setPersonalProfile] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    setPersonalProfile(storeProfile)
  }, [storeProfile])

  return (
    <>
      {personalProfile && (
        <div className="card">
          <div className="d-flex justify-content-center profile-cover">
            <img
              className="profile-pics"
              src={personalProfile.image}
              alt="Profile Pic"
              onClick={() => navigate("/profile-page")}
            />
          </div>

          <div className="card-body">
            <div className=" bio-content  ">
              <Link to="/profile-page" className="name-Link">
                <div className="mt-4 d-flex justify-content-center ml-2 p-name">
                  {personalProfile.name} {personalProfile.surname}
                </div>
              </Link>
              <p className="d-flex headline pl-2 justify-content-center">
                {" "}
                {personalProfile.bio}
              </p>
            </div>
            <hr />
            <div>
              <span className="viewed"> Who's viewed your profile </span>
              <span className="spn">30</span>
            </div>
            <div>
              <span className="i-post">Impressions of your post </span>
              <span className="spn"> 130</span>
            </div>
            <hr />
            <div>
              <p className="acc mb-0">Access exclusive tools & insights</p>
              <p className="getH">Get Hired Faster, Try Premium Free</p>
            </div>
            <hr />
            <div>
              <span>
                <FontAwesomeIcon icon={faBookmark} />
                <span className="spn-item ml-2"> My items</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HomeLeftSB
