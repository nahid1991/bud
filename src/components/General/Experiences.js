import React, {Component} from 'react';
import {connect} from 'react-redux';
import Experience from "./Experience";

const styles = {
  root: {
    paddingTop: "0px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: "0px",
    paddingLeft: "20px",
    flexDirection: "column",
  }
};

class Experiences extends Component {
  render() {
    return (
      <div style={styles.root}>
        {this.props.workExperience.length === 0 ? <div style={{width: "100%"}}>
          <p style={{color: "#03a9f4"}}>Leave empty if you don't want this section to print!</p>
        </div> : null}
        {this.props.workExperience.map((obj) => {
          return <Experience key={obj.id} onDelete={this.props.handleChange} id={obj.id}
          from={obj.from} to={obj.to} title={obj.title} address={obj.address} description={obj.description}
          onChange={this.props.handleChange}
          />
        })}
        <div style={{width: "100%", margin: "10px 0 10px 55px"}}>
          <button className="btn-simple" style={{width: "80%"}}
            onClick={() => this.props.handleExpAdd("ADD_EXP")}>ADD EXPERIENCE</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    workExperience: state.rootreducer.workExperience
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, value) => dispatch({type: type, value: value}),
    handleExpAdd: (type) => dispatch({type: type})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Experiences);