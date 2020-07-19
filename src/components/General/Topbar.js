import React, {Component} from 'react';

class Topbar extends Component {
  render() {
    return (
      <div style={{
        width: "93%", background: "#546e7a", top: "0px", position: "absolute", textAlign: "left",
        paddingLeft: "100px", color: "#fff"
      }}>
        <a href="https://www.patreon.com/bePatron?u=39081535" style={{width: "auto"}}
           target="_blank" rel="noopener noreferrer"
           data-patreon-widget-type="become-patron-button">Become a Patron!</a>
        <div style={{cursor: "pointer", marginRight: "5px"}} onClick={() => {
          window.location.href = "/"
        }}>
          <h2 style={{marginBlockEnd: "0px", marginBlockStart: "0px", float: "left", marginRight: "15px"}}>Resume
            Point</h2>
          <small style={{marginTop: "5px", float: "left"}}>Completely free and easy resume generator</small>
        </div>
        <div style={{float: "right", marginRight: "50px"}}>
          <small style={{fontWeight: "bold"}}>
            <a className="btn-transparent" href="https://www.linkedin.com/in/nahid-islam-shaiket-5a079ba3/"
               target="_blank" rel="noopener noreferrer">Meet me!</a>
          </small>
          <small style={{fontWeight: "bold"}}>
            <a href="https://www.fiverr.com/share/r38QdP" className="btn-transparent"
               target="_blank" rel="noopener noreferrer">Work with me?</a>
          </small>
        </div>
      </div>
    );
  }
}

export default Topbar;