import React from 'react';
import { Row,Col } from 'react-bootstrap';
import FloorPlanInput from './FloorPlanInput';
import Searchinput from './SearchInput';

//import './App.css';

function MaininputArea() {
  return (
    <div className="main-input-area container">

<Row>
    <Col><Searchinput/></Col>
    <Col><FloorPlanInput/></Col>
  </Row>
     
     
    </div>
  );
}

export default MaininputArea;
