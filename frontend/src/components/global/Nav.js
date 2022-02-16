import React, {useState} from 'react';
import Styles from './Styles.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [ color, setColor ] = useState('translateX(-100%)');
    const [ rotate, setRotate ] = useState('');
    const [close, setClose] = useState("/hamburger.svg");

    const menuToggle = () => {
        if(color !== "translateX(-100%)"){
            setColor("translateX(-100%)");
            setRotate("rotate(0deg)");
            setClose("/hamburger.svg")
        }
        else {
            setColor("translateX(0%)");
            setRotate("rotate(90deg)");
            setClose("/close.png")
            
        }
        document.body.classList.toggle('lock-scroll');
    }


    return (
        <div>
            <nav className = "nav">
                <ul className = "nav-list">

                    <li><Link to="/" className="nav-link">HOME</Link></li>
                    <li><Link to={`/about/`} className="nav-link">ABOUT</Link></li>
                    <li className = "logo" >THE LSAT REPORT</li>
                    <li><Link to={`/contact/`} className="nav-link">CONTACT</Link></li>
                    <li><Link to={`/blog/`} className="nav-link">BLOG</Link></li>

                
                </ul>
                <ul className = "mobile-nav-list">
                    <li className = "logo" >THE LSAT REPORT</li>
                    <li>
                        <img className = "hamburger-menu" src={close} height="32px" onClick={() => menuToggle()} style={{ 'transform': rotate}}></img>
                    </li>
    
                </ul>
            </nav>

            <div className="menu" style={{ 'transform': color}}>
                <ul className = "menu__links">
                    <li><Link to="/" className="menu__link" onClick={() => menuToggle()}>HOME</Link></li>
                    <li><Link to={`/about/`} className="menu__link" onClick={() => menuToggle()}>ABOUT</Link></li>
                    <li><Link to={`/contact/`} className="menu__link" onClick={() => menuToggle()}>CONTACT</Link></li>
                    <li><Link to={`/blog/`} className="menu__link" onClick={() => menuToggle()}>BLOG</Link></li>
                </ul>
            </div>
        </div>

        
    )
}

export default Nav


