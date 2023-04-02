import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from "../services/AuthService";
import EventBus from "../common/EventBus";



class Navbar extends React.Component {
  constructor(props) {
  super(props);
  this.logOut = this.logOut.bind(this);

  this.state = {
    showModeratorBoard: false,
    showAdminBoard: false,
    currentUser: undefined,
  };
}

componentDidMount() {
  const user = AuthService.getCurrentUser();

  if (user) {
    this.setState({
      currentUser: user,
      showModeratorBoard: user.roles.includes("ROLE_MENTOR"),
      showAdminBoard: user.roles.includes("ROLE_ADMIN"),
    });
  }
  
  EventBus.on("logout", () => {
    this.logOut();
  });
}

componentWillUnmount() {
  EventBus.remove("logout");
}

logOut() {
  AuthService.logout();
  this.setState({
    showModeratorBoard: false,
    showAdminBoard: false,
    currentUser: undefined,
  });
}

render() {
  const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

  return (
    <div className="nav-wrapper">
      {<nav id="navbar" className="navbar">
          <div>
          <div className="logo">
            {/* Logo Placeholder for Illustration */}
            <a href="home" style={{ color: 'black', textDecoration: 'none' }}> DreamCatcher</a>
          </div>
          
          <ul id="menu" style={{fontSize: '25px'}}>
            <li className="nav-item">
              <li><a href="/home">Home</a></li>
              <li><a href="/all-dreams">Dreams</a></li>
              <li><a href="/offer-page">Offers</a></li>
              <li><a href="/mentors">Mentors</a></li>
              
            </li>
            </ul>
                         

            {showModeratorBoard && (
              <ul id="menu" style={{fontSize: '25px'}}>
              <li className="nav-item">
                <Link to={"/mentor"} className="nav-link">
                  Mentor Board
                </Link>
              </li>
              </ul>
            )}

            {showAdminBoard && (
              <ul id="menu" style={{fontSize: '25px'}}>
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
              </ul>
            )}
          </div>

          {currentUser ? (
              
              <Dropdown>
                <Dropdown.Toggle className="nav-item" variant="secondary" id="dropdown-basic" style={{backgroundColor: "white", color: "black"}}>
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="profile">{currentUser.username}</Dropdown.Item>
                  <Dropdown.Item href="add-dream">Add Dream</Dropdown.Item>
                  <Dropdown.Item href="login" onClick={this.logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

          ) : (
            <div className="navbar-nav ml-auto">
              <ul id="menu" style={{fontSize: '25px'}}>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
              </ul>
            </div>
          )}
      </nav>
      }


      {/* <AuthVerify logOut={this.logOut}/> */}
    </div>
  );
}
}

export default Navbar;