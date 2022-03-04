import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./components/Home/Home";
import About from "./components/About/About"
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {

    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="About" element={<About />} /> 
                    <Route path="Experience" element={<Experience />} /> 
                    <Route path="Projects" element={<Projects />} /> 
                    <Route path="Contact" element={<Contact />} /> 
                </Routes>
        </BrowserRouter>
    )
}

export default App;