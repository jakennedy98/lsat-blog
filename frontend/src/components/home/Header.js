import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="header-area">
             <div className = "recent-blog-wrapper">
              <Link to={'/blog/'} className = "newest-blog recent-blog">
    
                  <div className = "recent-blog-thumbnail">
                     <img src="colors.jpg" width = "100%" height="100%"></img>
                  </div>
                  <div className = "recent-blog-description">
                        <div className = "recent-blog-title newest-blog-title">
                            <div>Creating a Study Schedule</div>
                        </div>
                      <div className = "recent-blog-date newest-blog-date">December 12, 2021</div>
                  </div>
              </Link>
            </div>

            <div className = "home-about-me-container">
                <img className = "profile-image" src="/face.jpeg" width = "60%" height="60%" ></img>
                <div className = "profile-details">
                    <div id="about-jacob">About Jacob Kennedy</div>
                    <div><span style={{fontWeight: 700}}>LSAT:</span> 174</div>
                    <div><span style={{fontWeight: 700}}>Students Tutored:</span> 2500+</div>
                    <div>I have developed a systematic approach to the LSAT, and I hope to share some of that knowledge with you to help you achieve your goals!  </div>
                    <a><span style={{fontWeight: 700}}>Learn more about Jacob</span></a>
                </div>
            </div>
        </section>
    )
}

export default Header
