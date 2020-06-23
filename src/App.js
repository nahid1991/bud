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
            <Route exact path="/bud/test" component={Test} />
            <Route render={() => (<div>Are you lost?</div>)} />
          </Switch>
        </div>
      </Router>
    </ConnectedRouter>
  );
}

function Test() {
  return (
    <div>
      Hello
    </div>
  )
}


export default App;
