import React from 'react';

const Header = () => {
    return (
        <section className="header-area">
             <div className = "recent-blog-wrapper">
              <div className = "newest-blog">
                  <div className = "recent-blog-thumbnail">
                     <img src="colors.jpg" width = "100%" height="100%"></img>
                  </div>
                  <div className = "recent-blog-description">
                        <div className = "recent-blog-title">
                            <div>How to break down an argument</div>
                        </div>
                      <div className = "recent-blog-date">Published on: December 7, 2021</div>
                  </div>
              </div>
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
