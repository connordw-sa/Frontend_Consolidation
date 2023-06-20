import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";
import "./recommended.css";
import RecommendedCard from "./RecommendedCard";
import { useState, useEffect } from "react";

const Recommended = () => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWVmNGM5NmRmYjAwMTUyMWE1YjciLCJpYXQiOjE2NzA4MzU5NjcsImV4cCI6MTY3MjA0NTU2N30.3nMkP_psg7qh50FtCZmYQ_t60p-DJ4_w3p68wGvypoc",
    },
  };
  useEffect(() => {
    getRandomUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomUser = async () => {
    console.log("Fetching user profiles from API...");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        options
      );
      if (response.ok) {
        let fetchedUsers = await response.json();
        let random = fetchedUsers.sort(() => 0.5 - Math.random()).slice(0, 3);
        setFetchedUsers(random);
      } else {
        console.log("error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Col className="mx-auto  p-0">
      <div className="recommended-card">
        <div className="d-flex justify-content-between px-3 align-items-center">
          <span>Recommended for you</span>
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
        <div className="dropdown-divider"></div>
        {fetchedUsers.length > 0 &&
          fetchedUsers.map((user) => (
            <>
              <RecommendedCard user={user} />
              <div className="dropdown-divider"></div>
            </>
          ))}

        <div className="d-flex justify-content-center align-items-center">
          <span>Show more</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </div>
      </div>
    </Col>
  );
};
export default Recommended;
