import React, { useState, useEffect } from 'react';
import "../AllDreams.css";
import { Link } from 'react-router-dom';
import ImageService from "../services/ImageService";
import defaultPhoto from '../assets/images/Default.jpeg';
import Navbar from './Navbar';


const AllDreams = () => {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/dreams/all')
      .then(response => response.json())
      .then(data => setDreams(data));
  }, []);

  return (
    <div>
      <Navbar/><br/><br/>
    <div className="container-all-dreams">
      <div className="header">
        <h2 className="all">ALL DREAMS</h2>
      </div>
      <div className="dreams-grid">
        {dreams.map(dream => (
          <Link to={`/dream-details/${dream.id}`} key={dream.id} className="dream-item">
            <div className="dream-image-container">
            {dream.image ? (
              <ImageService data={dream} className="dream-image" />
            ) : (
              <img
                src={defaultPhoto}
                alt="dream"
                className="dream-image"
              />
            )}
              <div className="dream-title">{dream.dreamTitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllDreams;