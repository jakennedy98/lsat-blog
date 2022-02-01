import React from 'react';
import Styles from './Styles.css';

const Nav = () => {
    return (
        <nav className = "nav">
            <ul className = "nav-list">
                <li><a>HOME</a></li>
                <li><a>ABOUT</a></li>
                <li className = "logo">LSAT Blog</li>
                <li><a>BLOG</a></li>
                <li><a>CONTACT</a></li>
            </ul>
        </nav>
    )
}

export default Nav
