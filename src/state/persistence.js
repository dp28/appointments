import moment from 'moment';

import { CREATE_APPOINTMENT } from '../new-appointment/NewAppointmentActions';

const KEY = 'appointments';
const persistentStore = window.localStorage || {
  setItem: () => null,
  getItem: () => null
};

export const persistAppointments = store => next => action => {
  const result = next(action);
  const state = store.getState();

  if (action.type === CREATE_APPOINTMENT) {
    persistentStore.setItem(KEY, JSON.stringify(state.appointments));
  }

  return result;
}

export function loadAppointments() {
  const appointments = persistentStore.getItem(KEY);
  return appointments ? attemptParse(appointments) : appointments;
}

function attemptParse(appointmentsString) {
  try {
    return parse(appointmentsString);
  }
  catch(_) {
    return null
  }
}

function parse(appointmentsString) {
  return JSON.parse(appointmentsString).map(appointment => {
    appointment.start = moment(appointment.start);
    return appointment;
  })
}
