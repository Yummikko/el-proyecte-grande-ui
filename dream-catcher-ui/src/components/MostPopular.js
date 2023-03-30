import React, { useState, useEffect } from 'react';
import "../PopularDreams.css";
import ImageService from "../services/ImageService";


const Dreams = () => {
const [dreams, setDreams] = useState([]);

useEffect(() => {
fetch('http://localhost:8080/api/v1/dreams/most-popular')
.then(response => response.json())
.then(data => setDreams(data));
}, []);

return (
  <div>
    <div className="header">
      <h2 className="just">MOST POPULAR</h2>
      <h1 className="just">DREAMS</h1>
    </div>
    <div className="dreams-container">
      <div className="dreams-line"></div>
      <div className="dreams">
      {dreams.map((dream, index) => (
      <div className="dream" key={index}>
      <div className="dream-photo">
      <ImageService data={dream} className="dream-image" />
    </div>
    <div className="dream-details">
      <div className="dream-details-title">
      <h2>{dream.dreamTitle}</h2>
      <span>{dream.date}</span>
    </div>
    <p>{dream.dreamDescription}</p>
    <button className="read-more-btn">Read more</button>
    </div>
    </div>
      ))}
    </div>
</div>
</div>
);
};

export default Dreams;