import filterState from '../initialStates/filterStates';
import { reducer as filterReducer } from '../actions/filter';

const reducers = [
  filterReducer
];

export default function reducer(state = filterState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
