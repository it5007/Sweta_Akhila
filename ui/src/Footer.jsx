import React from 'react';
import logo from '../images/time-to-travel-wooden-sign-beach-background-49509295.jpg'

export default  class VannerTask extends React.Component {
  render() {
    
    return (
      <div class="btn-toolbar mb-5" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group col-4" role="group" aria-label="First group">
        <a href="#" >Help & Contact</a>
        </div>
        <div class="btn-group col-3" role="group" aria-label="Second group">
        <a href="#" >Copyright</a>
        </div>
        <div class="btn-group col-3" role="group" aria-label="Third group">
        <a href="#" >Social Media</a>
        </div>
        <div class="btn-group col-2" role="group" aria-label="Fourth group">
        <a href="#" >Terms & Conditions</a>
        </div>
    </div>      
      );
    }
}
