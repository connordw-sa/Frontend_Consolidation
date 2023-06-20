import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/favourites";

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}> {data.company_name} </Link>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
      <button
        className="btn btn-primary btn-sm float-right"
        onClick={useDispatch.binddispatch(add(data))}
      >
        like
      </button>
    </Col>
  </Row>
);

export default Job;
