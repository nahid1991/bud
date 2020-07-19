import React, {Component} from 'react';
import {connect} from 'react-redux';

const styles = {
  imageHolder: {
    position: "absolute",
    top: "-25%",
    marginLeft: "45px",
    zIndex: "501",
    height: "100px",
    width: "100px",
    borderStyle: "solid",
    border: "20",
    borderRadius: "50%",
    borderColor: "#ffffff",
    cursor: "pointer",
    overflow: "hidden"
  },
  nameHolder: {
    position: "absolute",
    color: "white",
    left: "25%",
    top: "-5px",
    zIndex: "501",
    cursor: "pointer",
    width: "70%",
    display: "flex",
    justifyContent: "flex-start"
  },
  bottomBorder: {
    borderBottomStyle: "dashed",
    borderBottom: "1",
    height: "60px",
    borderColor: "#ffffff",
    opacity: 0.5,
  },
  input: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#ffffff",
    width: "100%",
    border: "none",
    padding: "23px 12px 0px 0px",
    height: "35px",
    borderBottom: "2px solid #ffffff",
    backgroundColor: "inherit"
  }
};

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      bottomBorder: {},
      height: false,
      decreaseOpacity: false
    };
  }

  openFileBrowser = (id) => {
    let elem = document.getElementById(id);
    elem.click();
  };

  upload = (e) => {
    let reader = new FileReader();
    try {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        this.props.handleImageInput(reader.result);
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {avatar, firstName, lastName} = this.props;

    return (
      <div className="navigation_container">
        <div className="l">
          <div className="l-triangle-top"/>
          <div className="l-triangle-bottom"/>
        </div>

        <div className="rectangle">
          <div
            style={{...styles.imageHolder, backgroundImage: `url(${avatar})`,
              color: this.state.decreaseOpacity ? "#000000" : "#ffffff",
              opacity: this.state.decreaseOpacity ? "0.8" : "1",
              imageOrientation: "0deg",
              backgroundRepeat: "no-repeat", backgroundSize: "cover"}} onClick={() => {
            this.openFileBrowser("theFile")
          }} onMouseEnter={() => {this.setState({decreaseOpacity: true})}}
            onMouseLeave={() => {this.setState({decreaseOpacity: false})}}>
            {this.state.decreaseOpacity ? "" : <div style={{height: "100%", width: "100%",
              display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
              <p><i className="fa fa-camera"></i></p></div>}
          </div>
          <div>
            <div
              style={{...styles.nameHolder}}
            >
              <div style={this.state.bottomBorder}>
                <h1>{firstName + " " + lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="r">
          <div className="r-triangle-top"/>
          <div className="r-triangle-bottom"/>
        </div>
        <div><input type="file" id="theFile" style={{display: "none"}} accept="image/*" onChange={(event) => {
          this.upload(event);
        }}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    avatar: state.rootreducer.avatar,
    firstName: state.rootreducer.generalInformation.firstName,
    lastName: state.rootreducer.generalInformation.lastName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleImageInput: (value) => dispatch({type: "AVATAR", value: value})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);