import React, {Component} from 'react';
import {connect} from "react-redux";
import Volunteering from "./Volunteering";
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

class Volunteerings extends Component {
  render() {
    return (
      <div style={styles.root}>
        {this.props.volunteerings.length === 0 ? <div style={{width: "100%"}}>
          <p style={{color: "#03a9f4"}}>Leave empty if you don't want this section to print!</p>
        </div> : null}
        {this.props.volunteerings.map((obj) => {
          return <Volunteering key={obj.id} onDelete={this.props.handleChange} id={obj.id}
                             from={obj.from} to={obj.to} title={obj.title} address={obj.address} description={obj.description}onChange={this.props.handleChange}
          />
        })}
        <div style={{width: "100%", margin: "10px 0 10px 55px"}}>
          <button className="btn-simple" style={{width: "80%"}}
                  onClick={() => this.props.handleVolAdd("ADD_VOLUNTEERING")}>ADD VOLUNTEERING</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    volunteerings: state.rootreducer.volunteerings
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, value) => dispatch({type: type, value: value}),
    handleVolAdd: (type) => dispatch({type: type})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Volunteerings);