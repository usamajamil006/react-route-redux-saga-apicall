import { takeEvery , put , call } from 'redux-saga/effects';

import {WEATHER} from '../constants'

function* handleWeatherLoad(){
  console.log('loading weatherr')
}

function* rootSaga() {
  yield takeEvery(WEATHER.LOAD,handleWeatherLoad)
}

export default rootSaga;

// watcher saga  -> action => worker saga
 