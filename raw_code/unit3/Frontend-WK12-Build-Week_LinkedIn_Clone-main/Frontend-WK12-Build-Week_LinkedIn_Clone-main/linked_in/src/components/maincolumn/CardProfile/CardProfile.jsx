import { Button, Col, Row } from "react-bootstrap";
import "./CardProfile.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CardProfile = () => {
  const [profile, setProfile] = useState([]);
  const selectedProfile = useSelector((state) => state.profile.profile);

  useEffect(() => {
    fetchCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProfile(selectedProfile);
  }, [selectedProfile]);

  const fetchCurrentProfile = async () => {
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
        "https://striveschool-api.herokuapp.com/api/profile/" + profile._id,
        options
      );
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-light mt-4 pb-4 CardProfileClass">
      {profile && (
        <Col className="p-0">
          <img className="CardProfileBGImg" src={profile.image} alt="alt" />
          <img
            src={profile.image}
            alt="alt"
            className="CardProfileImg rounded-circle border border-light"
          />
          <Button className="float-right m-4 PencilButton rounded-circle">
            <FontAwesomeIcon icon={faPencil} className="text-dark" />
          </Button>

          <Col className="mt-5 ml-3">
            <h2>
              {profile.name} {profile.surname}
            </h2>
            <h5>{profile.title}</h5>
            <p className="text-muted">
              {profile.area} •
              <span className="text-primary ml-2">Contact Info</span>
            </p>
            <p className="text-primary">136 connections</p>
            <p>{profile.bio}</p>
            <Row>
              <Button className="ProfileCardButtonsOne mx-2 px-3">
                Open to
              </Button>
              <Button className="ProfileCardButtonsTwo btn-light border-primary text-primary">
                Add profile section
              </Button>
              <Button className="ProfileCardButtonsThree text-muted btn-light border-secondary">
                More
              </Button>
            </Row>
          </Col>
        </Col>
      )}
    </div>
  );
};

export default CardProfile;
