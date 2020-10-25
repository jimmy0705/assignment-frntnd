import React from 'react';
import { Row,Col } from 'react-bootstrap';
import './myhome.css';
import MyHome from './Myhome';
import MyHome3d from './Myhome3d';

function MyHomePage() {
  return (
    <div className="myhome-page-area container">

   <Row>
    <Col xs={4}>
    <MyHome/>
    </Col>
    <Col xs={8}>
      <MyHome3d/>
    </Col>
   </Row>
     
     
    </div>
  );
}

export default MyHomePage;