import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import Navbar from "./Navbar";
import "../../styles/Profile.css";
import AvatarService from "../../services/AvatarService";
import defaultPhoto from '../../assets/images/profile.jpeg';
import GoBackButton from "../buttons/GoBackButton";
import { getCurrentUser } from "../../services/Oauth2Services"

export default class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
  }

  loadCurrentlyLoggedInUser() {

    getCurrentUser()
      .then(response => {
        localStorage.setItem("user", JSON.stringify(response));
        this.setState({
          currentUser: response
        });
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();

    // if (!currentUser) this.setState({ redirect: "/home" });
  }


  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    let currentUser = this.state.currentUser;
    if(!currentUser)
      currentUser =  AuthService.getCurrentUser();

    return (
      <div className="container profile">
        <GoBackButton/>
      {/* <Navbar/><br/><br/> */}
      <div className="profile-container">
        <div className="rounded-top text-white d-flex flex-row">
            <div className="ms-4 mt-5 d-flex flex-column text-dark align-items-center">
              {currentUser ?
                (currentUser.profileImgUrl ? (<img
                        src={currentUser.profileImgUrl}
                        alt={currentUser.username}
                        class="rounded-circle"
                        width="150"
                      />
                  ) :
                  (currentUser.id ? (
                      <AvatarService data={currentUser.profilePictureId} className="user-photo" />
                    ) : (
                      <img
                        src={defaultPhoto}
                        className="user-photo"
                      /> 
                    ))
                  )
                  : (<img
                    src={defaultPhoto}
                    className="user-photo"
                  /> )
              }
                <br/><header><h3><strong>{currentUser && currentUser.username}</strong> </h3></header>
                {currentUser &&       
                  (currentUser.roles &&
                    currentUser.roles.map((role, index) => (
                      <p key={index}>
                        {role === 'ROLE_DREAMER' ? 'Dreamer' : role === 'ROLE_MENTOR' ? 'Mentor' : role === 'ROLE_ADMIN' ? 'Admin' : role}
                      </p>
                    )))
                }
                  <button className="follow-btn">Settings</button>
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

