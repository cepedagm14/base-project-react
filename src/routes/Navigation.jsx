import React from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo" />
            <ul>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  users
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="about" element={<p>About</p>} />
            <Route path="users" element={<p>users</p>} />
            <Route path="home" element={<p>home</p>} />
            <Route path="/*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
