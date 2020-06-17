import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <ul className="main-nav pointer">
          <div className="head ">Scene Wizard</div>
          <Link to="/">
            <li>
              {" "}
              <a>Home</a>{" "}
            </li>
          </Link>
          <Link to="/categories">
            <li>
              {" "}
              <a>Categories</a>{" "}
            </li>
          </Link>

          {/* <li onClick={() => onRouteChange("signout")}>
            {" "}
            <a>Dummy button</a>{" "}
          </li> */}
          <li>
            {" "}
            <a>Dummy button</a>{" "}
          </li>

          {/* <Link to = '/register'>
                     <li> <a>Register</a> </li>
                     </Link>                                      */}
        </ul>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="pointer f3 link dim pa3"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="pointer f3 link dim pa3"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Nav;
