import React, {Component} from 'react';
import Input from "./Widgets/Input";
import SubSkill from "./SubSkill";

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
    width: "100%",
    marginTop: "10px",
    marginRight: "5px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
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
    fontSize: "15px",
    fontWeight: "bold"
  }
}

class Skill extends Component {
  handleChange = (e) => {
    this.props.onChange("EDIT_CATEGORY", {id: this.props.id, e: e});
  };

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", width: "48%", border: "1px dashed #546e7a", left: "100px"}}>
        <div style={styles.root}>
          <div style={{...styles.firstCol, paddingTop: "9px", marginLeft: "-10px"}}>
            <div style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
              <Input labelStyle={{width: "95%", marginTop: "10px"}} inputStyle={styles.inputField} type={"Text"} name={"category"}
                     placeholder={"Category"} onChange={this.handleChange} value={this.props.category}/>
            </div>
          </div>
          <div style={{width: "15%", marginTop: "10px", zIndex: "10"}}>
            <button className="btn-primary" onClick={() => {
              this.props.onDelete("DELETE_CATEGORY", this.props.id)
            }}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div style={{width: "100%"}}>
          {this.props.subCategories.map(sc => {
            return <SubSkill key={sc.id} id={sc.id} parentId={this.props.id}
            name={sc.name} rating={sc.rating} onDelete={this.props.onChange} onChange={this.props.onChange}/>
          })}
        </div>
        <div style={{width: "100%"}}>
          <button className="btn-simple" style={{width: "80%"}} onClick={() => {
            this.props.onChange("ADD_SKILL", this.props.id)
          }}>
            ADD SKILL
          </button>
        </div>
      </div>);
  }
}

export default Skill;