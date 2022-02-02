import React from 'react';
import Nav from "../components/global/Nav"
import Header from "../components/home/Header"
import RecentBlogs from "../components/home/RecentBlogs"
import Footer from "../components/global/Footer"

const Home = () => {
    return (
        <div>
            <Nav/>
            <Header/>
            <RecentBlogs/>
            <Footer/>
            
        </div>
    )
}

export default Home
