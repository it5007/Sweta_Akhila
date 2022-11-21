import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import AuthHeader from './components/AuthHeader.jsx'
import BackgroundImage from './components/BackgroundImage.jsx';
import UseMap from './components/UseMap.jsx';
import Geolocation from './components/Geolocation.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"


const Index = (
<>
<Router>
  <Navbar />
  <Routes>
    <Route path='/' exact element={<BackgroundImage />}  />
    {/*<Route path='/ThingsToDo' element={<ThingsToDo />} />*/}
    <Route path='/FindMyWay' element = {<UseMap />} />
  </Routes>
</Router>
</>
);

export default Index;