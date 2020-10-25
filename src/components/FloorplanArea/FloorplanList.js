import React from 'react';
import { Button } from 'react-bootstrap';


import './floorplan.css';

function FloorplanList(props) {
  let PlanData = props.PlanData
  console.log(PlanData)
  return (
    <div className="floor-plan-list">

     <img className="fluid plan-img" src={require('./plan.png')}/>
  <h5 className="plan-title">{PlanData.title}</h5>
  <h5 className="floorplan-title">{PlanData.type}</h5>
     <Button variant="danger">Select this Floorplan</Button>
    </div>
  );
}

export default FloorplanList;
