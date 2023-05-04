import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ImageService from "../../services/ImageService";
import defaultPhoto from '../../assets/images/profile.jpeg';
import GoBackButton from "../buttons/GoBackButton";
import "../../styles/Profile.css";
import { Link } from 'react-router-dom';



const PublicProfile = () => {
    const { nickname } = useParams();
    const [mentor, setMentor] = useState({});
    const [offers, setOffers] = useState([]);
    const mentorUrl = `http://localhost:8080/api/mentors/${nickname}`;
  

    useEffect(() => {
        fetch(mentorUrl)
        .then(response => {
          console.log(response);
          return response.json();
        })
          .then(data => {setMentor(data)})
          .catch(error => console.log(error));
      }, [nickname]);

      useEffect(() => {
        fetch(mentorUrl + '/offers')
        .then(response => {
          console.log(response);
          return response.json();
        })
          .then(data => {setOffers(data)})
          .catch(error => console.log(error));
      }, []);

  
    return (
      <div className="container profile">
        <GoBackButton />
        <div className="profile-container">
          <div className="rounded-top text-white d-flex flex-row">
          <div className="ms-4 mt-5 d-flex flex-column text-dark align-items-center">
          {mentor.image ? (
              <ImageService data={mentor} className="user-photo" />
            ) : (
              <img
                src={defaultPhoto}
                className="user-photo"
              /> 
            )}
            <br/><header><h3><strong>{mentor.username}</strong> </h3></header>
              <h2>{mentor.nickname}</h2>
              <p>Mentor</p>
              <p>Followers: {mentor.followers}</p>
              <button className="follow-btn">FOLLOW</button><br/>
            </div>
          </div>
        </div><br/>

        <div className="dreams-grid">
        {offers.map(offer => (
          <Link to={`/dream-details/${offer.id}`} key={offer.id} className="dream-item">
            <div className="dream-image-container">
            {offer.image ? (
              <ImageService data={offer} className="dream-image" />
            ) : (
              <img
                src={defaultPhoto}
                alt="offer"
                className="dream-image"
              />
            )}
              <div className="dream-title">{offer.title}</div>
            </div>
          </Link>
        ))}
      </div>

      </div>
    );
  };
  
  export default PublicProfile;