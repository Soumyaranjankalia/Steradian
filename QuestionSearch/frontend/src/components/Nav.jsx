import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };
  return (
    <div>
     <Link to="/"> <img className="logo" src="https://yt3.ggpht.com/eWJeqqOMk_xNhtXRQHQcZpJAUXB-kWDodwvhSQf-_-VzksGqf9QCb8T346bKPoszYbAeKUow_Q=s900-c-k-c0x00ffffff-no-rj" alt="" ></img></Link>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Question</Link>
          </li>
          <li className="logout-btn">
            <Link onClick={logout} to="/login">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
