import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const SideFooter = () => {
  return (
    <div className="footer mt-1 rightCard ">
      <div className="sidebar-footer">
        <span>
          <a href="#">About</a>
        </span>
        <span>
          <a href="#">Accessibility</a>
        </span>
        <span>
          <a href="#">Help Center</a>
        </span>
      </div>
      <div className="sidebar-footer">
        <span>
          <a href="#">Privacy & Terms </a>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
        <span>
          {" "}
          <a href="#">Ad Choices</a>
        </span>
      </div>

      <div className="sidebar-footer">
        <span>
          <a href="#">Advertising</a>
        </span>
        <span>
          <a href="#">
            Business Services <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </span>
      </div>

      <div className="sidebar-footer">
        <span>
          <a href="#">Get the Linkedin app</a>
        </span>
        <span>
          <a href="#">More</a>
        </span>
      </div>
      <div className="corporation mt-1 ml-4">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
          alt="linkedin logo"
          className="corporation-image mr-2"
        />
        <span>Linkedin Corporation</span>
        <span>©{new Date().getFullYear()}</span>
      </div>
    </div>
  )
}

export default SideFooter
