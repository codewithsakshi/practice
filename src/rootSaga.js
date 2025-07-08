// src/sagas/rootSaga.js
import { all } from 'redux-saga/effects';
import { watchFetchEvents } from './events/saga';

export default function* rootSaga() {
  yield all([
    watchFetchEvents()
    // add other watchers here
  ]);
}
