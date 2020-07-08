import React, {Component} from 'react';
import Skill from "./Skill";
import {connect} from "react-redux";

const styles = {
  root: {
    paddingTop: "0px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginRight: "0px",
    paddingLeft: "20px",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "100px"
  }
};

class Skills extends Component {
  render() {
    return (
      <div style={styles.root}>
        {this.props.skills.length === 0 ? <div style={{width: "100%"}}>
          <p style={{color: "#03a9f4"}}>Leave empty if you don't want this section to print!</p>
        </div> : null}
        {this.props.skills.map((obj) => {
          return <Skill key={obj.id} onDelete={this.props.handleChange} id={obj.id}
                             category={obj.category} subCategories={obj.subCategories}
                             onChange={this.props.handleChange} onAdd={this.props.handleChange}
          />
        })}
        <div style={{width: "50%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingTop: "0px",
          display: "flex",
          marginBottom: "0px",
          marginTop: "10px",
          height: "120px", flex: "1",
          maxWidth: "50%",
        }}>
          <button className="btn-transparent" style={{width: "100%", height: "100%", fontSize: "50px"}}
                  onClick={() => this.props.handleSkillAdd("ADD_CATEGORY")}>+</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    skills: state.rootreducer.skills
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, value) => dispatch({type: type, value: value}),
    handleSkillAdd: (type) => dispatch({type: type})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);