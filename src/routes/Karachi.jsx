import React, { Component } from "react";
import { connect } from "react-redux";

import { loadWeather, setWeather } from "../store/actions/weatherAction";
import WeatherDisplay from "../components/WeatherDisplay";

class Karachi extends Component {
  componentDidMount() {
    this.props.loadWeather(261158);
  }

  render() {
    const { weather, error, isloading } = this.props;
    return (
      <div>
        {error && <span>{JSON.stringify(error)}</span>}
        {weather && <span>{JSON.stringify(weather)}</span>}
        <h1 id="cityName" style={{ color: "#F19E40" }}>
          Karachi
        </h1>

        {isloading ? <h3>Loading...</h3> : <WeatherDisplay weather={weather} />}
      </div>
    );
  }
}

const mapStateToProps = ({ weather, isloading, error }) => ({
  weather,
  isloading,
  error
});

const mapDispatchToProps = dispatch => ({
  loadWeather: cityKey => dispatch(loadWeather(cityKey)),
  setWeather: () => dispatch(setWeather())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Karachi);
