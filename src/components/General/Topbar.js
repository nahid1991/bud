import React, {Component} from 'react';

class Topbar extends Component {
  render() {
    return (
      <div style={{width: "93%", background: "#546e7a", top: "0px", position: "absolute", textAlign: "left",
        paddingLeft: "100px", color: "#fff"}}>
        <div style={{cursor: "pointer"}} onClick={() => {window.location.href = "/"}}>
          <h2 style={{marginBlockEnd: "0px", marginBlockStart: "0px", float: "left", marginRight: "15px"}}>Resume Point</h2>
          <small style={{marginTop: "5px", float: "left"}}>Completely free and easy resume generator</small>
        </div>
      </div>
    );
  }
}

export default Topbar;