import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import Navbar from "./Navbar";
import "../../styles/Profile.css";
import AvatarService from "../../services/AvatarService";
import defaultPhoto from '../../assets/images/profile.jpeg';
import GoBackButton from "../buttons/GoBackButton";

export default class Profile extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container profile">
        <GoBackButton/>
      {/* <Navbar/><br/><br/> */}
      <div className="profile-container">
      <div className="rounded-top text-white d-flex flex-row">
          <div className="ms-4 mt-5 d-flex flex-column text-dark align-items-center">
          {currentUser.id ? (
              <AvatarService data={currentUser.profilePictureId} className="user-photo" />
            ) : (
              <img
                src={defaultPhoto}
                className="user-photo"
              /> 
            )}
            <br/><header><h3><strong>{currentUser.username}</strong> </h3></header>
                    
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <p key={index}>
                    {role === 'ROLE_DREAMER' ? 'Dreamer' : role === 'ROLE_MENTOR' ? 'Mentor' : role === 'ROLE_ADMIN' ? 'Admin' : role}
                  </p>
                ))}
              <button className="follow-btn">Follow</button>
            </div>
          </div>
        {(this.state.userReady) ?
        <div>
      </div>: null}
      </div>
      </div>
    );
  }
}

