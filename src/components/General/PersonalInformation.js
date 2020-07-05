import React, {Component} from 'react';
import {connect} from "react-redux";
import Label from "./Widgets/Label";
import Input from "./Widgets/Input";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "-100px"
  },
  inputContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: "-90px"
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
  onChange = (e) => {
    this.props.onChange(e.target.name.toUpperCase(), e.target.value)
  };

  render() {
    const {firstName, lastName, dob, nationality, phone, email, linkedIn, address}
      = this.props.generalInformation;

    return (
      <div style={{...styles.root, margin: "0 auto", width: "85%"}}>
        <div style={{...styles.inputContainer, width: "40%"}}>
          <div style={{width: "30%"}}>
            {["First Name", "Last Name", "Date of birth", "Nationality"].map((value, index) =>
            {
              return <Label labelContainerStyle={styles.labels} labelStyle={styles.label} value={value} key={index}/>;
            })}
          </div>
          <div style={{width: "70%"}}>
            {[{type: "text", name: "first_name", value: firstName, onChange: this.onChange},
              {type: "text", name: "last_name", value: lastName, onChange: this.onChange},
              {type: "date", name: "dob", value: dob, onChange: this.onChange},
              {type: "text", name: "nationality", value: nationality, onChange: this.onChange}].map((obj, index) => {
                return <Input labelStyle={styles.labels} type={obj.type} name={obj.name} value={obj.value} key={index}
                              onChange={obj.onChange} inputStyle={styles.inputField}/>
            })}
          </div>
        </div>
        <div style={{...styles.inputContainer, width: "50%"}}>
          <div style={{width: "30%"}}>
            {["Phone", "Email", "LinkedIn", "Address"].map((value, index) =>
            {
              return <Label labelContainerStyle={styles.labels} labelStyle={styles.label} value={value} key={index} />;
            })}
          </div>
          <div style={{width: "70%"}}>
            {[{type: "text", name: "phone", value: phone, onChange: this.onChange},
              {type: "text", name: "email", value: email, onChange: this.onChange},
              {type: "text", name: "linkedin", value: linkedIn, onChange: this.onChange},
              {type: "text", name: "address", value: address, onChange: this.onChange}].map((obj, index) => {
              return <Input labelStyle={styles.labels} type={obj.type} key={index} name={obj.name} value={obj.value}
                            onChange={obj.onChange} inputStyle={styles.inputField}/>
            })}
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    generalInformation: state.rootreducer.generalInformation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputs: (type, value) => dispatch({type: type, value: value})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformation);