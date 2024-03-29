import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "../../styles/PopularDreams.css";
import ImageService from "../../services/ImageService";
import defaultPhoto from '../../assets/images/Default.jpeg';


const Dreams = () => {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => { 
    await fetch('http://localhost:8080/api/v1/dreams/most-popular')
    .then(response => response.json())
    .then(data => setDreams(data));
  }
    

  return (
    <div>
      <div className="header">
        <h2 className="just">MOST POPULAR</h2>
        <h1 className="just">DREAMS</h1>
      </div>
      { dreams.length == 0 &&
          <div class="loader-container d-flex justify-content-center">
            <div class="loader"></div>
          </div>
      } 
      <div className="dreams-container">
        <div className="dreams-line"></div>
        <div className="dreams">
        {dreams && dreams.map((dream, index) => (
        <div className="dream" key={index}>
        <div className="dream-photo">
        {dream.image ? (
                <ImageService data={dream} className="dream-image" />
              ) : (
                <img
                  src={defaultPhoto}
                  alt="dream"
                  className="dream-image"
                />
              )}
      </div>
      <div className="dream-details">
        <div className="dream-details-title">
        <h2>{dream.dreamTitle}</h2>
        <span>{dream.date}</span>
      </div>
      <p>{dream.dreamDescription}</p>
      <Link to={`/dream-details/${dream.id}`}>Read More</Link>
      <Routes>
        <Route path="/dream-details/:id" />
      </Routes>
      </div>
      </div>
        ))}
      </div>
  </div>
  </div>
  );
};

export default Dreams;