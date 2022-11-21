import React from 'react';
import {  Link } from "react-router-dom";
import './NavBar.css';
import AuthHeader from './AuthHeader.jsx'


const Navbar= () =>{
  return (
  <div>
    <AuthHeader  />
    <li id="navbar">
      <Link to="/">Homepage</Link>
    </li>
    <li id="navbar">
      <Link to="/ThingsToDo">Things To Do</Link>
    </li>
    <li id="navbar">
      <Link to="/FindMyWay">Find My Way</Link>
    </li>
    <li id="navbar">
      <Link to="/VannerRecommendation">Vanner Recommendation</Link>
    </li>
  </div>
  );
}
export default Navbar;