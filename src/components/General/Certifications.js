import React, {Component} from 'react';
import {connect} from "react-redux";
import Certification from "./Certification";

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

class Certifications extends Component {
  render() {
    return (
      <div style={styles.root}>
        {this.props.certifications.length === 0 ? <div style={{width: "100%"}}>
          <p style={{color: "#03a9f4"}}>Leave empty if you don't want this section to print!</p>
        </div> : null}
        {this.props.certifications.map((obj) => {
          return <Certification key={obj.id} onDelete={this.props.handleChange} id={obj.id}
                             issueDate={obj.issueDate} institute={obj.institute} title={obj.title}
                             link={obj.link} expireDate={obj.expireDate}
                             onChange={this.props.handleChange}
          />
        })}
        <div style={{width: "100%", margin: "10px 0 10px 55px"}}>
          <button className="btn-simple" style={{width: "80%"}}
                  onClick={() => this.props.handleCertAdd("ADD_CERTIFICATION")}>ADD CERTIFICATION</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    certifications: state.rootreducer.certifications
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, value) => dispatch({type: type, value: value}),
    handleCertAdd: (type) => dispatch({type: type})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Certifications);