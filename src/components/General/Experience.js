import React, {Component} from 'react';
import Input from "./Widgets/Input";

const styles = {
  root: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "0px",
    display: "flex",
    marginBottom: "0px",
    marginTop: "-10px"
  },

  firstCol: {
    width: "44%",
    marginTop: "10px",
    marginRight: "5px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  secondCol: {
    width: "54%",
    borderLeft: "1px solid #000",
    marginTop: "25px",
    marginRight: "0px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingBottom: "20px"
  },
  dateLabels: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: "5px"
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
}

class Experience extends Component {
  handleChange = (e) => {
    this.props.onChange("EDIT_EXP", {id: this.props.id, e: e});
  };

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.firstCol}>
          <div style={{width: "50%", paddingLeft: "92px"}}>
            <p style={{marginBottom: "0px", textAlign: "left"}}>From: </p>
            <p style={{marginTop: "5px", textAlign: "left"}}>To: </p>
          </div>
          <div style={{width: "50%"}}>
            <Input labelStyle={styles.dateLabels} inputStyle={styles.inputField} type={"month"} name={"from"}
                   placeholder={"From"} onChange={this.handleChange} value={this.props.from}/>
            <Input labelStyle={{...styles.dateLabels}} inputStyle={styles.inputField}
                   type={"month"} name={"to"}
                   placeholder={"To"} onChange={this.handleChange}
                   value={this.props.to}/>
            <small>Leave "To" blank if present</small>
          </div>
        </div>
        <div style={styles.secondCol}>
          <div style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            marginTop: "-35px",
            marginLeft: "-6px",
            paddingBottom: "0px"
          }}>
            <ul className="experience_title" style={{width: "100%"}}>
              <li style={{fontWeight: "bold", width: "100%", textAlign: "left"}}>
                <input type="text" style={{
                  padding: "0 0 0 0",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid #000000",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "80%"
                }} onChange={(event) => {
                  this.handleChange(event);
                }}
                       name="title"
                       placeholder={"Title"}
                       value={this.props.title}/>
              </li>
            </ul>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            flexDirection: "column",
            marginTop: "0px"
          }}>
            <input type="text" style={{
              padding: "0 0 0 0",
              marginLeft: "15px",
              outline: "none",
              border: "none",
              borderBottom: "1px solid #000000",
              fontSize: "15px",
              width: "100%",
            }} onChange={(event) => {
              this.handleChange(event);
            }}
                   name="address"
                   placeholder={"Name and address"}
                   value={this.props.address}/>
            <input type="text" style={{
              padding: "0 0 0 0",
              marginLeft: "15px",
              outline: "none",
              border: "none",
              borderBottom: "1px solid #000000",
              fontSize: "15px",
              width: "100%",
            }} onChange={(event) => {
              this.handleChange(event);
            }}
                   name={"website"}
                   placeholder={"Website (Optional)"}
                   value={this.props.website}/>
            <input type="text" style={{
              padding: "0 0 0 0",
              marginLeft: "15px",
              outline: "none",
              border: "none",
              borderBottom: "1px solid #000000",
              fontSize: "15px",
              width: "100%",
            }} onChange={(event) => {
              this.handleChange(event);
            }}
                   name={"description"}
                   placeholder={"Short description"}
                   value={this.props.description}/>
          </div>
        </div>
        <div style={{width: "2%", marginTop: "10px"}}>
          <button className="btn-primary" onClick={() => {
            this.props.onDelete("DELETE_EXP", this.props.id)
          }}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>);
  }
}

export default Experience;