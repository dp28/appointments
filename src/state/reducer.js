import initialise from '../initialise/InitialiseReducer';

export function reducer(state = {}, action) {
  return initialise(state, action);
}
