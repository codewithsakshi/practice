// src/features/events/sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_EVENTS_REQUEST,
  fetchEventsSuccess,
  fetchEventsFailure,
} from './action';

function* fetchEventsSaga() {
  try {
    const response = yield call(axios.get, 'https://6713ce9e690bf212c75fd70c.mockapi.io/events');
    yield put(fetchEventsSuccess(response.data));
  } catch (error) {
    yield put(fetchEventsFailure(error.message));
  }
}

export function* watchFetchEvents() {
  yield takeEvery(FETCH_EVENTS_REQUEST, fetchEventsSaga);
}
