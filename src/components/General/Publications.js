import React, {Component} from 'react';
import Publication from "./Publication";
import {connect} from "react-redux";

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

class Publications extends Component {
  render() {
    return (
      <div style={styles.root}>
        {this.props.publications.map((obj) => {
          return <Publication key={obj.id} onDelete={this.props.handleChange} id={obj.id}
                                issueYear={obj.issueYear} publisher={obj.publisher} title={obj.title}
                                link={obj.link}
                                onChange={this.props.handleChange}
          />
        })}
        <div style={{width: "100%", margin: "10px 0 10px 55px"}}>
          <button className="btn-simple" style={{width: "80%"}}
                  onClick={() => this.props.handlePubAdd("ADD_PUBLICATION")}>ADD PUBLICATION</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    publications: state.rootreducer.publications
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, value) => dispatch({type: type, value: value}),
    handlePubAdd: (type) => dispatch({type: type})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);