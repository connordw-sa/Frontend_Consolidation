import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import "./CardExperience.css";

// const CardExperience = () => {
//   // const [personal, setPersonal] = useState([]);

//   const [profile, setProfile] = useState([]);
//   const [experience, setExperience] = useState([]);
//   const selectedProfile = useSelector((state) => state.profile.profile);
//   // const selectedPersonal = useSelector((state) => state.profile.personal);

const CardExperience = () => {
  const [profile, setProfile] = useState([]);
  const [experience, setExperience] = useState([]);
  const selectedProfile = useSelector((state) => state.profile.profile);

  useEffect(() => {
    fetchCurrentExperience();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProfile(selectedProfile);
    setExperience(selectedProfile.experience);
  }, [selectedProfile]);

  const fetchCurrentExperience = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWY5MmM5NmRmYjAwMTUyMWE1YjkiLCJpYXQiOjE2NzA4MzYxMTQsImV4cCI6MTY3MjA0NTcxNH0.qe0nDUl9uPTtcEmF-wqnVpISfGxh82rlv4qLmoUT3Ik"
        }
      };
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          profile._id +
          "/experiences",
        options
      );
      if (response.ok) {
        const data = await response.json();
        setExperience(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-light mt-5 CardExperience">
      <Col>
        <Row className="ml-2 pt-4 mb-2 justify-content-between">
          <h3>Experience</h3>
          <Row className="mr-2">
            <Button className="bg-light rounded-circle mx-3 text-secondary PlusPencil">
              <FontAwesomeIcon icon={faPencil} />
            </Button>
          </Row>
        </Row>
        {experience &&
          experience.map((exp) => (
            <>
              <div className="media" key={exp.id}>
                <img
                  className="d-flex mr-3 ExperienceMediaPic"
                  src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                  alt="Generic placeholder"
                />
                <div className="media-body">
                  <h5 className="mt-0 mb-3">
                    {exp.company} {exp.role}
                  </h5>
                  <span className="ExperienceMediaDetails">
                    <p>{exp.description}</p>
                    <p>{exp.startDate}</p>
                    <p>{exp.area}</p>
                  </span>
                </div>
              </div>
              <hr />
            </>
          ))}
      </Col>
    </div>
  );
};

export default CardExperience;
