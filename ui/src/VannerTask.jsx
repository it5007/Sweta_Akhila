import React from 'react';
import logo from '../images/time-to-travel-wooden-sign-beach-background-49509295.jpg'

export default  class VannerTask extends React.Component {
  render() {
    
    return (
      <div class="btn-toolbar mt-5 mb-5" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group col-4" role="group" aria-label="First group">
        <button class="btn btn-warning">Rewards</button>
        </div>
        <div class="btn-group col-4" role="group" aria-label="Second group">
        <button class="btn btn-warning">Things to do</button>
        </div>
        <div class="btn-group col-4" role="group" aria-label="Third group">
        <button class="btn btn-warning">Vanner Planner</button>
        </div>
    </div>
      );
    }
}