import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToProfile } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchedUsers, setSearchedUsers] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWVmNGM5NmRmYjAwMTUyMWE1YjciLCJpYXQiOjE2NzA4MzU5NjcsImV4cCI6MTY3MjA0NTU2N30.3nMkP_psg7qh50FtCZmYQ_t60p-DJ4_w3p68wGvypoc",
    },
  };

  const handleSearch = async (e) => {
    let searchValue = e.target.value;
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      options
    );
    let data = await response.json();
    let filteredUsers = data.filter((user) =>
      user.name.startsWith(searchValue)
    );
    console.log(filteredUsers);
    setSearchedUsers(filteredUsers);
  };

  const [hidden, setHidden] = useState(true);

  return (
    <>
      <Form
        inline
        className="flex-grow-1 d-sm-none d-xl-block"
        autoComplete="off"
      >
        <Form.Label>{/* <FontAwesomeIcon icon={faSearch} /> */}</Form.Label>
        <FormControl
          onFocus={() => {
            setHidden(false);
          }}
          type="text"
          placeholder="Search"
          id="search-form"
          className="navbar-form"
          onKeyUp={(e) => handleSearch(e)}
        />
      </Form>
      <div
        id="search-suggestion"
        onClick={() => {
          setHidden(true);
        }}
        className={hidden ? "hidden" : ""}
      >
        {searchedUsers &&
          searchedUsers.slice(0, 10).map((user) => (
            <div
              className="d-flex justify-content-end search-result p-2"
              key={user._id}
              onClick={() => {
                dispatch(addToProfile(user));
                navigate("/profile-page");
              }}
            >
              <FontAwesomeIcon icon={faSearch} className="mr-3" />
              <h6 className="flex-nowrap">
                {user.name} {user.surname}
              </h6>{" "}
              <span className="text-truncate"> ● {user.title}</span>
              <img
                src={user.image}
                alt=""
                className="user-image-search rounded-circle ml-auto"
              />
            </div>
          ))}
        <div className="text-center search-result p-2 border-top text-primary">
          <h6>See More</h6>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
