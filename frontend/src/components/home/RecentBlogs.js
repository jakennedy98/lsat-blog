import React from 'react'

function RecentBlogs() {
    return (
        <section className = "recent-blog-area">

            <div className = "recent-blog-wrapper">
              <div className = "recent-blog">
                  <div className = "recent-blog-thumbnail">
                     <img src="blocks.jpg" width = "100%" height="100%"></img>
                  </div>
                  <div className = "recent-blog-description">
                        <div className = "recent-blog-title">
                            <div>How to break down an argument</div>
                        </div>
                    
                  </div>
              </div>
            </div>
        
            <div className = "recent-blog-wrapper">
              <div className = "recent-blog">
                  <div className = "recent-blog-thumbnail">
                      <img src="suff.png" width = "100%" height="100%"></img>
                  </div>
                  <div className = "recent-blog-description">
                        <div className = "recent-blog-title">
                            <div>Sufficient and Necessary Conditions</div>
                        </div>
                     
                  </div>
              </div>
            </div>

            <div className = "recent-blog-wrapper">
              <div className = "recent-blog">
                 <div className = "recent-blog-thumbnail">
                     <img src="seals.jpg" width = "100%" height="100%"></img>
                  </div>
                  <div className = "recent-blog-description">
                        <div className = "recent-blog-title">
                            <div>What to look out for in a weaken question</div>
                        </div>
                    
                  </div>
              </div>
            </div>


        </section>
    )
}

export default RecentBlogs
