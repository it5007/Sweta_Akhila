import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import AuthHeader from './components/AuthHeader.jsx'
import BackgroundImage from './components/BackgroundImage.jsx';
import UseMap from './components/UseMap.jsx';
import ThingsToDo from './components/ThingsToDo.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx"
import Recommender from './components/Recommender.jsx';

const elem = (
<>
<Router>
{/*<AuthHeader />*/}
  <Navbar />
  <Routes>
    <Route path='/' exact element={<BackgroundImage />}  />
    <Route path='/ThingsToDo' element={<ThingsToDo />} />
    <Route path='/FindMyWay' element = {<UseMap />} />
    <Route path='/Recommender' element = {<Recommender />} />
</Routes>
</Router>
</>
);

/**const elem = (
  <>
  <Recommender />
  </>
  );*/

ReactDOM.render(elem, document.getElementById('contents'));


