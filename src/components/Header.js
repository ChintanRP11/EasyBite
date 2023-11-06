import { useContext, useState } from "react";
import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const data = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between p-1 bg-[#333] w-auto">
      <div className="app-logo p-1 place-items-center flex w-auto">
        <img className="logo rounded-full w-14 " src={logo} alt="Logo" />
      </div>
      <div className="nav-group items-center">
        <ul className="nav-items flex p-1 m-2 text-white">
          {onlineStatus ? (
            <li className="px-2 m-2 align-middle text-[#5cc04a] ">Online ●</li>
          ) : (
            <li className="px-2 m-2 align-middle text-red-600 ">Offline ●</li>
          )}
          <li className="px-2 m-2 ">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="px-2 m-2">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="px-2 m-2">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="px-2 m-2">
            <Link to="/grocery" className="nav-link">
              Grocery
            </Link>
          </li>
          <li className="px-2 m-2">Cart</li>
          <button
            className="login px-4 my-2 mx-4 bg-sky-500 hover:bg-sky-700 rounded-xl "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>
            {btnName}
          </button>
          <li>{btnName === "Logout" ? data.loggedInUser : "Login"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
