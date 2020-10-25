import React from 'react';
import {Link} from 'react-router-dom';
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
     <Link to='/myhome' className="danger">Select this Floorplan</Link>
    </div>
  );
}

export default FloorplanList;
