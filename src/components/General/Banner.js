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
      placeholder: "Your Name",
      editing: false,
      bottomBorder: {},
      height: false
    };
  }

  openFileBrowser = (id) => {
    let elem = document.getElementById(id);
    elem.click();
  };

  upload = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      this.props.handleImageInput(reader.result);
    }
  }

  nameInputHandler = (e) => {
    this.props.handleNameInput(e.target.value);
  }

  editHandler = () => {
    this.setState({editing: true});
    document.getElementById("input").style.display = "block";
    document.getElementById("input").focus();
  }

  resizeImage = (e) => {
    let img = document.createElement("img");
    img.setAttribute("src", e.target.src);
    let height = img.height;
    let width = img.width;

    if (width < height) {
      this.setState({height: true});
    } else {
      this.setState({height: false});
    }
  }

  render() {
    const {avatar, name} = this.props;

    return (
      <div className="navigation_container">
        <div className="l">
          <div className="l-triangle-top"/>
          <div className="l-triangle-bottom"/>
        </div>

        <div className="rectangle">
          <div
            style={{...styles.imageHolder, backgroundImage: `url(${avatar})`,
              backgroundRepeat: "no-repeat", backgroundSize: "cover"}} onClick={() => {
            this.openFileBrowser("theFile")
          }}>
          </div>
          <div>
            <div
              style={{...styles.nameHolder}}
              onMouseEnter={() => {
                this.setState({bottomBorder: {...styles.bottomBorder}})
              }}
              onMouseLeave={() => {
                this.setState({bottomBorder: {}})
              }}
              onClick={() => {
                this.editHandler();
              }}
            >
              <div style={{...this.state.bottomBorder, display: this.state.editing ? "none" : "block"}}>
                <h1>{name !== "" ? name : "Type your name here"}</h1>
              </div>

              <input className="input" id="input" type="text"
                     style={{...styles.input, display: this.state.editing ? "block" : "none"}}
                     value={name}
                     autoComplete="off"
                     placeholder={this.state.placeholder}
                     onChange={(event) => {
                       this.nameInputHandler(event)
                     }}
                     onBlur={() => {
                       this.setState({editing: false})
                     }}
              />
            </div>
          </div>
        </div>
        <div className="r">
          <div className="r-triangle-top"/>
          <div className="r-triangle-bottom"/>
        </div>
        <div><input type="file" id="theFile" style={{display: "none"}} accept="image/*" onChange={(event) => {
          this.upload(event);
        }}/></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    avatar: state.rootreducer.avatar,
    name: state.rootreducer.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNameInput: (value) => dispatch({type: "NAME", value: value}),
    handleImageInput: (value) => dispatch({type: "AVATAR", value: value})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);