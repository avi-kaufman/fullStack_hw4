import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
  render() {
    return (
      <nav id="">
        <div className="left_content">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutMe" activeClassName="active">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/PostPage" activeClassName="active">
                Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/NewPost" activeClassName="active">
                New post
              </NavLink>
            </li>
            <li>
              <NavLink to="" activeClassName="active">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right_content">
          <ul>
            <li>
              <NavLink to="/Login" activeClassName="active">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
