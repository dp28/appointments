import { DISMISS_ALERT } from './AlertActions';

export default function reducer(state = {}, action) {
  return action.type === DISMISS_ALERT ? {} : state;
}
