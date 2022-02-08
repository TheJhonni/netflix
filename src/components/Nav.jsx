import React, { useEffect, useState } from "react";
import "./Styles/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://th.bing.com/th/id/R.2ea85d7448475a744c1485c2eac3d3d1?rik=LOSTtarBPEnY%2fw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fnetflix-logo-0.png&ehk=PaZLUHaWmwAMEzdIDx7zGpBu053ZpXipTljxBidJnfU%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://th.bing.com/th/id/OIP.3FrO3Sa1VWLEZq1djYh91AHaHa?w=209&h=208&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
