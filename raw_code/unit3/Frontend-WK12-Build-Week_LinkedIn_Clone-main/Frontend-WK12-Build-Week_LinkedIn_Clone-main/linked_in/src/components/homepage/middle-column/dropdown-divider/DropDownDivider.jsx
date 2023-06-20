import { Dropdown, DropdownButton, Col } from "react-bootstrap";
import "./dropDownDivider.css";

const DropDownDivider = () => {
  return (
    <Col className="mx-auto  p-0 d-flex">
      <hr className="hr-divider"></hr>
      <DropdownButton
        variant="outline-secondary"
        title="Sort by:"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </DropdownButton>
    </Col>
  );
};
export default DropDownDivider;
