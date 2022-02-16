import axios from "axios";
import Nav from "../../components/global/Nav";
import React, {useState, useEffect} from 'react';
import Header from "../../components/home/Header";
import Footer from "../../components/global/Footer";
import NewsLetter from "../../components/blogs/NewsLetter";
import RecentBlogs from "../../components/home/RecentBlogs";
import Menu from "../../components/global/Menu";
import { Helmet } from "react-helmet";


const Home = () => {

    const [newestArticle, setNewestArticle] = useState();
    const [recentArticles, setRecentArticles] = useState();

    useEffect(() =>{

        axios.get('http://localhost:8000/api/blog-post/?ordering=-date_published', 
            )
            .then(res => {
                setNewestArticle(res.data.slice(0,1)[0]);
                setRecentArticles(res.data.slice(1));
            })
        
         
            .catch(err => {
                console.log(err);
            })
    },[])

    return (
        newestArticle && recentArticles ?
        <div>
            <Helmet htmlAttributes>
                <html lang="en" />
                <title>Home | The LSAT Report</title>
                <meta name="description" content="Basic example" />
            </Helmet>
            <Nav/>
            <Header newestArticle={newestArticle}/>
            <RecentBlogs recentArticles = {recentArticles}/>
            <NewsLetter/>
            <Menu/>
        </div>
        : <div/>
    )
}

export default Home
