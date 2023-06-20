import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Row, Col, Container } from "react-bootstrap"
import {
  faCircleQuestion,
  faGear,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <Container>
      <div className="mt-4">
        <img id="logo" src="LI-Logo.png" alt="linkedin logo" />
      </div>

      <div className="d-flex my-3 footer-main">
        <Row>
          <Col className="">
            <nav>
              <li>About</li>
              <li> Community Guidelines</li>
              <li>
                Privacy & Teams <FontAwesomeIcon icon={faChevronDown} />{" "}
              </li>
              <li> Sales Solutions</li>
              <li> Safety Center</li>
            </nav>
          </Col>

          <Col className="">
            <nav>
              <li>Accessibility </li>
              <li>Careers</li>
              <li> Ad Choices</li>
              <li> Mobile</li>
            </nav>
          </Col>
          <Col className="">
            <nav>
              <li>Talent Solutions </li>
              <li> Marketing Solutions</li>
              <li>Advertising </li>
              <li>Small Business</li>
            </nav>
          </Col>

          <Col className="">
            <li>
              <div className="d-flex">
                <span className="fQue">
                  <FontAwesomeIcon icon={faCircleQuestion} />
                  <span className=" ml-2">Questions?</span>
                </span>
              </div>
              <p className="v-text">Visit our Help Center.</p>
            </li>
            <li>
              <div className="d-flex">
                <span className="fQue">
                  <FontAwesomeIcon icon={faGear} />
                  <span className="ml-2">Manage you account and privacy</span>
                </span>
              </div>
              <p className="v-text">Go to your Settings.</p>
            </li>
          </Col>

          <Col className="">
            <label
              for="globalfooter-select_language"
              class="global-footer__label t-12 t-normal mb1 mt0"
            >
              Select Language
            </label>
            <select
              id="select_language"
              class="global-footer__language-selection-dropdown t-12 t-black--light t-bold"
            >
              <option value="en_US" lang="en-us">
                English (English)
              </option>
              <option value="es_ES" lang="es-es">
                Español (Spanish)
              </option>
              <option value="fr_FR" lang="fr-fr">
                Français (French)
              </option>
            </select>
          </Col>
        </Row>
      </div>

      <p className="corp ">
        Linkedin Corporation{" "}
        <span className="corp ml-1"> © {new Date().getFullYear()}</span>
      </p>
    </Container>
  )
}

export default Footer
