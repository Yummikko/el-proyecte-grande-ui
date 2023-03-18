import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Share Your Dream</h1>
                    <h2>Get Support to Realize It</h2>
                    <Link className='btn btn-primary' to="/">Create Dream</Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;