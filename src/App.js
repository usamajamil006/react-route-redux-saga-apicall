import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Karachi from './routes/Karachi'
import Lahore from './routes/Lahore'
import Islamabad from './routes/Isalambad'

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Route path="/" component={Karachi} exact />
      <Route path="/search" component={Lahore} />
      <Route path="/search" component={Islamabad} />
    </div>
  </BrowserRouter>
  );
}

export default App;
