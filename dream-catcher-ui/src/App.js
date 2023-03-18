import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import AddDreamer from './components/AddDreamer';
import FundDreamer from './components/FundDreamer';
import PopularDreams from './components/PopularDreams';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import EventBus from "./common/EventBus";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from './components/pages/Home'
import Profile from "./components/profile.component";
import BoardUser from "./components/board-dreamer.component";
import BoardModerator from "./components/board-mentor.component";
import BoardAdmin from "./components/board-admin.component";
import HideShow from "./components/HideShow";

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
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              DreamCatcher
            </Link>
            <div className="mr-2">
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

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
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
            )}
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
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
          </Routes>
        </div>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;