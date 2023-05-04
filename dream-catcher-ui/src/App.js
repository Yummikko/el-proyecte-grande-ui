import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddDreamer from './components/pages/AddDreamer';
import AddDream from "./components/pages/AddDream";
import FundDreamer from './components/sections/FundDreamer';
import PopularDreams from './components/sections/PopularDreams';
import DreamDetails from './components/pages/DreamDetails';
import OAuth2RedirectHandler from "./components/user-oauth2/oauth2/OAuth2RedirectHandler";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/sections/LoginComponent";
import Register from "./components/sections/RegisterComponent";
import Home from './components/pages/Home'
import Profile from "./components/sections/ProfileComponent";
import PublicProfile from './components/pages/PublicProfile';
import BoardUser from "./components/sections/BoardDreamerComponent";
import BoardModerator from "./components/sections/BoardMentorComponent";
import BoardAdmin from "./components/sections/BoardAdminComponent";
import HideShow from "./components/HideShow";
import HomePage from "./components/pages/HomePage";
import AllDreams from "./components/sections/AllDreams";
import OfferDetails from "./components/pages/OfferDetails";
import OfferPage from "./components/pages/OfferPage";
import AddOffer from "./components/pages/AddOffer";
import { getCurrentUser } from "./services/Oauth2Services"
import { ACCESS_TOKEN } from "./constants";
import Alert from "./components/sections/Alert";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  }
  
  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    return (
      
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} authenticated={this.state.authenticated}
              currentUser={this.state.currentUser} />
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mentor" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/add-dreamer" element={<AddDreamer />} />
            <Route path="/popular-dreams" element={<PopularDreams />} />
            <Route path="/donate-dreamer" element={<FundDreamer />} />
            <Route path="/hide-show" element={<HideShow />} />
            <Route path="/add-dream/*" element={<AddDream />} />
            <Route path="/dream-details/:id" element={<DreamDetails />} />
            <Route path="/offer-details/:id" element={<OfferDetails />} />
            <Route path="/all-dreams" element={<AllDreams />} />
            <Route path="/offer-page" element={<OfferPage />} />
            <Route path="/add-offer/:id/*" element={<AddOffer />} />
            <Route path="/profile/:nickname" element={<PublicProfile />} />
          </Routes>
        </div>

    );
  }
}

export default App;