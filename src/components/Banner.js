import React, {Component} from 'react';
import avatar from "../avatar.png";

const styles = {
  imageHolder: {
    position: "absolute",
    top: "-30%",
    marginLeft: "45px",
    zIndex: "501",
    height: "100px",
    width: "100px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderStyle: "solid",
    border: "20",
    borderRadius: "50%",
    borderColor: "#ffffff",
    cursor: "pointer"
  },
  nameHolder: {
    position: "absolute",
    color: "white",
    left: "45%",
    top: "-10px",
    zIndex: "501",
    cursor: "pointer",
  },
  bottomBorder: {
    borderBottomStyle: "dashed",
    borderBottom: "1",
    height: "40px",
    borderColor: "#ffffff",
    opacity: 0.5,
  },
  input: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#ffffff",
    width: "80%",
    border: "none",
    padding: "23px 10px 0px 0px",
    height: "35px",
    borderBottom: "2px solid #ffffff",
    backgroundColor: "inherit"
  }
};

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      avatar: avatar,
      placeholder: "Your Name",
      name: "",
      editing: false,
      bottomBorder: {}
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
      this.setState({
        avatar: reader.result
      });
    }
  }

  nameInputHandler = (e) => {
    this.setState({name: e.target.value});
  }

  editHandler = () => {
    this.setState({editing: true});
  }

  render() {
    return (
      <div className="navigation_container">
        <div className="l">
          <div className="l-triangle-top"/>
          <div className="l-triangle-bottom"/>
        </div>

        <div className="rectangle">
          <div
            style={{...styles.imageHolder, backgroundImage: `url(${this.state.avatar})`}} onClick={() => {
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
                <h1>{this.state.name !== "" ? this.state.name : "Your Name"}</h1>
              </div>

              <input className="input" id="input" type="text"
                     style={{...styles.input, display: this.state.editing ? "block" : "none"}}
                     value={this.state.name}
                     placeholder={this.state.placeholder}
                     onChange={(event) => {this.nameInputHandler(event)}}
                     onBlur={() => {this.setState({editing: false})}}
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

export default Banner;