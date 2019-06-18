import React, { Component } from "react";
import { connect } from "react-redux";

import {loadWeather} from '../store/actions/weatherAction'

class Karachi extends Component {
  render() {
    const {weather} = this.props
    return <div><a onClick={this.props.loadWeather}>Karachi</a> </div>;
  }
}

const mapStateToProps = ({ weather, isloading, error }) => ({
  weather,
  isloading,
  error
});

const mapDispatchToProps = dispatch =>({
  loadWeather: () => dispatch(loadWeather())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Karachi);
