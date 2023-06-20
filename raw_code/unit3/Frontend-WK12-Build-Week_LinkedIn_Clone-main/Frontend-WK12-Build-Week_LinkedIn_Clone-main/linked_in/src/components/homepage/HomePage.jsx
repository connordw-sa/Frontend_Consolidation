import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToPosts } from "../../redux/actions";
import { Row, Col, Spinner } from "react-bootstrap";
import LeftHomeCards from "./LeftHomeCards";
import DropDownDivider from "./middle-column/dropdown-divider/DropDownDivider";

import StartAPost from "./middle-column/home-page-post/StartAPost";
import PostCard from "./middle-column/post-card/PostCard";
import Recommended from "./middle-column/recommended/Recommended";
import RightHomeCards from "./RightHomeCards";

const HomePage = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const storePosts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(addToPosts());
  }, []);

  useEffect(() => {
    setPosts(storePosts);
  }, [storePosts]);

  return (
    <>
      <Row className="mt-4">
        <Col md={3}>
          <LeftHomeCards />
        </Col>
        <Col xs={6}>
          <StartAPost />
          <DropDownDivider />
          <Recommended />
          {posts.length > 0 ? (
            posts
              .reverse()
              .map((post) => <PostCard singlePost={post} key={post._id} />)
          ) : (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <Spinner animation="border" variant="secondary" />
            </div>
          )}
        </Col>
        <Col md={3}>
          <RightHomeCards />
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
