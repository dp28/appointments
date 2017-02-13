import { createStore, applyMiddleware } from 'redux';

import { reducer } from './reducer';
import { persistAppointments } from './persistence';

export const store = createStore(reducer, applyMiddleware(persistAppointments));
