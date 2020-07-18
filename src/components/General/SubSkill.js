import React, {Component} from 'react';
import Input from "./Widgets/Input";

const styles = {
  root: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "0px",
    display: "flex",
    flexDirection: "row",
    marginBottom: "0px",
    paddingRight: "0px"
  },

  firstCol: {
    width: "70%",
    marginTop: "10px",
    marginRight: "5px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  secondCol: {
    width: "20%",
    marginTop: "25px",
    // marginRight: "5px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingBottom: "20px",
    paddingRight: "0px"
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
};

class SubSkill extends Component {
  handleChange = (e) => {
    this.props.onChange("EDIT_SKILL", {id: this.props.id, e: e, parentId: this.props.parentId});
  };

  render() {
    let getRatings = () => {
      let stars = [];
      for (let i = 0; i <= 4; i++) {
          stars.push(<span className={i <= this.props.rating ? "fa fa-star checked" : "fa fa-star unchecked"} onClick={() => {
            this.handleChange({target: {name: "rating", value: i}})
          }} key={i}></span>);
      }
      return stars;
    }
    return (
      <div style={styles.root}>
        <div style={{...styles.firstCol, paddingTop: "9px"}}>
          <div style={{width: "100%"}}>
            <Input labelStyle={{width: "95%"}} inputStyle={styles.inputField} type={"text"} name={"name"}
                   placeholder={"Skill"} onChange={this.handleChange} value={this.props.name}/>
          </div>
        </div>
        <div className="subskillsecondcol" style={styles.secondCol}>
          {getRatings()}
        </div>
        <div style={{width: "10%", marginTop: "10px"}}>
          <button className="btn-primary" style={{border: "none", padding: "0px"}} onClick={() => {
            this.props.onDelete("DELETE_SKILL", {parentId: this.props.parentId, id: this.props.id})
          }}>
            <span className="fa fa-trash"></span>
          </button>
        </div>
      </div>);
  }
}

export default SubSkill;