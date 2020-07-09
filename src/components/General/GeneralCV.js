import React, {Component} from 'react';
import {connect} from "react-redux";

// import {Link} from 'react-router-dom';

class GeneralCv extends Component {
  render() {
    return (
      <div>
        <h3>Project has moved to <a href="https://resumepoint.xyz">resumepoint.xyz</a></h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.rootreducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, value) => dispatch({type: type, value: value})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralCv);