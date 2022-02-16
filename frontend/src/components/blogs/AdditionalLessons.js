import React from 'react';
import { Link } from 'react-router-dom';

const AdditionalLessons = (props) => {

    return (
        <div className="additional-lessons">
            <h2 className="additional-lessons__header">
                check out other articles
            </h2>
            <div className = "additional-lessons__wrapper">

                {props.articleData.map(article => 
                    <Link to={`/blog/${article.slug}/`} className = "additional-lessons__article"> 
                        <div className = "additional-lessons__image-wrapper">
                            <img  src={article.thumbnail} width = "100%" height="100%" className = "additional-lessons__image"></img>
                        </div>
                        <div className="additional-lessons__description" >{article.title}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default AdditionalLessons
