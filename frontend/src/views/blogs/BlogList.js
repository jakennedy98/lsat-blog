import React, {useState, useEffect} from 'react'
import Nav from "../../components/global/Nav"
import BlogCard from "../../components/blogs/BlogCard"
import NewsLetter from "../../components/blogs/NewsLetter";
import axios from "axios";
import { Helmet } from "react-helmet";

const BlogList = () => {

    const [articleData, setArticleData] = useState();
    const [search, setSearch] = useState('');

    useEffect(() =>{

        axios.get('http://localhost:8000/api/blog-post/?ordering=-date_published', 
            )
            .then(res => {
                setArticleData(
                    res.data.filter(res => res.title.toLowerCase().includes(search.toLowerCase()) 
                    || 
                    res.description.toLowerCase().includes(search.toLowerCase())))
            })
            .catch(err => {
                console.log(err);
            })
    },[search])

    return (
        
        articleData ?
        <div>
            {/*
            <Helmet>
                <html lang="en" />
                <title>Blogs | The LSAT Report</title>
                <meta name="description" content="Basic example" />
            </Helmet>
            */}
            <Nav></Nav>
            <div className = "blog-list-wrapper">
                <input className = "blog-search" placeholder = "search for an article" onChange = {e => setSearch(e.target.value)}></input>
                <BlogCard articleData = {articleData}/>
            </div>
            <NewsLetter/>
        </div>
        : <div/>
    )
}

export default BlogList;
