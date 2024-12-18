import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import userImage from "../../assets/logos/userIcon.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="shadow-lg">
      <div className="mx-6 flex justify-between">
        <div>
          {/* Load image from remote server/source */}
          <img src={LOGO_URL} alt="logo" className="w-20" />

          {/* import image from folder using ES6 module.
        //? <img src={userImage} alt="logo" width="100px" /> */}

          {/* Load image assets with CSS
        //? <div className="image-container"> </div> */}
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <Link className="p-2 mx-2 text-gray-700 font-medium hover:text-orange-500">
              {" "}
              Online status: {onlineStatus ? "✅" : "🔴"}
            </Link>
            <Link
              className="p-2 mx-2 text-gray-700 font-medium hover:text-orange-500"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="p-2 mx-2 text-gray-700 font-medium hover:text-orange-500"
              to={"/about"}
            >
              AboutUs
            </Link>
            <Link
              className="p-2 mx-2 text-gray-700 font-medium hover:text-orange-500"
              to={"/contact"}
            >
              ContactUs
            </Link>
            <Link
              className="p-2 mx-2 text-gray-700 font-medium hover:text-orange-500"
              to={"/cart"}
            >
              Cart
            </Link>
            <Link
              className="p-2 mx-2 text-gray-700 font-medium hover:text-orange-500"
              to={"/grocery"}
            >
              Grocery
            </Link>
            <button
              className="p-2 mx-2 text-gray-700 font-medium hover:text-orange-500"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
            <div className="p-2 mx-2 text-gray-700 font-medium hover:text-orange-500">
              {loggedInUser}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
