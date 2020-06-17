import React, {Component} from 'react';
import Banner from "./Banner";
import {Link} from 'react-router-dom';

class GeneralCv extends Component {
  render() {
    return (
      <div className="root">
        <Banner/>
        <div style={{width: "100%", flexDirection: "column", display: "flex",
          justifyContent: "flex-end", alignItems: "center", marginRight: "0px"}}>
          <Link className="btn-primary" to={"/bud/test"}>DOWNLOAD AS PDF</Link>
        </div>
      </div>
    );
  }
}

export default GeneralCv;