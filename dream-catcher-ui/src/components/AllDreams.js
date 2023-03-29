import React, { useState, useEffect } from 'react';
import "../AllDreams.css";
import { Link } from 'react-router-dom';

const AllDreams = () => {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/dreams/all')
      .then(response => response.json())
      .then(data => setDreams(data));
  }, []);

  return (
    <div className="container-all-dreams">
      <div className="header">
        <h2 className="all">ALL DREAMS</h2>
      </div>
      <div className="dreams-grid">
        {dreams.map(dream => (
          <Link to={'#'} key={dream.id} className="dream-item">
            <div className="dream-image-container">
              <img src={dream.image} className="dream-image" alt="" />
              <div className="dream-title">{dream.dreamTitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllDreams;