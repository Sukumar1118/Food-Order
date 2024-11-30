import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import userImage from "../../assets/logos/userIcon.jpg";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div>
        {/* Load image from remote server/source */}
        <img src={LOGO_URL} alt="logo" width="100px" />

        {/* import image from folder using ES6 module.
        //? <img src={userImage} alt="logo" width="100px" /> */}

        {/* Load image asets with CSS
        //? <div className="image-container"> </div> */}
      </div>
      <div>
        <ul className="nav-bar">
          <Link className="nav-menu" to={"/"}>
            Home
          </Link>
          <Link className="nav-menu" to={"/about"}>
            AboutUs
          </Link>
          <Link className="nav-menu" to={"/contact"}>
            ContactUs
          </Link>
          <Link className="nav-menu" to={"/cart"}>
            Cart
          </Link>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
