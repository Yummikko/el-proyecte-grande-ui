import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";



const PaypalSuccess = () => {

    return (
        <div>
            <div className="header">
                <h2 className="just">Payment was successful</h2>
                <div>
                    <p>Thank you for funding this dream.</p>
                </div>
            </div>
        </div>
    )
};

export default PaypalSuccess;