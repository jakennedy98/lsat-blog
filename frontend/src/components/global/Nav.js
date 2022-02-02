import React from 'react';
import Styles from '../Styles.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className = "nav">
            <ul className = "nav-list">
                <li><Link to="/" className="nav-link">HOME</Link></li>
                <li><Link to="about/" className="nav-link">ABOUT</Link></li>
                <li className = "logo" >LSAT Blog</li>
                <li><Link to="contact/" className="nav-link">CONTACT</Link></li>
                <li><Link to="blog/" className="nav-link">BLOG</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
