import React, { useState, useEffect } from 'react';
import "../OfferPage.css";
import { Link } from 'react-router-dom';

const OfferPage = () => {
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/offers/all')
      .then(response => response.json())
      .then(data => setOffer(data));
  }, []);

  return (
    <div className="container-all-dreams">
      <div className="header">
        <h2 className="all">Offer page</h2>
      </div>
      <div className="dreams-grid">
        {offer.map((offer, index) => (
          <Link to={'#'} key={index} className="dream-item">
            <div className="dream-image-container">
              {/* <img src={offer.image} className="dream-image" alt="" /> */}
              <div className="dream-title">{offer.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;