import logo from './logo.svg';
import './App.css';
import Home from "./views/home/Home"
import AboutMe from "./views/AboutMe"
import Blog from "./views/blogs/Blog"
import BlogList from "./views/blogs/BlogList"
import About from "./views/about/About"
import ContactView from "./views/contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about/" element={<About/>}/>
          <Route path="/blog/:slug" element={<Blog/>}/>
          <Route path="/blog/" element={<BlogList/>}/>
          <Route path="/contact/" element={<ContactView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
