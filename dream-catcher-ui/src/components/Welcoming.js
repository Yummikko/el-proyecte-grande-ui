import React from "react";
import styled from "styled-components";
import "../styles/global.css"


const Welcoming = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col order-last mt-5">
            <img className="w-75 rounded-circle" src={process.env.PUBLIC_URL + '/images/support-dreams.jpg'} alt="support dreams" />
            <h2 className="mt-3">Support Dreams</h2>
          </div>
          <div className="col">
            <h1 className="fs-2">DREAM CATCHER</h1>
          </div>
          <div className="col order-first">
            <img className="w-75 rounded-circle" src={process.env.PUBLIC_URL + '/images/share-dream.png'} alt="share dreams" />
            <h2>Share Dreams</h2>
          </div>
        </div>
      </div>
  );
};

export default Welcoming;