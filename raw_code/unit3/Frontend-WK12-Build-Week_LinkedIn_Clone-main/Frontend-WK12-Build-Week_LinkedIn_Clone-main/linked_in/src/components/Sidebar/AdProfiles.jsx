import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Button } from "react-bootstrap"

const AdProfiles = () => {
  const storeProfile = useSelector((state) => state.personal.personal)
  const [personalProfile, setPersonalProfile] = useState(null)

  useEffect(() => {
    setPersonalProfile(storeProfile)
  }, [storeProfile])

  return (
    <>
      {personalProfile && (
        <div className="card ri-Card">
          <span className="d-flex ad mr-3 mt-2">
            Ad
            <span className="ml-2">
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </span>
          <p className="f-size text-center mt-3 mb-0">
            Get the latest jobs and industry news
          </p>
          <div className="p-Image">
            <div>
              <img
                className="profile-pics"
                src={personalProfile.image}
                alt="Profile Pic"
              />
            </div>
            <div className="mt-4">
              <img
                className="company-pics"
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQF6qs0q9CtLkw/company-logo_100_100/0/1653290004581?e=1678924800&v=beta&t=ezD9d1g7lZb7xrY0CKpRUE-v5eJS7QHKIviiI1oipaE"
                alt="company pic"
              />
            </div>
          </div>
          <h6 className=" e-text text-center mt-3 mb-0">
            Victor, explore relevant opportunities with <b>Mercuri Urval</b>
          </h6>
          <Button id="f-button" className=" mb-3">
            Follow
          </Button>
        </div>
      )}
    </>
  )
}

export default AdProfiles
