import React from 'react';
import Styles from "./Styles.css"
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className = "about-me">
            <div className = "about-me__photo-area">
                <img src="/face.jpeg" className = "about-me__photo"></img>
            </div>
            <div className="about-me__description">
                <h1>About Me</h1>
                <p>Hi, I'm Jacob - an LSAT instructor with over 3,000 hours of private one-on-one
                    tutoring under my belt.
                </p>
                <p>Unlike most test takers, my LSAT journey did not begin with a desire 
                    to attend law school. Rather, I stumbled upon the exam and I thought
                    it was fun! 
                </p>
                <p>My initial practice test score was nothing to brag about, but the LSAT is a learnable exam. I was able to increase my score by
                    over 20 points, resulting in a score of 174 on test day. Since then, I've done every question ever released, and studied them thoroughly. 
                </p>
                <p>I like to make the exam as systematic as possible. You don't have time on test day to waste precious seconds planning out your next move, yet if you don't think in the right way you
                    risk making mistakes. Thus, for every situation you may find yourself in during the test,
                    you want to have prepared an approach ahead of time. My goal is to aid in this preparation.
                </p>

                <p>If you have any questions, don't hesitate to <Link to="/contact/">contact</Link> me.
                </p>
            </div>
            
        </div>
    )
}

export default AboutMe;
