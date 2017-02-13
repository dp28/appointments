import moment from 'moment';
import { CREATE_APPOINTMENT } from './NewAppointmentActions';

const DEFAULT_STATE = {
  appointments: [],
  alert: {
    message: null,
    type: null
  }
}

export default function reducer(state = DEFAULT_STATE, action) {
  return action.type === CREATE_APPOINTMENT ? attemptCreateAppointment(state, action.title) : state;
}

function attemptCreateAppointment(state, appointmentTitle) {
  return isValid(appointmentTitle) ? createAppointment(state, appointmentTitle) : fail(state);
}

function isValid(title) {
  return title.length > 0;
}

function createAppointment(state, appointmentTitle) {
  const appointment = buildAppointment(state, appointmentTitle);
  const appointments = sortByStart(appointment, ...state.appointments);
  return updateAlert(
    { ...state, appointments },
    { message: `Added "${appointmentTitle}"`, type: 'success' }
  );
}

function buildAppointment({ datePicker, timePicker }, title) {
  return {
    title,
    id: String((new Date()) + Math.random()),
    start: buildTime(datePicker.selectedDate, timePicker.selectedHour, timePicker.selectedMinute)
  }
}

function buildTime(date, hour, minute) {
  return moment(date).hours(hour).minutes(minute)
}

function sortByStart(...appointments) {
  return appointments.sort((a, b) => a.start.isBefore(b.start));
}

function fail(state) {
  return updateAlert(state, { message: 'Appointments must have a title', type: 'error' })
}

function updateAlert(state, alert) {
  return  { ...state, alert: alert };
}
