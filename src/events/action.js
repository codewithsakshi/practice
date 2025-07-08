
export const FETCH_EVENTS_REQUEST = 'events/fetchRequested';
export const FETCH_EVENTS_SUCCESS = 'events/fetchSuccess';
export const FETCH_EVENTS_FAILURE = 'events/fetchFailed';

export const fetchEventsRequest = () => ({
  type: FETCH_EVENTS_REQUEST,
//   payload,  // payload can be any data you want to pass
});

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEventsFailure = (error) => ({
  type: FETCH_EVENTS_FAILURE,
  payload: error,
});
