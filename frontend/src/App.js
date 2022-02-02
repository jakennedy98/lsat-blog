import logo from './logo.svg';
import './App.css';
import Home from "./views/Home"
import AboutMe from "./views/AboutMe"
import Blogs from "./views/Blogs"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about/" element={<AboutMe/>}/>
          <Route path="/blog/" element={<Blogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
