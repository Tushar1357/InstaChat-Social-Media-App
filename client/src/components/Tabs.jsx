import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Tabs() {

  const [currentTab, setTab] = useState(true)

  const handleTabClick = (event)=>{
    if (event.target.innerText === "Following"){
      setTab(false)
    }
    else{
      setTab(true)
    }
  }

  return (
    <div className="container" style={{marginTop: "10px"}}>
      <ul className="nav nav-underline d-flex justify-content-evenly">
        <li className="nav-item">
          <Link className={`nav-link text-white ${currentTab?"active":null}`} onClick={handleTabClick} aria-current="page" to="/home">
            For You
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-white ${!currentTab?"active":null}`} to="/your-post" onClick={handleTabClick} >
            Your Posts
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
