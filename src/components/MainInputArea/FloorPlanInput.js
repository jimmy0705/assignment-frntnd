import React from 'react';
import { Button,Navbar,Form,Col,Row } from 'react-bootstrap';
import './maininput.css';

function FloorPlanInput() {
  return (
    <>
    <div className="floor-plan-area ">

  
    
    <Button className="upload-button plan-input-button" variant="outline-secondary">Upload Floorplan</Button>
   
    <Button className="create-button plan-input-button" variant="outline-secondary">Create a Room using Dimensions</Button>


    </div>
    </>
  );
}

export default FloorPlanInput;
