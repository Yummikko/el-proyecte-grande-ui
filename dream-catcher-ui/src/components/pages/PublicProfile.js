import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ImageService from "../../services/ImageService";
import defaultPhoto from '../../assets/images/profile.jpeg';
import GoBackButton from "../GoBackButton";
import "../../Profile.css";
import { Link } from 'react-router-dom';



const PublicProfile = () => {
    const { nickname } = useParams();
    const [dreamer, setDreamer] = useState({});
    const [dreams, setDreams] = useState([]);
    const dreamerUrl = `http://localhost:8080/api/v1/dreamers/${nickname}`;
  

    useEffect(() => {
        fetch(dreamerUrl)
        .then(response => {
          console.log(response);
          return response.json();
        })
          .then(data => {setDreamer(data)})
          .catch(error => console.log(error));
      }, [nickname]);

      useEffect(() => {
        fetch(dreamerUrl + '/dreams')
        .then(response => {
          console.log(response);
          return response.json();
        })
          .then(data => {setDreams(data)})
          .catch(error => console.log(error));
      }, []);

  
    return (
      <div className="container profile">
        <GoBackButton />
        <div className="profile-container">
          <div className="rounded-top text-white d-flex flex-row">
          <div className="ms-4 mt-5 d-flex flex-column text-dark align-items-center">
          {dreamer.image ? (
              <ImageService data={dreamer} className="user-photo" />
            ) : (
              <img
                src={defaultPhoto}
                className="user-photo"
              /> 
            )}
            <br/><header><h3><strong>{dreamer.username}</strong> </h3></header>
              <h2>{dreamer.nickname}</h2>
              <p>Dreamer</p>
              <p>Followers: {dreamer.followers}</p>
              <button className="follow-btn">FOLLOW</button><br/>
            </div>
          </div>
        </div><br/>

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
    );
  };
  
  export default PublicProfile;