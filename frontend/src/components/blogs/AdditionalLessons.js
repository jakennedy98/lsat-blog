import React from 'react'

const AdditionalLessons = () => {
    return (
        <div className="additional-lessons">
            <h2 className="additional-lessons__header">
                check out other articles
            </h2>
            <div className = "additional-lessons__wrapper">
                <div className = "additional-lessons__article"> 
                    <div className = "additional-lessons__image-wrapper">
                        <img  src="/blocks.jpg" width = "100%" height="100%" className = "additional-lessons__image"></img>
                    </div>
                    <div className="additional-lessons__description">The Building Blocks of Logical Reasoning</div>
                </div>

                <div className = "additional-lessons__article"> 
                    <div className = "additional-lessons__image-wrapper">
                        <img  src="/suff.png" width = "100%" height="100%" className = "additional-lessons__image"></img>
                    </div>
                    <div className="additional-lessons__description">Dealing with Conditional Logic</div>
                </div>

                <div className = "additional-lessons__article"> 
                    <div className = "additional-lessons__image-wrapper">
                        <img  src="/seals.jpg" width = "100%" height="100%" className = "additional-lessons__image"></img>
                    </div>
                    <div className="additional-lessons__description">The Building Blocks of Logical Reasoning</div>
                </div>


            </div>
        </div>
    )
}

export default AdditionalLessons
