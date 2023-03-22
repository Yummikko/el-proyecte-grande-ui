import React, { useState, useEffect } from 'react';

function PopularDreams() {
  const [mostLikedDream, setMostLikedDream] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/dreams/most-liked')
      .then(response => response.json())
      .then(data => setMostLikedDream(data));
  }, []);

  return (
    <div>
      {mostLikedDream && (
        <div>
          <h3>Most Liked Dream:</h3>
          <p>{mostLikedDream.dreamTitle}</p>
          <p>{mostLikedDream.dreamDescription}</p>
          <p>Likes: {mostLikedDream.likes}</p>
        </div>
      )}
    </div>
  );
}

export default PopularDreams;