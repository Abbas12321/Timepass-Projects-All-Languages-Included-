import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Error from './Error';

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error/>}/>   // error page called 
        </Routes>
        </BrowserRouter>
        
    );
}

export default App;