import React, {Component} from 'react';
import Banner from "./Banner";
import {connect} from "react-redux";
import axios from 'axios';
import PersonalInformation from "./PersonalInformation";
import SectionHeader from "./Widgets/SectionHeader";
import Experiences from "./Experiences";

// import {Link} from 'react-router-dom';

class GeneralCv extends Component {
  handleDownload = () => {
    axios.post(' https://secret-castle-60004.herokuapp.com/api/v1/process-pdf',
      {...this.props.values})
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
        <SectionHeader title={"Work experience"} icon={"work"}/>
        <Experiences />
        <hr/>
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
    values: state.rootreducer
  };
};

export default connect(mapStateToProps)(GeneralCv);