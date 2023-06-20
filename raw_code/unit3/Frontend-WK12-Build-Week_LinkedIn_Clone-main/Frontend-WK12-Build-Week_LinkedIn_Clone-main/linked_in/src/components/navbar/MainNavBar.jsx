import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBriefcase,
  faCommentDots,
  faHome,
  faListDots,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { addToPersonal } from "../../redux/actions";
import SearchBar from "./SearchBar";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const MainNavBar = () => {
  const profile = useSelector((state) => state.personal.personal);
  const [personalProfile, setPersonalProfile] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(addToPersonal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPersonalProfile(profile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personalProfile]);

  return (
    <div className="bg-light">
      <Container className="d-flex">
        <div className="flex-grow-1">
          <Navbar bg="light" expand="lg" className="main-navbar-font">
            <Navbar.Brand href="#home" className="mr-2">
              <img
                className="navbar-linkedin-logo"
                src="https://w7.pngwing.com/pngs/329/312/png-transparent-in-logo-linkedin-computer-icons-social-media-professional-network-service-youtube-linkedin-miscellaneous-blue-angle.png"
                alt="linkedin logo"
              />
            </Navbar.Brand>
            <SearchBar />
            <div className="d-flex flex-column justify-content-center align-items-center mx-3 text-secondary cursor-pointer d-sm-block d-xl-none">
              <FontAwesomeIcon className="navbar-icons" icon={faSearch} />
              <p className="mb-0">Search</p>
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center mx-3 text-secondary cursor-pointer"
              onClick={() => navigate("/")}
            >
              <FontAwesomeIcon className="navbar-icons" icon={faHome} />
              <p className="mb-0">Home</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mx-3 text-secondary cursor-pointer">
              <FontAwesomeIcon className="navbar-icons" icon={faUserGroup} />
              <p className="mb-0">My Network</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mx-3 text-secondary cursor-pointer">
              <FontAwesomeIcon className="navbar-icons" icon={faBriefcase} />
              <p className="mb-0">Jobs</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mx-3 text-secondary cursor-pointer">
              <FontAwesomeIcon className="navbar-icons" icon={faCommentDots} />
              <p className="mb-0">Messaging</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mx-3 text-secondary cursor-pointer">
              <FontAwesomeIcon className="navbar-icons" icon={faBell} />
              <p className="mb-0">Notifications</p>
            </div>
            <Nav className="mr-auto p-0">
              <div className="d-flex flex-column justify-content-center align-items-center cursor-pointer">
                <img
                  className="navbar-profile-picture rounded-circle"
                  src={profile.image}
                  alt=""
                />
                <NavDropdown title="Me" id="basic-nav-dropdown1 ">
                  <div className="d-flex mx-auto">
                    {" "}
                    <img
                      className="navbar-profile-picture2 rounded-circle ml-2"
                      src={profile.image}
                      alt=""
                    />
                    <div className="mx-2">
                      <h5 className="my-0">
                        {profile.name} {profile.surname}
                      </h5>
                      <p className="my-0">--</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button
                      className="mx-2 my-2 navbar-show-profile"
                      variant="outline-primary"
                      onClick={() => navigate("/profile-page")}
                    >
                      <span className="mb-2">Show Profile</span>
                    </Button>
                  </div>
                  <div className="dropdown-divider"></div>
                  <h6 className="ml-4">Account</h6>
                  <NavDropdown.Item href="#action/3.1">
                    <b>Try Premium Free</b>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Settings and Privacy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Guide</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Language
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h6 className="ml-4">Gestisci</h6>
                  <NavDropdown.Item href="#action/3.5">
                    Posts & Activity
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    Job Posting Account
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.7" className="mb-1">
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>{" "}
          </Navbar>
        </div>
        <div className="d-flex justify-content-center align-items-center text-secondary bg-light border-left px-2 cursor-pointer">
          <Nav className="mr-auto p-0">
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <FontAwesomeIcon icon={faListDots} className="navbar-icons" />
              <NavDropdown title="Work" id="basic-nav-dropdown2">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </div>

        <a
          className="d-flex justify-content-center align-items-center text-secondary bg-light px-2 text-warning "
          href="#"
        >
          <u>Try Free Premium</u>
        </a>
      </Container>
    </div>
  );
};
export default MainNavBar;
