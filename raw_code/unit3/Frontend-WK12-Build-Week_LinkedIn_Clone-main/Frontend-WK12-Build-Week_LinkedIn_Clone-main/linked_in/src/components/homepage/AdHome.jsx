import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

const AdHome = () => {
  const storeProfile = useSelector((state) => state.personal.personal)
  const [personalProfile, setPersonalProfile] = useState(null)

  useEffect(() => {
    setPersonalProfile(storeProfile)
  }, [storeProfile])

  return (
    <>
      {personalProfile && (
        <div className="card rightCard ad-sticky">
          <span className="d-flex ad mr-3 mt-2">
            Ad
            <span className="ml-2">
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </span>
          <p className="f-size text-center">
            Reactivate your Premium free trail today!
          </p>
          <div className="adImage">
            <span>
              <img
                className="a-pics"
                src={personalProfile.image}
                alt="Profile Pic"
              />
            </span>

            <span>
              <img
                className="link-pics"
                src="https://media.licdn.com/dms/image/C4E0EAQElWt4fvMOIcQ/rightRail-logo-shrink_200_200/0/1631008652608?e=1671710400&v=beta&t=GJaWlrUDIUXXzBMWJmw9xTlMLwO9TwziJpx1Syasfk8"
                alt="company pic"
              />
            </span>
          </div>
          <h6 className="text-center my-2 v-font">
            See who's viewed your profile in the last 90 days
          </h6>
          <Button id="r-button" className="mb-3">
            Reactivate Trial
          </Button>
        </div>
      )}
    </>
  )
}

export default AdHome
