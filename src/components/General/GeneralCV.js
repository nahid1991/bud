import React, {Component} from 'react';
import Banner from "./Banner";
import {connect} from "react-redux";
import axios from 'axios';
import PersonalInformation from "./PersonalInformation";

// import {Link} from 'react-router-dom';

class GeneralCv extends Component {
  handleDownload = () => {
    axios.post('http://localhost:8000/api/v1/process-pdf',
      {name: this.props.name, avatar: this.props.avatar})
      .then(function (response) {
        const linkSource = `data:application/pdf;base64,${response.data.pdf}`;
        const downloadLink = document.createElement("a");
        const fileName = "cv.pdf";

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="root">
        <Banner/>
        <PersonalInformation/>
        <div style={{
          width: "100%", flexDirection: "column", display: "flex",
          justifyContent: "flex-end", alignItems: "center", marginRight: "0px"
        }}>
          <button className="btn-primary" onClick={() => {
            this.handleDownload()
          }}>DOWNLOAD AS PDF
          </button>
        </div>
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

export default connect(mapStateToProps)(GeneralCv);