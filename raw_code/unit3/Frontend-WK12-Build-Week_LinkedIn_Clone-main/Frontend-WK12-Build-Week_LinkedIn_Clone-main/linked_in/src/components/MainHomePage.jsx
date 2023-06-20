import { Row, Col } from "react-bootstrap"
import LeftHomeCards from "./Homepage/LeftHomeCards"
import RightHomeCards from "./Homepage/RightHomeCards"
import MainPostsContainer from "./Homepage/MainPostsContainer"

const MainHomePage = () => {
  return (
    <Row>
      <Col md={3}>
        <LeftHomeCards />
      </Col>
      <Col md={6}>
        <MainPostsContainer />
      </Col>
      <Col md={3}>
        <RightHomeCards />
      </Col>
    </Row>
  )
}
export default MainHomePage
