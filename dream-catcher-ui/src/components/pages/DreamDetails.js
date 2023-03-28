import React from "react";
import { useState, useEffect } from "react"
import ImageService from "../../services/ImageService";
import "../../styles/global.css"


const DreamDetails = () => {

    const dreamId = '1';
    const url = `http://localhost:8080/api/v1/dreams/${dreamId}`;
    
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

    }, []);
    
    return(
        <div className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card">
                            <div className="rounded-top text-white d-flex flex-row">
                                <div className="ms-4 mt-5 d-flex flex-column">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder" className="img-fluid img-thumbnail mt-4 mb-2" />
                                    <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark">
                                        Edit profile
                                    </button>
                                    </div>
                                    <div className="ms-3 text-dark">
                                    <h5 className="">{dream.dreamTitle}</h5>
                                    <p>{dream.dreamDescription}</p>
                                </div>
                            </div>
                            <div className="p-4 text-black">
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <p className="mb-1 h5">253</p>
                                        <p className="small text-muted mb-0">Photos</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-1 h5">1026</p>
                                        <p className="small text-muted mb-0">Followers</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 h5">478</p>
                                        <p className="small text-muted mb-0">Following</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-4 text-black">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4">
                                        <p className="font-italic mb-1">Web Developer</p>
                                        <p className="font-italic mb-1">Lives in New York</p>
                                        <p className="font-italic mb-0">Photographer</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0">Recent photos</p>
                                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                    <ImageService />
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