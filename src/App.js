import React from 'react';
import GeneralCv from "./components/GeneralCV";
import './App.css';
import {connect} from 'react-redux';

function App() {
  return (
    <div className="App">
      <GeneralCv/>
    </div>
  );
}

export default connect()(App);
