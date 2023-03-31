import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ImageService from "../../services/ImageService";
import "../../styles/global.css"


const DreamDetails = () => {

    const { id } = useParams();

    const url = "http://localhost:8080/api/v1/dreams/" + id;
    
    const [dream, setDream] = useState("");

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
    
    return(
        <div className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card">
                            <div className="rounded-top text-white d-flex flex-row">
                                <div className="ms-4 mt-5 d-flex flex-column text-dark align-items-center">
                                    <ImageService data={dream}/>
                                    <h5 className="mv-2">{dream.dreamTitle}</h5>
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
                                    <p className="lead fw-normal mb-0">Hashtags: {dream.hashtags}</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0">Comments: {dream.comments}</p>
                                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
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