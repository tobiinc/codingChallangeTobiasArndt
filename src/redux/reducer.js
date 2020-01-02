import initialState from './initialState';
import { reducer as dataReducer } from './actions/catalog.js';
import { reducer as filterReducer } from './actions/filter.js';

const reducers = [
  dataReducer,
  filterReducer
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
