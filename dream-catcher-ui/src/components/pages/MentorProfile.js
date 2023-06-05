import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ImageService from "../../services/ImageService";
import defaultPhoto from '../../assets/images/profile.jpeg';
import GoBackButton from "../buttons/GoBackButton";
import "../../styles/Profile.css";
import { Link } from 'react-router-dom';
import AvatarService from "../../services/AvatarService";



const PublicProfile = () => {
    const { nickname } = useParams();
    const [mentor, setMentor] = useState({});
    const [offers, setOffers] = useState([]);
    const mentorUrl = `http://localhost:8080/api/mentors/${nickname}`;
    const [followed, setFollowed] = useState(false);
    const [unfollowed, setUnfollowed] = useState(false);
  

    useEffect(() => {
        fetchData()
    }, [nickname]);

    const fetchData = async () => {
      await fetch(mentorUrl)
        .then(response => {
          console.log(response.json());
          return response.json();
        })
          .then(data => {setMentor(data)})
          .catch(error => console.log(error));
    }


    useEffect(() => {
      fetch(mentorUrl + '/offers')
      .then(response => {
        console.log(response);
        return response.json();
      })
        .then(data => {setOffers(data)})
        .catch(error => console.log(error));
    }, []);

    const handleFollowUnfollow = () => {
      if (followed) {
          handleUnfollow();
        setFollowed(false);
        setUnfollowed(true);
      } else if (unfollowed) {
          handleFollow();
        setFollowed(true);
        setUnfollowed(false);
      } else {
          handleFollow();
        setFollowed(true);
      }
    }

  const handleFollow = async () => {
      try {
          await fetch(mentorUrl + '/follow', { method: 'PUT' });
          setFollowed(true);
          setMentor({ ...mentor, followers: mentor.followers + 1 });
      } catch (error) {
          console.log("error", error);
      }
  }

  const handleUnfollow = async () => {
      try {
          await fetch(mentorUrl + '/unfollow', { method: 'PUT' });
          setUnfollowed(true);
          setMentor({ ...mentor, followers: mentor.followers - 1 });
      } catch (error) {
          console.log("error", error);
      }
  }
  
    return (
      <div className="container profile">
        <GoBackButton />
        <div className="profile-container">
          <div className="rounded-top text-white d-flex flex-row">
          <div className="ms-4 mt-5 d-flex flex-column text-dark align-items-center">
          {mentor.user ? (
              <AvatarService data={mentor.user.profilePicture.id} className="user-photo" />
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
              <button className="follow-btn" onClick={handleFollowUnfollow}>{followed ? 'Unfollow' : 'Follow'}</button><br/>
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