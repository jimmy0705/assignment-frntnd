import React from 'react';
import { Row,Col } from 'react-bootstrap';
import './myhome.css';

function MyHome3d() {
  return (
    <div className="myhome3d-area">
     <img className="fluid" src={require('./clock.svg')}/>
     <h3>Rooms will Appear in this Section</h3>
     <p>We will notify you via SMS on your registered mobile number once the one time process is completed.</p>
  
     
     
    </div>
  );
}

export default MyHome3d;