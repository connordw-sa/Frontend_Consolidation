import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "./recommended.css";
import { useState } from "react";
import { useEffect } from "react";

const RecommendedCard = ({ user }) => {
  const [singleUser, setSingleUser] = useState(null);
  useEffect(() => {
    setSingleUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex recommended-user-card justify-content-between align-items-center px-3 py-2">
      {singleUser && (
        <>
          <img
            src={singleUser.image}
            alt="user-profile-icon"
            className="recommended-profile-image rounded-circle"
          />
          <div>{singleUser.bio}</div>
          <Button>
            Follow
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </>
      )}
    </div>
  );
};
export default RecommendedCard;
