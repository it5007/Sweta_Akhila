import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import AuthHeader from './AuthHeader.jsx'
import BackgroundImage from './BackgroundImage.jsx';
import VannerTask from './VannerTask.jsx';
import Footer from './Footer.jsx';

const element = (
    <>
    <AuthHeader/>
    <BackgroundImage />
    <VannerTask/>
    <Footer/>
    </>
);

ReactDOM.render(element, document.getElementById('contents'));
