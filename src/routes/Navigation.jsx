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
                  to="/users"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Users
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
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<p>Home</p>} />
            <Route path="/users" element={<p>Users</p>} />
            <Route path="/about" element={<p>About</p>} />
            <Route path="/*" element={<Navigate to="/Home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
