import React, {useState, useEffect} from 'react'
import Nav from "../../components/global/Nav"
import AboutMeCard from "../../components/blogs/AboutMeCard";
import Article from "../../components/blogs/Article";
import AdditionalLessons from '../../components/blogs/AdditionalLessons';
import NewsLetter from "../../components/blogs/NewsLetter";
import Styles from "./Styles.css"
import axios from "axios"
import {useParams} from "react-router-dom";
import { Helmet } from "react-helmet";

const Blogs = () => {

    const {slug} = useParams();

    const [articleData, setArticleData] = useState();
    const [currentArticleData, setCurrentArticleData] = useState();
    const [image, setImage] = useState();
    

    useEffect(() =>{

        axios.get('http://localhost:8000/api/blog-post/?ordering=-date_published', 
            )
            .then(res => {

                const currentArticle = res.data.find(article => article.slug == slug);

                setImage(currentArticle.thumbnail);

                let random = () => res.data.filter(item => item.slug != slug).sort(() => .5 - Math.random()).slice(0,3)

                setArticleData(random);
                setCurrentArticleData(
                    {
                        title: currentArticle.title,
                        date_published: currentArticle.date_published,
                        text: currentArticle.text,
                        thumbnail: currentArticle.thumbnail
                    }
                ); 
            })
            .then(res => window.scrollTo(0, 96))
            .catch(err => {
                console.log(err);
            })
    },[slug])

    return (
        currentArticleData ?
       
        <div>
             <Helmet htmlAttributes>
                <html lang="en" />
                <title>{currentArticleData.title} | The LSAT Report</title>
                <meta name="description" content="Basic example" />
            </Helmet>
          
            <Nav></Nav>
            <div className="content-area">
                <Article articleData={currentArticleData}/>
                <AdditionalLessons articleData={articleData}/>
            </div>
          
            <NewsLetter/>
            
        </div>
        : <div/>
       

    )
}

export default Blogs
