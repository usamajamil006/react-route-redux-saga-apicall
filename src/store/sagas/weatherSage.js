import { takeEvery, call, put } from "redux-saga/effects";
import { WEATHER } from "../constants";
import { fetchWeather } from "../../api";
import {setWeather , setError} from "../actions/weatherAction"

function* handleWeatherLoad() {
  try {
    const cityKey = 261158;
    const weather = yield call(fetchWeather, cityKey);
    yield put(setWeather(weather))
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
  }
}

export default function* weatherLoad() {
  yield takeEvery(WEATHER.LOAD, handleWeatherLoad);
}

