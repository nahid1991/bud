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
  }
};

class Banner extends Component {
  constructor() {
    super();
    this.state = {avatar: avatar};
  }

  openFileBrowser = (id) => {
    var elem = document.getElementById(id);
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
            <div style={{position: "absolute", color: "white", left: "45%", top: "-10px", zIndex: "501"}}>
              <h1>John Doe</h1>
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