import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (<div>
            <Link to='/'>Karachi</Link>
            <Link to='/lahore'>Lahore</Link>
            <Link to='/islamabad'>Islamabad</Link>
            </div>
            )
    }
}
