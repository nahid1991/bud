import React, {Component} from 'react';
import {connect} from "react-redux";
import Reference from "./Reference";

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

class References extends Component {
  render() {
    return (
      <div style={styles.root}>
        {this.props.references.length === 0 ? <div style={{width: "100%"}}>
          <p style={{color: "#03a9f4"}}>Leave empty if you don't want this section to print!</p>
        </div> : null}
        {this.props.references.map((obj) => {
          return <Reference key={obj.id} onDelete={this.props.handleChange} id={obj.id}
                              name={obj.name} address={obj.address} phoneNumber={obj.phoneNumber}
                              email={obj.email} designation={obj.designation}
                              onChange={this.props.handleChange}
          />
        })}
        <div style={{width: "100%", margin: "10px 0 10px 55px"}}>
          <button className="btn-simple" style={{width: "80%"}}
                  onClick={() => this.props.handleRefAdd("ADD_REFERENCE")}>ADD REFERENCE</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    references: state.rootreducer.references
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, value) => dispatch({type: type, value: value}),
    handleRefAdd: (type) => dispatch({type: type})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(References);