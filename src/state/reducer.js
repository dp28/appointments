import alert from '../alert/AlertReducer';
import initialise from '../initialise/InitialiseReducer';
import datePicker from '../date-picker/DatePickerReducer';
import timePicker from '../time-picker/TimePickerReducer';
import newAppointment from '../new-appointment/NewAppointmentReducer';

export function reducer(state = {}, action) {
  return chainWholeStateReducers(
    initialise,
    reduceParts,
    newAppointment
  )(state, action);
}

function reduceParts(state, action) {
  return {
    ...state,
    alert: alert(state.alert, action),
    datePicker: datePicker(state.datePicker, action),
    timePicker: timePicker(state.timePicker, action)
  }
}

function chainWholeStateReducers(...reducers) {
  return (initialState, action) => (
    reducers.reduce(
      (state, wholeStateReducer) => wholeStateReducer(state, action),
      initialState
    )
  )
}
