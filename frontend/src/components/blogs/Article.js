import React, {useState, useEffect} from 'react'
import axios from 'axios'
import parse from 'html-react-parser';

//TODO When the title is too short, it is centered, which looks bad. Move it to the left. 

const Article = (props) => {

    return (
 
        <div className = "article-wrapper">
            <div className = "sidebar-area">
                <img src = "/twitter.png" height="24px"></img>
                <img src = "/facebook.png" height="24px"></img>
                <img src = "/linkedin.png" height="24px"></img>
                <img src = "/email.png" height="24px"></img>
            </div> 
            <div className = "article-main">
                <h1 className = "article-title">
                    <div> {props.articleData.title}</div>
                    <div className = "author-area">
                        <img src="/face.jpeg" className = "author-area__photo" width = "40px"></img>
                        <div className = "author-area__name">Jacob Kennedy</div>
                        <div className = "author-area__date">{props.articleData.date_published}</div>
                    </div>
                </h1>
                
                <img src={props.articleData.thumbnail} height="360px" className="article-image"></img>
                
                <div className = "article-content">
                    {parse(props.articleData.text)}
                </div>
            </div>
        </div> 

      
    )
}

export default Article
