import React, {useState, useEffect} from 'react'
import Styles from "./Styles.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsLetter = () => {

    const [email, setEmail] = useState('');

    let postData = {
        email: email
    }

    const post = () => {
        axios.post('http://localhost:8000/api/email/', postData
        )
        .then((response) => alert('Your email was added to the newsletter!'))
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className = "footer">
            <ul className = "footer__links">
                <li><Link to="/" className="nav-link">HOME</Link></li>
                <li><Link to={`/about/`} className="nav-link">ABOUT</Link></li>
                <li><Link to={`/contact/`} className="nav-link">CONTACT</Link></li>
                <li><Link to={`/blog/`} className="nav-link">BLOG</Link></li>
            </ul>
            <div className = "newsletter">
                <div>Sign up for our newsletter</div>
                <div>
                    <input className="footer__input" placeholder="Your Email" onChange= {(e) => setEmail(e.target.value)}></input>
                    <button onClick={() => post()} className = "footer__input-button">Join</button>
                </div>
               
            </div>
            <div className="footer__copyright">© The LSAT Report 2022</div>
        </div>
    )
}

export default NewsLetter;
