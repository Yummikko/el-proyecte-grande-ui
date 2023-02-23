import React, { useState, useEffect } from 'react';

function PopularDreams() {
  const [mostLikedDream, setMostLikedDream] = useState(null);
  const [mostViewedDream, setMostViewedDream] = useState(null);

  useEffect(() => {
    fetch('/api/v1/dreams/most-liked')
      .then(response => response.json())
      .then(data => setMostLikedDream(data));

    fetch('/api/v1/dreams/most-viewed')
      .then(response => response.json())
      .then(data => setMostViewedDream(data));
  }, []);

  return (
    <div>
      <h2>Most Popular Dreams</h2>
      {mostLikedDream && (
        <div>
          <h3>Most Liked Dream:</h3>
          <p>{mostLikedDream.title}</p>
          <p>{mostLikedDream.description}</p>
          <p>Likes: {mostLikedDream.likes}</p>
        </div>
      )}
      {mostViewedDream && (
        <div>
          <h3>Most Viewed Dream:</h3>
          <p>{mostViewedDream.title}</p>
          <p>{mostViewedDream.description}</p>
          <p>Views: {mostViewedDream.views}</p>
        </div>
      )}
    </div>
  );
}

export default PopularDreams;