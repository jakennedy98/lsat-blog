import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {

    
    return (
       <div className="blog-card-wrapper">
   
           {props.articleData.map((article) => 
               <Link to={`/blog/${article.slug}/`} className = "blog-card">
                    <img src={article.thumbnail} className = "blog-card__thumbnail"/>
                    <div className = "blog-card__description">
                        <div className="blog-card__title">{parse(article.title)}</div>
                        <div className = "blog-card__date">{parse(article.date_published)}</div>
                        <div>{parse(article.description)}</div>
                    </div>
               </Link>
    
           )}
         
            
        </div>
    )
}

export default BlogCard

