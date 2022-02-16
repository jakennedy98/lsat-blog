import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Styles from "./Styles.css"
import axios from "axios"

const Header = (props) => {

    return (
        <section className="header-area">
            <div className = "newest-blog-wrapper">
              <Link to={`/blog/${props.newestArticle.slug}`} className = "newest-blog recent-blog">
                    <div className = "recent-blog-thumbnail">
                        <img className = "thumbnail" src={props.newestArticle.thumbnail} width = "100%" height="100%"></img>
                    </div>
                    <div className = "recent-blog-description">
                        <div className = "recent-blog-title newest-blog-title">
                            <div>{props.newestArticle.title}</div>
                        </div>
                        <div className = "recent-blog-date newest-blog-date">{props.newestArticle.date_published}</div>
                    </div>
              </Link>
            </div>
        </section>
    )
}

export default Header
