import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-100 d-flex justify-content-between">
      <Button onClick={() => navigate("/")}>Day 1</Button>
      <Button onClick={() => navigate("/day2")}>Day 2</Button>
      <Button onClick={() => navigate("/day3")}>Day 3</Button>
      <Button onClick={() => navigate("/day4")}>Day 4</Button>
    </div>
  );
}
