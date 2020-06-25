import React, {Component} from 'react';
import {connect} from "react-redux";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "-100px"
  },
  inputContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: "-100px"
  },
  labels: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  label: {
    marginBlockStart: "0px",
    marginBlockEnd: "0px",
    marginInlineStart: "0px",
    marginInlineEnd: "0px"
  },
  inputField: {
    padding: "0 0 0 0",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #000000",
    width: "100%",
    fontSize: "15px"
  }
};

class PersonalInformation extends Component {
  render() {
    return (
      <div style={{...styles.root, margin: "0 auto", width: "85%"}}>
        <div style={{...styles.inputContainer, width: "40%"}}>
          <div style={{width: "30%"}}>
            <div style={styles.labels}>
              <p style={styles.label}>First Name:</p>
            </div>
            <div style={styles.labels}>
              <p style={styles.label}>Last Name:</p>
            </div>
            <div style={styles.labels}>
              <p style={styles.label}>Date of birth:</p>
            </div>
            <div style={styles.labels}>
              <p style={styles.label}>Nationality:</p>
            </div>
          </div>
          <div style={{width: "70%"}}>
            <div style={styles.labels}>
              <input type="text" style={styles.inputField}/>
            </div>
            <div style={styles.labels}>
              <input type="text" style={styles.inputField}/>
            </div>
            <div style={styles.labels}>
              <input type="date" style={styles.inputField}/>
            </div>
            <div style={styles.labels}>
              <input type="text" style={styles.inputField}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    avatar: state.rootreducer.avatar,
    name: state.rootreducer.name,
    generalInformation: state.rootreducer.generalInformation
  };
}

export default connect(mapStateToProps)(PersonalInformation);