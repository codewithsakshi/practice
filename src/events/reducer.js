// src/features/events/reducer.js
import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
  } from './action';
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_EVENTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_EVENTS_SUCCESS:
        return { ...state, loading: false, items: action.payload };
      case FETCH_EVENTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  