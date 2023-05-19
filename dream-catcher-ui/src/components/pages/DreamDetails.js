import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ImageService from "../../services/ImageService";
import "../../styles/global.css";
import Navbar from "../sections/Navbar";
import likePhoto from '../../assets/images/like.jpeg';
import dislikePhoto from '../../assets/images/dislike.jpeg';



const DreamDetails = () => {
    const { id } = useParams();

    const url = `http://localhost:8080/api/v1/dreams/${id}`;
    const [dream, setDream] = useState("");
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setDream(json)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [id]);

    const handleLikeDislikeDream = () => {
        if (liked) {
          handleDislikeDream();
          setLiked(false);
          setDisliked(true);
        } else if (disliked) {
          handleLikeDream();
          setLiked(true);
          setDisliked(false);
        } else {
          handleLikeDream();
          setLiked(true);
        }
      }

    const handleLikeDream = async () => {
        try {
            await fetch(`${url}/like`, { method: 'PUT' });
            setLiked(true);
            setDream({ ...dream, likes: dream.likes + 1 });
        } catch (error) {
            console.log("error", error);
        }
    }

    const handleDislikeDream = async () => {
        try {
            await fetch(`${url}/dislike`, { method: 'PUT' });
            setDisliked(true);
            setDream({ ...dream, likes: dream.likes - 1 });
        } catch (error) {
            console.log("error", error);
        }
    }

    if (!dream) {
        return <div>Loading...</div>;
    }
    
    return(
        <div>
            <Navbar/><br/><br/>
        {console.log(dream.comments)}
        <div className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card">
                        <h1 className="title">{dream.dreamTitle}</h1>
                            <div className="rounded-top text-white d-flex flex-row">
                                <div className="mt-5 d-flex flex-column text-dark align-items-center">
                                    <ImageService data={dream}/>
                                    
                                    <p>{dream.dreamDescription}</p>
                                </div>
                            </div>
                            <div className="p-4 text-black">
                                <div className="d-flex justify-content-center text-center py-1">
                                <div>
                                    <p className="mb-1 h5">{dream.likes}</p>
                                    <p className="small text-muted mb-0">Likes</p>
                                </div>
                                    <div className="px-3">
                                        { dream.comments && <p className="mb-1 h5">{Object.keys(dream.comments).length}</p> }
                                        <p className="small text-muted mb-0">Comments</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 h5">{dream.views}</p>
                                        <p className="small text-muted mb-0">Views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-4 text-black">
                                <div className="mb-5">
                                    { dream.dreamStatus && <p className="lead fw-normal mb-1 pa-2">Status: <div className="p-2 bg-success d-inline text-light rounded-pill">{dream.dreamStatus}</div></p>}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    { dream.dreamStatus && <p className="lead fw-normal mb-0">Hashtags: {dream.hashtags.join(', ')}</p> }
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0 text-center">Comments: {dream.comments.map(
                                        comment => <div>{comment.comment}</div>
                                    )}</p>
                                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                </div>
                                <div className="d-flex justify-content-center text-center py-1">
                                    <button id="like-dislike" style={{backgroundImage: `url(${liked ? dislikePhoto : disliked ? likePhoto : likePhoto})`, width: '90px', height: '90px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', border: 'none'}} onClick={handleLikeDislikeDream}>
                                    </button>               
                                </div>
                                <div className="d-flex justify-content-center text-center py-1">
                                    <p className="text-center">Send a Letter with donation</p>
                                </div>
                                <p className="text-center">
                                    <Link to={`/paypal-transfer/${id}`}><FontAwesomeIcon className="mt-1 h1 text-success" icon={faEnvelope} /></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DreamDetails