import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import AddDreamer from './components/AddDreamer';
import AddDream from "./components/pages/AddDream";
import FundDreamer from './components/FundDreamer';
import PopularDreams from './components/PopularDreams';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/AuthService";
import EventBus from "./common/EventBus";

import Login from "./components/LoginComponent";
import Register from "./components/RegisterComponent";
import Home from './components/pages/Home'
import Profile from "./components/ProfileComponent";
import BoardUser from "./components/BoardDreamerComponent";
import BoardModerator from "./components/BoardMentorComponent";
import BoardAdmin from "./components/BoardAdminComponent";
import HideShow from "./components/HideShow";
import HomePage from "./components/pages/HomePage";
import AllDreams from "./components/AllDreams";

class App extends Component {
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
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              DreamCatcher
            </Link>
            <div className="mr-4 navbar-nav">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mentor"} className="nav-link">
                    Mentor Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}
            </div> */}

            {/* {currentUser ? (
              <div className="ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add-dreamer"} className="nav-link">
                    Add Dreamer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add-dream"} className="nav-link">
                    Add Dream
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/popular-dreams" className="nav-link">
                    Popular Dreams
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/donate-dreamer" className="nav-link">
                    Donate Dreamer
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/hide-show" className="nav-link">
                    Hide and Show
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
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
              </div>
            )} */}
            {/* {currentUser ? (
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                      User
                    </Link>
                  </li>
                )}
                <Dropdown>
                  <Dropdown.Toggle className="float-start" variant="secondary" id="dropdown-basic">
                    Menu
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="profile">{currentUser.username}</Dropdown.Item>
                    <Dropdown.Item href="add-dreamer">Add Dreamer</Dropdown.Item>
                    <Dropdown.Item href="add-dream">Add Dream</Dropdown.Item>
                    <Dropdown.Item href="popular-dreams">Popular Dreams</Dropdown.Item>
                    <Dropdown.Item href="donate-dreamer">Donate Dreamer</Dropdown.Item>
                    <Dropdown.Item href="hide-show">Hide and Show</Dropdown.Item>
                    <Dropdown.Item href="login" onClick={this.logOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li> */}
              {/* </div> */}
            {/* )} */}
          {/* </div> */}
        {/* </nav> */}

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mentor" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/add-dreamer" element={<AddDreamer />} />
            <Route path="/popular-dreams" element={<PopularDreams />} />
            <Route path="/donate-dreamer" element={<FundDreamer />} />
            <Route path="/hide-show" element={<HideShow />} />
            <Route path="/add-dream" element={<AddDream />} />
            <Route path="/all-dreams" element={<AllDreams />} />
          </Routes>
        </div>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;