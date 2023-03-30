import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import AddDreamer from './components/pages/AddDreamer';
import AddDream from "./components/pages/AddDream";
import FundDreamer from './components/FundDreamer';
import PopularDreams from './components/PopularDreams';
import DreamDetails from './components/pages/DreamDetails';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
import OfferDetails from "./components/pages/OfferDetails";

class App extends Component {

  render() {
    return (
      
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
            <Route path="/dream-details" element={<DreamDetails />} />
            <Route path="/offer-details/:id" element={<OfferDetails />} />
            <Route path="/all-dreams" element={<AllDreams />} />
          </Routes>
        </div>

    );
  }
}

export default App;