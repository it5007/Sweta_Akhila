import React, { useEffect, useState } from 'react';

export function getInfo(apitype , key) {
  console.log( apitype , " " , key )
  let value = "keyword=" + key.replace(" ","%20");
  let query;
  if (apitype == "attract")
    query = "https://tih-api.stb.gov.sg/content/v1/search/all?dataset=attractions&language=en&apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3&" + value ;
  else if (apitype == "acco")
    query = "https://tih-api.stb.gov.sg/content/v1/search/all?dataset=accommodation&language=en&apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3&" + value ;
  else 
    //query = "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=restaurants&language=en&apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3&" + value ;
    query = "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?language=en&apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3&" + value ;
  console.log(query)
  return ( fetch(query ).then( res => res.json() ) )
 }

export default function Recommender() {
  const [itemInput, setItemInput] = useState('');
  const [requestype, serequestType] = useState('attract');
  const [apioutput, setapioutput] = useState([]);

{/***useEffect(() => {
  let mounted = true;
  //keyword=little%20india
  let query = "https://tih-api.stb.gov.sg/content/v1/search/all?dataset=attractions&language=en&apikey=NEzEtpGNOXw0OeIZKOiwQJ9te1SQIBL3";
  fetch(query)
    .then(response => response.json())
      .then(async items => {
        //let namelist = items["data"]["results"].map( item => item["name"])
        //console.log(namelist)
        console.log(mounted)
        if(mounted) {
          setAttraction(items["data"]["results"])
          console.log(attractions)
        }
      })
    return () => mounted = false;
}, [])
**/}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( requestype )
    console.log( itemInput ) 
    getInfo( requestype,itemInput).
    then(async items => {
        console.log(items)
        if (requestype == "food") 
          setapioutput(items["data"])
        else 
          setapioutput(items["data"]["results"])
        //console.log(attractions)
      })
  };
  //  bg-warning text-dark
  //  class="col-sm-4"
  return (
    <>  
    <div class="card bg-warning text-dark" >
    <form onSubmit={handleSubmit}>
      <div class="form-group col-sm-4">
      <h4>Enter Location of Interest:</h4>
      <input onChange={event => setItemInput(event.target.value)} value={itemInput} 
            class="form-control form-control-lg" type="text" placeholder="Bugis" />
      </div>
    <div class="form-group col-sm-4">
      <select onChange={event => serequestType(event.target.value)} 
              class="form-control form-control-lg" value={requestype}>  
        <option value="attract">Attractions</option>
        <option value="acco">Accommodation</option>
        <option value="food">F&B</option>
      </select>
    </div>
    <div class="row">
      <div class="col text-center">
        <div class="form-group col-sm-4">
          <button type="submit" class="btn btn-primary btn-lg">Submit</button>
        </div>
      </div>
    </div>
    </form>
    </div>
    <h1>Relevant Results</h1>
    <ul class="list-group list-group-flush">
      {apioutput.map(item => <li class="list-group-item font-italic h4">{item.name}</li>)}
    </ul>
    </> 
  );
}

