import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import "./post-card.css";
import {
  faCommentDots,
  faEllipsis,
  faPaperPlane,
  faRepeat,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const PostCard = ({ singlePost }) => {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    post && setUser(post.user);
  }, [post]);

  useEffect(() => {
    setPost(singlePost);
  }, [singlePost]);

  const randomNumber = () => {
    return Math.floor(Math.random() * (200 - 1 + 1) + 1);
  };

  return (
    <Col className="d-flex flex-column mx-auto px-3 py-2 start-post-card post-card mt-3">
      {user && (
        <>
          <div className="d-flex">
            <img
              src={user.image}
              alt=""
              className="post-profile-img rounded-circle"
            />
            <div className="d-flex justify-content-between flex-grow-1 ml-2">
              <div>
                <h6>{post.username}</h6>
                <span>{user.title}</span>
              </div>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <p className="mt-3 ">{post.text}</p>
          <div className="d-flex justify-content-between">
            <div>
              <FontAwesomeIcon icon={faThumbsUp} />
              {randomNumber()}
            </div>
            <div>{randomNumber()} reposts</div>
          </div>
          <div className="dropdown-divider"></div>
          <div className="d-flex justify-content-around">
            <div className="d-flex justify-content-center align-items-center text-muted post-card-icons">
              <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
              <div>Like</div>
            </div>
            <div className="d-flex justify-content-center align-items-center text-muted post-card-icons">
              <FontAwesomeIcon icon={faCommentDots} className="mr-2" />
              <div>Comment</div>
            </div>
            <div className="d-flex justify-content-center align-items-center text-muted post-card-icons">
              <FontAwesomeIcon icon={faRepeat} className="mr-2" />
              <div>Repost</div>
            </div>
            <div className="d-flex justify-content-center align-items-center text-muted post-card-icons">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              <div>Send</div>
            </div>
          </div>
        </>
      )}
    </Col>
  );
};
export default PostCard;
