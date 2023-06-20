import { Col } from "react-bootstrap";
import "./Css/style.css";
import { useEffect } from "react";
import SideProfiles from "./SideProfiles";
import CoursesLi from "./CoursesLi";
import AdProfiles from "./AdProfiles";
import EditAction from "./EditAction";
import { useState } from "react";

const SideColumn = () => {
  const [fetchedUsers, setFetchedUsers] = useState([]);

  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWY2ZGM5NmRmYjAwMTUyMWE1YjgiLCJpYXQiOjE2NzA4MzYwNzcsImV4cCI6MTY3MjA0NTY3N30.iPXxinNDpNgfXOyVAki0XYJpvwtS7YPdy1rJq81uK78",
    },
  };

  useEffect(() => {
    console.log("SideColumn", fetchedUsers);
  }, [fetchedUsers]);
  const getRandomUser = async () => {
    console.log("Fetching user profiles from API...");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        options
      );
      if (response.ok) {
        let fetchedUsers = await response.json();
        let random = fetchedUsers.sort(() => 0.5 - Math.random()).slice(0, 10);
        setFetchedUsers(random);
      } else {
        console.log("error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Col className="mt-5">
        <div className="side-column">
          <EditAction />
          <AdProfiles />
          <SideProfiles
            Title={"People also viewed"}
            ButtonType={"Message"}
            Users={fetchedUsers.slice(0, 5)}
          />
          <SideProfiles
            Title={"People you may know"}
            ButtonType={"Connect"}
            Users={fetchedUsers.slice(5, 10)}
          />

          <CoursesLi />
        </div>
      </Col>
    </>
  );
};

export default SideColumn;
