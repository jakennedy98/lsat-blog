import React, {useState} from 'react';
import Styles from "./Styles.css";
import axios from "axios";

const Contact = () => {

    const [postData, setPostData] = useState({
        "first_name": '', 
        "last_name": '', 
        "email": '', 
        "message": ''
    })

    const post = () => {
        axios.post('http://localhost:8000/api/contact/', postData)
        .then(() => alert('Your message has been received.'))
        .catch(err => {
           console.log(err)
        })
    }

    return (
        <div>
            <form className="contact-form">
                <div className="contact-form__first-name">
                    <label>First Name</label>
                    <input onChange = {(e) => setPostData({...postData, "first_name": e.target.value})}></input>
                </div>
                <div className="contact-form__last-name">
                    <label>Last Name</label>
                    <input onChange = {(e) => setPostData({...postData, "last_name": e.target.value})}></input>
                </div>
                <div className="contact-form__email">
                    <label>Email</label>
                    <input onChange = {(e) => setPostData({...postData, "email": e.target.value})}></input>
                </div>
                <div className="contact-form__message">
                    <label>Message</label>
                    <textarea onChange = {(e) => setPostData({...postData, "message": e.target.value})}></textarea>
                </div>
                <button className = "contact-form__button" onClick = {() => post()}>SEND</button>
            </form>
        </div>
    )
}

export default Contact;
