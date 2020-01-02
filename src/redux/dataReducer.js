import dataState from './initialStates/dataState';
import { reducer as dataReducer } from './actions/catalog';
import { reducer as layoutReducer } from './actions/layout';

const reducers = [
  dataReducer,
  layoutReducer
];

export default function reducer(state = dataState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
