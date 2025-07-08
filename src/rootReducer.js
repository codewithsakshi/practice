// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import eventsReducer from './events/reducer';
// import other reducers as needed

const rootReducer = combineReducers({
  events: eventsReducer,
  // add other slice reducers here
});

export default rootReducer;
