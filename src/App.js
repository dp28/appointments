import React from 'react';
import { Provider } from 'react-redux';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

import { initialise } from './initialise/InitialiseActions';
import { store } from './state/store';

import './App.css';

store.dispatch(initialise());

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
