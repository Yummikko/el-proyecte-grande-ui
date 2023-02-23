import React, { useState, useEffect } from 'react';

function PopularDreams() {
  const [mostLikedDream, setMostLikedDream] = useState(null);
  const [mostViewedDream, setMostViewedDream] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/dreams/most-liked')
      .then(response => response.json())
      .then(data => setMostLikedDream(data));

    fetch('http://localhost:8080/api/v1/dreams/most-viewed')
      .then(response => response.json())
      .then(data => setMostViewedDream(data));
  }, []);

  return (
    <div>
      <h2>Most Popular Dreams</h2>
      {mostLikedDream && (
        <div>
          <h3>Most Liked Dream:</h3>
          <p>{mostLikedDream.dreamTitle}</p>
          <p>{mostLikedDream.dreamDescription}</p>
          <p>Likes: {mostLikedDream.likes}</p>
        </div>
      )}
      {mostViewedDream && (
        <div>
          <h3>Most Viewed Dream:</h3>
          <p>{mostViewedDream.dreamTitle}</p>
          <p>{mostViewedDream.dreamDescription}</p>
          <p>Views: {mostViewedDream.views}</p>
        </div>
      )}
    </div>
  );
}

export default PopularDreams;