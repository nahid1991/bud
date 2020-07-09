import React, {Component} from 'react';
import {connect} from 'react-redux';
import Education from "./Education";

const styles = {
  root: {
    paddingTop: "0px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: "0px",
    paddingLeft: "20px",
    flexDirection: "column"
  }
}

class Educations extends Component {
  render() {
    return (
      <div style={styles.root}>
        {this.props.education.length === 0 ? <div style={{width: "93.5%"}}>
          <p style={{color: "#03a9f4"}}>Leave empty if you don't want this section to print!</p>
        </div> : null}
        {this.props.education.map((obj) => {
          return <Education key={obj.id} onDelete={this.props.handleChange} id={obj.id}
                             from={obj.from} to={obj.to} title={obj.title} address={obj.address}
                             onChange={this.props.handleChange}
          />
        })}
        <div style={{width: "100%", margin: "10px 0 10px 55px"}}>
          <button className="btn-simple" style={{width: "80%"}}
                  onClick={() => this.props.handleEduAdd("ADD_EDU")}>ADD EDUCATION</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    education: state.rootreducer.education
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, value) => dispatch({type: type, value: value}),
    handleEduAdd: (type) => dispatch({type: type})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Educations);