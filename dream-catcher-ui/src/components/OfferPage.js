import React, { useState, useEffect } from 'react';
import "../OfferPage.css";
import { Link } from 'react-router-dom';
import defaultPhoto from '../assets/images/Default.jpeg';
import ImageService from "../services/ImageService";
import Navbar from './Navbar';

const OfferPage = () => {
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/offers/all')
      .then(response => response.json())
      .then(data => setOffer(data));
  }, []);

  return (
    <div>
      <Navbar/><br/><br/>
    <div className="container-all-dreams">
      <div className="header">
        <h1 className="all">ALL OFFERS</h1>
      </div>
      <div className="dreams-grid">
        {offer.map((offer, index) => (
          <Link to={'#'} key={index} className="dream-item">
            <div className="dream-image-container">
            {offer.image ? (
              <ImageService data={offer} className="dream-image" />
            ) : (
              <img
                src={defaultPhoto}
                alt="dream"
                className="dream-image"
              />
            )}
              <div className="dream-title">{offer.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OfferPage;