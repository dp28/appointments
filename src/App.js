import React from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">appointments</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <Grid>
      <Row>
        <Col xs={12}>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;
