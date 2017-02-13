import moment from 'moment';

import { TOGGLE_DATE_FOCUS, SELECT_DATE } from './DatePickerActions';

const DEFAULT_STATE = {
  selectingDate: false,
  selectedDate: moment()
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TOGGLE_DATE_FOCUS: return { ...state, selectingDate: action.selectingDate };
    case SELECT_DATE: return { ...state, selectedDate: action.date };
    default: return state;
  }
}
