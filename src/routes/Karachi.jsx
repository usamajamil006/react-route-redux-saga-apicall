import React, { Component } from "react";
import { connect } from "react-redux";

class Karachi extends Component {
  render() {
    return <div>Karachi</div>;
  }
}

const mapStateToProps = ({ weather, isloading, error }) => ({
  weather,
  isloading,
  error
});
export default connect(
  mapStateToProps,
  null
)(Karachi);
