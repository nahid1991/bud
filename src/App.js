import React from 'react';
import GeneralCv from "./components/General/GeneralCV";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {history} from './configureStore';
import {ConnectedRouter} from "connected-react-router";

function App({context}) {
  return (
    <ConnectedRouter history={history} context={context}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/bud" component={GeneralCv} />
            <Route render={() => (<div><h3>Project has moved to <a href="https://resumepoint.xyz">resumepoint.xyz</a></h3></div>)} />
          </Switch>
        </div>
      </Router>
    </ConnectedRouter>
  );
}


export default App;
