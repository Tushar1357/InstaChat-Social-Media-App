import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { slidebarActions } from "../../store/slidebar";
import { tabsliceActions } from "../../store/tab";
import { Link } from "react-router-dom";
function SideBar({loggedIn}) {
  const [currentActiveTab, setActiveTab] = useState("");
  const dispatch = useDispatch();

  const { currentStatus } = useSelector((store) => store.slidebar);

  const handleClick = () => {
    dispatch(slidebarActions.changeSlideBarStatus());
  };

  const handleTabClick = (event) => {
    setActiveTab(event.target.innerText);
    dispatch(tabsliceActions.changeTab(event.target.innerText));
  };

  const options = ["Home", "Post", "Friends", "Profile"];
  return (
    <div
      className={`${currentStatus ? styles.hide : null} ${
        styles.slidebar
      } d-flex flex-column flex-shrink-0 p-3 bg-dark border-end border-white`}
      style={{ width: "18rem", height: "100vh" }}
    >
      {!currentStatus ? (
        <span className={`${styles.close}`}>
          <button className={`btn btn-outline-secondary`} onClick={handleClick}>
            <IoClose size={40} color="white" />
          </button>
        </span>
      ) : null}

      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4 text-white">InstaChat</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {options.map((item) => (
          <li key={item} className="nav-item">
            <Link
              to={`/${item.toLowerCase()}`}
              className={`nav-link ${
                currentActiveTab === item ? "active" : null
              }`}
              aria-current="page"
              onClick={handleTabClick}
            >
              {item}
            </Link>
          </li>
        ))}
       {!loggedIn && <div className="mt-2">
          <Link to="/login">
          <button type="button" onClick={handleTabClick} className={`btn btn-outline-primary me-2 ${(currentActiveTab === "Login")?"active":null}`}>
            Login
          </button>
          </Link>
          <Link to="/sign-up">
          <button type="button" onClick={handleTabClick} className={`btn btn-outline-primary me-2 ${(currentActiveTab === "Sign-up")?"active":null}`}>
            Sign-up
          </button>
          </Link>
        </div>}
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="../../public/images/logo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </Link>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
