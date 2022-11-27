import React from 'react';
import {  Link } from "react-router-dom";
//import './NavBar.css';
import AuthHeader from './AuthHeader.jsx'

{/*<div class="row">
    <div class="col-sm-3">
</div>*/}

const Navbar= () =>{
  return (
  <div class="navbar navbar-light bg-warning">
      <Link class="navbar-brand" to="/">Homepage</Link>
      <Link class="navbar-brand" to="/ThingsToDo">Things To Do</Link>
      <Link class="navbar-brand" to="/FindMyWay">Find My Way</Link>
      <Link class="navbar-brand" to="/Recommender">Vanner Recommendation</Link>
      <AuthHeader />
  </div>
  );
}
export default Navbar;