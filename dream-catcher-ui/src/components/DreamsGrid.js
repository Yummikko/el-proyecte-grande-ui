import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const DreamsGrid = () => {
    const [dreams, setDreams] = useState([]);
    const url = `http://localhost:8080/api/v1/dreams/recents`;

    
    useEffect(() => {
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setDreams(json)
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
  
    }, []);
    
  
    return (
    <div className="container-just-added">
        <div className="header">
          <h2 className="just">RECENTLY</h2>
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
