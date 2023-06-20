import { useEffect } from "react";
import { useState } from "react";
import { Col, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./startAPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCaretDown,
  faClock,
  faCommentDots,
  faEarthAmericas,
  faEllipsis,
  faFaceSmile,
  faFile,
  faImage,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const StartAPost = () => {
  const [post, setPost] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const storeProfile = useSelector((state) => state.personal.personal);
  const [show, setShow] = useState(false);

  const optionsPost = {
    method: "POST",
    body: JSON.stringify({ text: post }),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWVmNGM5NmRmYjAwMTUyMWE1YjciLCJpYXQiOjE2NzA4MzU5NjcsImV4cCI6MTY3MjA0NTU2N30.3nMkP_psg7qh50FtCZmYQ_t60p-DJ4_w3p68wGvypoc",
    },
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePost = (e) => {
    setPost(e.target.value);
    console.log(post);
  };
  const submitPost = async () => {
    console.log(post);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        optionsPost
      );
      if (response.ok) {
        console.log("posted");
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserProfile(storeProfile);
  }, [storeProfile]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <span>Create a post</span>
        </Modal.Header>
        <Modal.Body>
          {userProfile && (
            <>
              <div className="d-flex">
                <img
                  src={userProfile.image}
                  alt=""
                  className="post-profile-img rounded-pill"
                />
                <div className="d-flex flex-column pl-1 ml-2">
                  <span>
                    {userProfile.name} {userProfile.surname}
                  </span>
                  <div
                    id="modal-who-can-see"
                    className="text-center d-flex justify-content-around align-items-center text-muted p-2"
                  >
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <span>Anyone</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  id="modal-textarea"
                  placeholder="What do you want to talk about?"
                  className="mt-3"
                  onChange={(e) => {
                    handlePost(e);
                  }}
                ></textarea>
                <div className="d-flex align-items-center">
                  <div
                    className="bg-dark rounded-circle d-flex justify-content-center align-items-center"
                    id="modal-smile-face"
                  >
                    <FontAwesomeIcon
                      icon={faFaceSmile}
                      className="text-light"
                    />
                  </div>
                  <div className="text-primary ml-3 p-2" id="modal-add-hashtag">
                    <span>Add hashtag</span>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="text-muted d-flex justify-content-between align-items-center flex-grow-1">
                  <div className="d-flex justify-content-center align-items-center modal-icons rounded-circle ">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                  <div className="d-flex justify-content-center align-items-center modal-icons rounded-circle ">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="d-flex justify-content-center align-items-center modal-icons rounded-circle ">
                    <FontAwesomeIcon icon={faFile} />
                  </div>
                  <div className="d-flex justify-content-center align-items-center modal-icons rounded-circle ">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>

                  <div className="d-flex justify-content-around align-items-center rounded-pill ">
                    <FontAwesomeIcon icon={faCommentDots} className="mr-1 " />
                    <span>Anyone</span>
                  </div>
                </div>
                <div className="d-flex flex-grow-1 text-muted justify-content-end align-items-center">
                  <div className="d-flex justify-content-center align-items-center modal-icons rounded-circle ">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <Button
                    variant="outline-secondary"
                    className="rounded-pill"
                    onClick={(handleClose, submitPost)}
                  >
                    Post
                  </Button>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
      <Col className="d-flex flex-column mx-auto px-3 py-2 start-post-card">
        {userProfile && (
          <div className="d-flex">
            <img
              src={userProfile.image}
              alt=""
              className="post-profile-img rounded-pill"
            />
            <Button
              className="post-module-button text-muted btn-light border-secondary flex-grow-1 text-left"
              onClick={handleShow}
            >
              Start a post
            </Button>
          </div>
        )}
        <div className="d-flex text-muted align-items-center justify-content-around">
          <div className="d-flex post-icons align-items-center justify-content-between">
            <FontAwesomeIcon icon={faImage} className="photo-icon" />
            <span className="ml-3">Photo</span>
          </div>
          <div className="d-flex  post-icons align-items-center justify-content-between">
            <FontAwesomeIcon icon={faYoutube} className="video-icon" />
            <span className="ml-3">Video</span>
          </div>
          <div className="d-flex  post-icons align-items-center justify-content-between">
            <FontAwesomeIcon icon={faCalendar} className="event-icon" />
            <span className="ml-3">Event</span>
          </div>
          <div className="d-flex  post-icons align-items-center justify-content-between">
            <FontAwesomeIcon icon={faNewspaper} className="article-icon" />
            <span className="ml-3">Write article</span>
          </div>
        </div>
      </Col>
    </>
  );
};
export default StartAPost;
