import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageService from "../../services/ImageService";
import "../../styles/global.css"

function OfferDetails() {
  const { id } = useParams();
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/offers/${id}`)
      .then((response) => response.json())
      .then((data) => setOffer(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!offer) {
    return <div>Loading...</div>;
  }

  return(
    <div className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card">
                        <div className="rounded-top text-white d-flex flex-row">
                            <div className="ms-4 mt-5 d-flex flex-column text-dark align-items-center">
                                <ImageService data={offer}/>
                                <h1 className="mv-2" >{offer.title}</h1>
                                <p>{offer.type}</p>
                                <p>{offer.description}</p>
                            </div>
                        </div>
                        <div className="p-4 text-black">
                            <div className="d-flex justify-content-center text-center py-1">
                                <div>
                                    {/* <p className="mb-1 h5">{dream.likes}</p> */}
                                    <p className="small text-muted mb-0">Likes</p>
                                </div>
                         
                            </div>
                        </div>
                        <div className="card-body p-4 text-black">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <p className="lead fw-normal mb-0">Price: {offer.price}$</p>
                            </div>
                        </div>
                        <button>BUY NOW!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


}

export default OfferDetails;
