import initialise from '../initialise/InitialiseReducer';
import datePicker from '../date-picker/DatePickerReducer';

export function reducer(state = {}, action) {
  return reduceParts(initialise(state, action), action);
}

function reduceParts(state, action) {
  return {
    ...state,
    datePicker: datePicker(state.datePicker, action)
  }
}
