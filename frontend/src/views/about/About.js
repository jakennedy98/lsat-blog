
import React, {useState, useEffect} from 'react'
import Nav from "../../components/global/Nav"
import AboutMe from "../../components/about/AboutMe";
import NewsLetter from "../../components/blogs/NewsLetter";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div>
             <Helmet htmlAttributes>
                <html lang="en" />
                <title>About | The LSAT Report</title>
                <meta name="description" content="Basic example" />
            </Helmet>

            <Nav/>
            <AboutMe/>
            <NewsLetter/>
        </div>
    )
}

export default About
