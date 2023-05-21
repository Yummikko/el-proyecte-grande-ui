import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import dreamLogo from "../../../assets/images/DreamCatcher-logo.png";



const PaypalSuccess = () => {

    return (
        <div>
            <div className="header">
                <img className="me-5 pb-2" width="400" src={dreamLogo} />
                <h2 className="just">Payment was successful</h2>
                <div>
                    <p>Thank you for funding this dream.</p>
                    <Link to={"/home"} className="nav-link">
                        <button className='btn btn-danger'>Return to Homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default PaypalSuccess;