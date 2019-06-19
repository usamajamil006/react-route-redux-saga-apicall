import React, { Component } from "react";
import { connect } from "react-redux";

import { loadWeather ,setWeather } from "../store/actions/weatherAction";

class Karachi extends Component {
  componentDidMount(){
    this.props.loadWeather();
    this.props.setWeather();
  }

  render() {
    const { weather, error } = this.props;
    return (
      <div>
        {error && <span>{JSON.stringify(error)}</span>}
        {weather && <span>{JSON.stringify(weather)}</span>}
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
  loadWeather: () => dispatch(loadWeather()),
  setWeather: ()=> dispatch(setWeather())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Karachi);
