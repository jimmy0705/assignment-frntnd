import React from 'react';
import { Button,Navbar,Form,Col,Row } from 'react-bootstrap';
//import './App.css';

function Searchinput() {
  return (
    <div className="floor-palan-area">
    <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
    <Button variant="danger">
    Search Floorplan
  </Button>
    </Col>
  </Row>
</Form>
    </div>
  );
}

export default Searchinput;
