import { INITIALISE } from './InitialiseActions';

export default function reducer(state = {}, action) {
  return action.type === INITIALISE ? action.data : state;
}
