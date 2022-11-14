/*global google*/
import React, { Component } from 'react';
import {
  GoogleMap,
  DirectionsRenderer
} from '@react-google-maps/api';

export default class Map extends Component {
  state = {
    directions: null,
    origin: "",
    destination: "",
    waypoints: [],
    mode: google.maps.TravelMode.DRIVING,
    showWaypoint: true
  };

  // This handles clicking go
    handleChange = (event) => {
      const origin = document.getElementById("origin").value;
      const destination = document.getElementById("destination").value;
      const waypoint = document.getElementById("waypoint") ? document.getElementById("waypoint").value : "";
      let mode = document.getElementById("mode").value;

      if (mode == "DRIVING") {
        mode = google.maps.TravelMode.DRIVING
      }
      else if (mode == "WALKING") {
        mode = google.maps.TravelMode.WALKING
      }
      else if (mode == "BICYCLING") {
        mode = google.maps.TravelMode.BICYCLING
      }
      else if (mode == "TRANSIT") {
        console.log("Transit Request")

        mode = google.maps.TravelMode.TRANSIT
        this.setState({
          directions: this.state.directions,
          origin: origin,
          destination: destination,
          waypoints: [],
          mode: mode,
          showWaypoint: false
        })

        return;
      }

      let waypt = [{location: waypoint}];
      if (waypoint == null || waypoint == "") {
        waypt = [];
      }

      this.setState({
        directions: this.state.directions,
        origin: origin,
        destination: destination,
        waypoints: waypt,
        mode: mode,
        showWaypoint: true
      })
  };

  // On just changing Mode
  handleChangeMode = (event) => {
    let mode = event.target.value;
    if (mode == "TRANSIT") {
      this.setState({
        directions: this.state.directions,
        origin: this.state.origin,
        destination: this.state.destination,
        waypoints: [],
        mode: this.state.mode,
        showWaypoint: false
      })
    }
    else {
      this.setState({
        directions: this.state.directions,
        origin: this.state.origin,
        destination: this.state.destination,
        waypoints: this.state.waypoints,
        mode: this.state.mode,
        showWaypoint: true
      })
    }
    console.log("Chnaged" + event.target.value)
    // simulate clicking Go
    this.handleChange();
  };

  computeRoute() {
    const directionsService = new google.maps.DirectionsService();

    //const origin = '102111, singapore';
    //const destination = 'marina bay sands';
    //const waypts = [{location: "bukit merah"}];

    console.log("***" + this.state.waypoints)

    directionsService.route(
      {
        origin: this.state.origin,
        destination: this.state.destination,
        waypoints: this.state.waypoints,
        travelMode: this.state.mode, //TRANSIT, WALKING, BICYCLING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
            origin: this.state.origin,
            destination: this.state.destination
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    this.computeRoute();
    const GoogleMapExample = (props) => 
    <GoogleMap
      center={{ lat: 40.756795, lng: -73.954298 }}
      zoom={5}
      mapContainerStyle={{ height: "400px", width: "800px" }}
    >
      <DirectionsRenderer
        directions={this.state.directions}
        panel={document.getElementById('directions-panel')}
      />
          
    </GoogleMap>
    
    document.getElementById("directions-panel").innerHTML = "";
    return (  
      
      <div>
        <div id="floating-panel">
        <b>Mode of Travel: </b>
        <select id="mode" onChange={this.handleChangeMode}>
          <option value="DRIVING">Driving</option>
          <option value="WALKING">Walking</option>
          <option value="BICYCLING">Bicycling</option>
          <option value="TRANSIT">Transit</option>
        </select>

        <b>Origin:</b> <input id="origin" type="text"/>
        <b>Destination:</b><input id="destination" type="text"/>
        {this.state.showWaypoint ? <div><b>Waypoint:</b><input id="waypoint" type="text"/></div> : ""}
        <button onClick={this.handleChange}>Go</button>
      </div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: '500px' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        
      </div>
    );
  }
}
