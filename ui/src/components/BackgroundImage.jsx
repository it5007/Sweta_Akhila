import React from 'react';
import logo from '../../images/time-to-travel-wooden-sign-beach-background-49509295.jpg'
import Footer from './Footer.jsx'
import './BackgroundImage.css';

export default class BackgroundImage extends React.Component {
  render() {
    var divStyle = {
      height: "100vh",
      backgroundSize: 'cover',
      backgroundImage: `url(${logo})`,
      backgroundPosition: 'center',
      display: 'block',
    };
    return (
      <div>
      <div  style={divStyle} class="container-fluid mt-2" >
        <div>
          <h1 class="text-white">Welcome to Vanner!</h1>
          <h3>One-stop solution for an optimised and worthwhile vacation in Singapore.</h3>
          {/*<a href="#" className="previous round">&#8249;</a>
          <a href="#" className="next round">&#8250;</a>*/}
        </div>
        </div>
        <Footer />
        </div>
              
      );
    }
}