import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import News_Items from './components/news_Items.js';
import About from './components/about.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <Routes>
        <Route exact path="/home" element={<News_Items />} />
       <Route path="/" element={<News_Items />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
      </div>

    );
  }
}
