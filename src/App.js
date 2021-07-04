import React from "react";
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Frontpage from './pages/frontpage/frontpage';
import Workpage from './pages/workpage/workpage';

import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/workpage" component={Workpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
