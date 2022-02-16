import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function RecentBlogs(props) {

    const [showArticles, setShowArticles] = useState(3);
    const [recentArticles, setRecentArticles] = useState();
    const [showChevron, setShowChevron] = useState(true);

    const moreOnClick = () => {
        if(showArticles < props.recentArticles.length){
            setShowArticles(showArticles + 3)
        }
        if(showArticles + 3 >= props.recentArticles.length){
            setShowChevron(false);
        }
    }

    const checkChevron = () => {
        if (showChevron >= recentArticles.length) {
            setShowChevron(false);
        }
    }

    useEffect(() =>{
        setRecentArticles(props.recentArticles.slice(0, showArticles));
    },[showArticles])
    
    return (
        recentArticles ?
        
        <div>
            <section className = "recent-blog-area">

                {recentArticles.map(article => 
                    <Link to={`/blog/${article.slug}`} className = "recent-blog-wrapper">
                        <div className = "recent-blog">
                            <div className = "recent-blog-thumbnail">
                                <img className = "thumbnail" src={article.thumbnail} width = "100%" height = "100%" ></img>
                            </div>
                            <div className = "recent-blog-description">
                                <div className = "recent-blog__title">{article.title}</div>
                                <div className = "recent-blog__date">{article.date_published}</div>
                            </div>
                        </div>
                    </Link>
                )}

            </section>

            {showChevron &&
                <div className = "more-articles" onClick = {moreOnClick}>
                    <div>More Articles</div>
                    <img src="down-arrow.png" height="24"></img>
                </div>
            }

        </div>
        : <div/>

    )
}

export default RecentBlogs
