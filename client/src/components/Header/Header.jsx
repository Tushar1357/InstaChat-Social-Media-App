import React from "react";
import { BiMenu } from "react-icons/bi";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { slidebarActions } from "../../store/slidebar";

function Header() {

  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(slidebarActions.changeSlideBarStatus())
  }
  return (
    <header
      className="d-flex align-items-center flex-column justify-content-center w-100 bg-dark"
      style={{
        position: "relative",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "white",
        height: "auto",
      }}
    >
      <span>
        <button className={`${styles.menu} btn btn-outline`} onClick={handleClick}>
          <BiMenu size={40} color="white" />
        </button>
      </span>
      <div className="mt-3">
        <a
          href="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <img src="../../public/images/logo.png" width={50} alt="" />
        </a>
      </div>

      
    </header>
  );
}

export default Header;
