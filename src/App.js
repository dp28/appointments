import React from 'react';
import { Provider } from 'react-redux';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

import AppointmentList from './appointment-list/AppointmentList';
import NewAppointment from './new-appointment/NewAppointment';
import Alert from './alert/Alert';
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
          <Col xs={12} sm={6} md={4}>
            <h2>New appointment</h2>
            <Alert />
            <NewAppointment />
          </Col>
          <Col xs={12} sm={6} md={8}>
            <h2>All appointments</h2>
            <AppointmentList />
          </Col>
        </Row>
      </Grid>
    </div>
  </Provider>
);

export default App;
