import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faChevronDown } from "@fortawesome/free-solid-svg-icons"

const RightNews = () => {
  return (
    <div className="card rightCard c">
      <p className="news ml-3 mt-3">
        Linkedin News{" "}
        <span className="mr-3">
          <FontAwesomeIcon icon={faCircleInfo} />
        </span>
      </p>

      <ul>
        <li className="bold">
          <a href="#">Meet the UK's top voices in tech </a>
        </li>
        <div className="d-flex mt-0">
          <span className="hour">Top news</span>
          <span className="readers ml-3">3,217 readers</span>
        </div>
        <li className="bold">
          <a href="#">All Gucci for youth living at home</a>{" "}
        </li>
        <div className="d-flex">
          <span className="hour">3h ago</span>
          <span className="readers ml-3">9,217 readers</span>
        </div>
        <li className="bold">
          {" "}
          <a href="#">20 Big Ideas that will shape 2023 </a>{" "}
        </li>
        <div className="d-flex">
          <span className="tN">9h ago</span>
          <span className="readers ml-3">6,916 readers</span>
        </div>
        <li className="bold">
          {" "}
          <a href="#">Staff stressed over cost of living </a>{" "}
        </li>
        <div className="d-flex">
          <span className="tN">4h ago</span>
          <span className="readers ml-3">12,216 readers</span>
        </div>
      </ul>

      <div className=" show mb-3">
        {" "}
        Show more{" "}
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>{" "}
      </div>
    </div>
  )
}

export default RightNews
