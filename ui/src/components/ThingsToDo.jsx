import {useEffect, useState} from 'react';
import ReviewCard from './Card.jsx';
import { Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.jsx';

function ThingsToDo() {
  const [attraction, setAttraction] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  const [AttractionArray, setAttractionArray] = useState([]);
  const [hotelArray, sethotelArray] = useState([]);
  const [restArray, setrestArray] = useState([]);


  function populateAttractionArray(attraction) {
    let attractionArray = []
    for (let i=0; i<8; i++) {
        let obj = {}
        obj["name"] = attraction["data"]["results"][i]["name"];
        obj["uuid"] = attraction["data"]["results"][i]["images"][0]["uuid"];
        obj["url"] = "https://tih-api.stb.gov.sg/media/v1/download/uuid/" + obj["uuid"] + "?apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3";
        attractionArray.push(obj);
    }
    setAttractionArray(attractionArray)
  }

  function populateHotelArray(hotel) {
    let hotelArray = []

    for (let i=0; i<8; i++) {
        let obj = {}
        
        if(hotel["data"]["results"][i]["images"][0]["uuid"] !== undefined)
        {
        obj["name"] = hotel["data"]["results"][i]["name"];
        obj["uuid"] = hotel["data"]["results"][i]["images"][0]["uuid"];
        obj["url"] = "https://tih-api.stb.gov.sg/media/v1/download/uuid/" + obj["uuid"] + "?apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3";
        hotelArray.push(obj);
        }
    }
    sethotelArray(hotelArray)
    
  }

  function populateRestArray(restaurant) {
    let restArray = []
    
    for (let i=0; i<8; i++) {
        let obj = {}
       
        obj["name"] = restaurant["data"][i]["name"];
        obj["uuid"] = restaurant["data"][i]["images"][0]["uuid"];
        obj["url"] = "https://tih-api.stb.gov.sg/media/v1/download/uuid/" + obj["uuid"] + "?apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3";
        restArray.push(obj);
        
    }
    setrestArray(restArray)
  }

  useEffect(() => {
    fetch(
      "https://tih-api.stb.gov.sg/content/v1/search/all?dataset=attractions&language=en&apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3"
    )
      .then(response => response.json())
      .then(async (response) => {
        populateAttractionArray(response)
        setAttraction(response)
      })
  }, [])
  

  useEffect(() => {
    fetch(
      "https://tih-api.stb.gov.sg/content/v1/search/all?dataset=accommodation&language=en&apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3"
    )
      .then(response => response.json())
      .then(async (response) => {
        populateHotelArray(response)
        setHotel(response)
      })
  }, [])

  useEffect(() => {
    fetch(
      "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=restaurants&language=en&apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3"
    )
      .then(response => response.json())
      .then(async (response) => {
        populateRestArray(response)
        setRestaurant(response)
      })
  }, [])


  /*let imurl = "https://tih-api.stb.gov.sg/media/v1/download/uuid/10185a2bb2b611d407785c02c7a3a58df8b?apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3";
*/
  return (
    <div>
    <div className="App">
      <header className="App-header">
      
          <h1>Attractions</h1>
          <Grid container spacing={3} >
          {AttractionArray?.map((attrac, i) =>(
            <Grid item key={i}>
              <ReviewCard name={attrac["name"]} url={attrac["url"]}  />
              </Grid>
          ))}
          
        </Grid>
       {/* {attraction && attraction["data"] && attraction["data"]["results"] ? attraction["data"]["results"].map(
          attr => <p>{attr["name"]}</p>

       ): ""}*/}   

   
        <h1>Hotels</h1>
        {/*
        {hotel && hotel["data"] && hotel["data"]["results"] ? hotel["data"]["results"].map(
          hot => <p>{hot["name"]}</p>
        ): ""}
        */}

          <Grid container spacing={3} >
          {hotelArray?.map((hot, i) =>(
            <Grid item key={i}>
              <ReviewCard name={hot["name"]} url={hot["url"]}  />
              </Grid>
          ))}
          {/*
            console.log(hotelArray)
          */}
        </Grid>

        <h1>Restaurants</h1>
         < Grid container spacing={3} >
          {restArray?.map((hot, i) =>(
            <Grid item key={i}>
              <ReviewCard name={hot["name"]} url={hot["url"]}  />
              </Grid>
          ))}
          </Grid>
       {/*
        {restaurant && restaurant["data"] ? restaurant["data"].map(
          res => <p>{res["name"]}</p>
        ): ""}*/}

      </header>
    </div>
    <Footer />
    </div>
  );
}

export default ThingsToDo;
