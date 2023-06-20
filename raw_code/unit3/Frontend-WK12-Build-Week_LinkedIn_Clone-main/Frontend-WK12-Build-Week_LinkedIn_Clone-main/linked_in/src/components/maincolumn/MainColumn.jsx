import CardProfile from "./CardProfile/CardProfile"
import CardAnalytics from "./CardAnalytics/CardAnalytics"
import CardResources from "./CardResources/CardResources"
import CardAbout from "./CardAbout/CardAbout"
import CardActivity from "./CardActivity/CardActivity"
import CardExperience from "./CardExperience/CardExperience"
import CardEducation from "./CardEducation/CardEducation"
import CardSkills from "./CardSkills/CardSkills"
import CardInterests from "./CardInterests/CardInterests"
import { Col } from "react-bootstrap"

import React from "react"

const MainColumn = () => {
  return (
    <Col md={8} className="mx-auto">
      <CardProfile />
      <CardAnalytics />
      <CardResources />
      <CardAbout />
      <CardActivity />
      <CardExperience />
      <CardEducation />
      <CardSkills />
      <CardInterests />
    </Col>
  )
}

export default MainColumn
