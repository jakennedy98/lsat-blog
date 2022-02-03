import React from 'react'
import Nav from "../../components/global/Nav"
import AboutMeCard from "../../components/blogs/AboutMeCard";
import Article from "../../components/blogs/Article";
import AdditionalLessons from '../../components/blogs/AdditionalLessons';
import NewsLetter from "../../components/blogs/NewsLetter";
import Styles from "./Styles.css"

const Blogs = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="content-area">
                <Article/>
            </div>
            <AdditionalLessons/>
            <NewsLetter/>
       
           
       
           
            
        </div>
    )
}

export default Blogs
