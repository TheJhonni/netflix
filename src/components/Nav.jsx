import React, { useEffect, useState } from "react";
import "./Styles/Nav.css";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

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
        <div className="nav_left">
          <img
            className="nav_logo"
            src="https://th.bing.com/th/id/R.2ea85d7448475a744c1485c2eac3d3d1?rik=LOSTtarBPEnY%2fw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fnetflix-logo-0.png&ehk=PaZLUHaWmwAMEzdIDx7zGpBu053ZpXipTljxBidJnfU%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="nav_right">
          <FiSearch className="nav_icon"></FiSearch>
          <span>TheJhonni</span>
          <IoMdNotifications className="nav_icon" />
          <img
            className="nav_avatar"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEgNFJ49Vnc1w/profile-displayphoto-shrink_400_400/0/1642584038544?e=1649894400&v=beta&t=rp56U7xamh1EJue1VcESjTbiPVHHhgFV1RF9eVIuLjY"
            alt=""
          />
          <div className="nav_profile">
            <MdArrowDropDown className="nav_icon" />
            <div className="nav_options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
