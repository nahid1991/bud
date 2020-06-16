import React, {Component} from 'react';
import Banner from "./Banner";

class GeneralCv extends Component {
  render() {
    return (
      <div className="root">
        <Banner/>
        <div style={{width: "100%", flexDirection: "column", display: "flex",
          justifyContent: "flex-end", alignItems: "center", marginRight: "0px"}}>
          <button className="btn-primary">DOWNLOAD AS PDF</button>
        </div>
      </div>
    );
  }
}

export default GeneralCv;