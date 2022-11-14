import React , {useEffect, useState} from 'react';
import { render } from "react-dom";

export default function Geolocation(props) {

  //const [weather, setWeather] = useState({});
  const [userPos, setUserPos] = useState({lat: null, long: null})

  useEffect( async () => {
    await navigator.geolocation.getCurrentPosition( (position) => {
      let { latitude, longitude } = position.coords;
      const newUserPos = { lat: latitude, long: longitude, };
      setUserPos(newUserPos);
    });
  }, []);


  return (
    <div className="App">
      <h3>Weather App</h3>
      {userPos.lat && <h1>Hi , {userPos.lat} ,  {userPos.long}</h1>}
    </div>
  );
}
