import React, {Component} from 'react';

class Sidebar extends Component {
  openFileBrowser = (id) => {
    let elem = document.getElementById(id);
    elem.click();
  };

  upload = (e) => {
    let reader = new FileReader();
    reader.onload = this.props.handlejson;
    reader.readAsText(e.target.files[0]);
  }

  render() {
    return (
      <div style={{float: "left", height: "100vh", width: "80px", background: "#546e7a", top: "0px", position: "fixed"}}>
        <div style={{color: "#ffffff", width: "80%", paddingLeft: "5px", paddingTop: "5px"}}>
          <button className="btn-transparent-left" style={{width: "100%", minHeight: "50px", fontSize: "25px",
            color: "#ffffff", border: "1px solid #ffffff", marginBottom: "5px"}}
                  title="Download as pdf" onClick={() => {this.props.download()}}>
            <i className="fa fa-download"></i>
          </button>
          <button className="btn-transparent-left" style={{width: "100%", minHeight: "50px", fontSize: "25px",
            color: "#ffffff", border: "1px solid #ffffff", marginBottom: "5px"}} title="Save inputs" onClick={() => {this.props.save()}}>
            <i className="fa fa-save"></i>
          </button>
          <button className="btn-transparent-left" style={{width: "100%", minHeight: "50px", fontSize: "25px",
            color: "#ffffff", border: "1px solid #ffffff", marginBottom: "5px"}} title="Load inputs" onClick={() => {this.openFileBrowser("theJson")}}>
            <i className="fa fa-upload"></i>
          </button>
        </div>
        <div><input type="file" id="theJson" style={{display: "none"}} accept="application/json" onChange={(event) => {
          this.upload(event);
        }}/>
        </div>
      </div>
    );
  }
}

export default Sidebar;