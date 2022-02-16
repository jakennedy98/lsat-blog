import React from 'react'
import Contact from '../../components/contact/Contact'
import Nav from "../../components/global/Nav"
import Styles from "./Styles.css"
import NewsLetter from "../../components/blogs/NewsLetter";
import { Helmet } from "react-helmet";

const ContactView = () => {
    return (
        <div >
            <Helmet>
                <html lang="en" />
                <title>Contact | The LSAT Report</title>
                <meta name="description" content="Basic example" />
            </Helmet>
            <Nav/>
            <div className = "contact-area">
                <h1 className = "contact-area__header" >Got any questions?</h1>
                <div>Fill out this form and I'll get back to you as soon as possible.</div>
                <div className = "contact-area__grid">
                    <div className = "contact-area__form">
                    <Contact></Contact>
                    </div>
                </div>
            </div>
            <NewsLetter/>
        </div>
    )
}

export default ContactView
