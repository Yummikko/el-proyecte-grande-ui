import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const DreamsGrid = () => {
    const [dreams, setDreams] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:8080/api/v1/dreams/recents')
        .then(response => response.json())
        .then(data => setDreams(data));
    }, []);
  
    return (
    <div className="container-just-added">
        <div className="header">
          <h2 className="just">JUST</h2>
          <h1 className="added">Added</h1>
        </div>
      <div className="dreams-grid">
        {dreams.map(dream => (
          <Link to={`#`} key={dream.id} className="dream-item">
            <div className="dream-image-container">
              <img src={dream.image} className="dream-image" />
              <div className="dream-title">{dream.dreamTitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
  };
  
  export default DreamsGrid;
