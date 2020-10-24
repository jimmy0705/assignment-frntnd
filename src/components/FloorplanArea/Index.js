
import React from 'react';
import FloorplanList from './FloorplanList';
import { Button } from 'react-bootstrap';
import './floorplan.css';

const AllplanData = [
  {
      id: 1,
      title:"Prestige 3BHK",
      type:"3BHK - 1221 Sqft"
      
  },
  {
      id: 2,
      title:"Prestige 2BHK",
      type:"3BHK - 1221 Sqft"
     
  },
  {
      id: 3,
      title:"Prestige 5BHK",
      type:"3BHK - 1221 Sqft"
     
  },
  {
      id: 4,
      title:"Prestige 4BHK",
       type:"3BHK - 1221 Sqft"
  },
  {
      id: 5,
      title:"DLF Woodland Heights",
     type:"3BHK - 1221 Sqft"
  },
  {
      id: 6,
      title:"Prestige Whitefield",
      type:"3BHK - 1221 Sqft"
  },
   {
      id: 7,
      title:"DLF Woodland Heights",
      type:"3BHK - 1221 Sqft"
  },
   {
      id: 8,
      title:"DLF Woodland Heights",
      type:"3BHK - 1221 Sqft"
  }
]



function FloorplanArea() {
  return (
    <div className="floorplan-area container">
      <h5 className="floorplan-title">Found 4 Floorplans</h5>
     <div>
     <Button variant="outline-secondary"> BHK</Button>
     <Button variant="outline-secondary"> City</Button>
     <Button variant="outline-secondary"> Builder</Button>
     <Button variant="outline-secondary">Property Type</Button>
     </div>
    <div className="floor-palan-list-area">
    {  AllplanData.map(plan => <FloorplanList PlanData={plan} key = {plan.id} />)}
    </div>
    
      
     
    </div>
  );
}

export default FloorplanArea;
