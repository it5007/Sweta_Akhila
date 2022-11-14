import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import AuthHeader from './components/AuthHeader.jsx'
import BackgroundImage from './components/BackgroundImage.jsx';
import VannerTask from './components/VannerTask.jsx';
import Footer from './components/Footer.jsx';
import UseMap from './components/UseMap.jsx';
import Geolocation from './components/Geolocation.jsx';

/**const element = (
        <>
        <UseMap />
        </>
);*/

const element = (
    <>
    {/**<Geolocation/>**/}
    <AuthHeader/>
    <UseMap />
    <BackgroundImage />
    <VannerTask/>
    {/**<Footer/>**/}
    </>
);

ReactDOM.render(element, document.getElementById('contents'));


