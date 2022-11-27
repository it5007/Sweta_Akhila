import '../../css/App.css';
import Map from './Map.jsx';
import Footer from './Footer.jsx';
import { useLoadScript } from "@react-google-maps/api";
import React from 'react';
import ReactDOM from 'react-dom';

export default function UseMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRcOrqy5xvW8gzUwva11JsIPx3UwjiHB4",
  })

  const  loadedsuccess = <>
    <div className="App">
        <div>
            <Map />
        </div>
        <div id="directions-panel"></div>
        <div>
        <Footer />
        </div>
    </div> </> ;

  const  loadedfail = <>
  <div className="App">
      <p>"Loading Failure"</p>
      <div id="directions-panel"></div>
  </div> </> ;

  if (isLoaded) return loadedsuccess ;
  return loadedfail ;
  

}
