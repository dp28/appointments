import { SELECT_MINUTE, SELECT_HOUR } from './TimePickerActions';

const DEFAULT_STATE = {
  selectedMinute: 0,
  selectedHour: (new Date()).getHours() % 24
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SELECT_MINUTE: return { ...state, selectedMinute: action.minute };
    case SELECT_HOUR: return { ...state, selectedHour: action.hour };
    default: return state;
  }
}
