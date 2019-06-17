import { WEATHER } from "../constants";

const loadWeather = data => ({
  type: WEATHER.LOAD
});

const setWeather = data => ({
  type: WEATHER.LOAD_SUCCESS,
  data
});

const setError = error => ({
  type: WEATHER.LOAD_FAIL,
  error
});

export { loadWeather, setWeather, setError };
