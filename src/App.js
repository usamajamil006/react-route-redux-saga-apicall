import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Karachi from './routes/Karachi'
import Lahore from './routes/Lahore'
import Islamabad from './routes/Isalambad'

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <NavBar/>
      <Route path="/" component={Karachi} exact />
      <Route path="/lahore" component={Lahore} />
      <Route path="/islamabad" component={Islamabad} />
    </div>
  </BrowserRouter>
  );
}

export default App;
