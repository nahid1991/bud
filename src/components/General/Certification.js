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

class Certification extends Component {
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.props.onChange("EDIT_CERTIFICATION", {id: this.props.id, e: e});
  };

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.firstCol}>
          <div style={{width: "75%", paddingLeft: "auto"}}>
            <p style={{marginBottom: "0px", textAlign: "left", color: "grey"}}>Issue date: </p>
            <Input labelStyle={styles.dateLabels} inputStyle={styles.inputField} type={"date"} name={"issueDate"}
                   placeholder={""} onChange={this.handleChange} value={this.props.issueDate}/>
            <p style={{marginTop: "5px", textAlign: "left", marginBottom: "0px", color: "grey"}}>Expire date: </p>
            <Input labelStyle={{...styles.dateLabels}} inputStyle={styles.inputField}
                   type={"date"} name={"expireDate"}
                   placeholder={""} onChange={this.handleChange}
                   value={this.props.expireDate}/>
            <small>Leave "Expire" blank if N/A</small>
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
                   name="institute"
                   placeholder={"Institute"}
                   value={this.props.institute}/>
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
                   name={"link"}
                   placeholder={"Link"}
                   value={this.props.link}/>
          </div>
        </div>
        <div style={{width: "2%", marginTop: "10px"}}>
          <button className="btn-primary" onClick={() => {
            this.props.onChange("DELETE_CERTIFICATION", this.props.id)
          }}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>);
  }
}

export default Certification;