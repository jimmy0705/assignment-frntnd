import React from 'react';
import { Row,Col } from 'react-bootstrap';
import './myhome.css';

function MyHome() {
  return (
    <div className="myhome-area">
     <img className="fluid" src={require('./house.png')}/>
     <h3>My Bengaluru House</h3>
     <p>Prestige 4 BHK - 3100 Sqft</p>
     <p>Location : 19, Brunton Road, Ashok Nagar, Bengaluru, Karnataka, India</p>
     <div className="myhome-notfication">
       <img className="fluid" src={require('./q.svg')}/>
      <span>To generate a full fledge precise home it requires a time period between 12-24 Hours.</span>
     </div>

     <button className="3d-button">View Instant 3D</button>
     <button className="design-button">
       Design your Home
     [We will notify you within 24Hrs]</button>
     
     
    </div>
  );
}

export default MyHome;