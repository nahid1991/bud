import React, {Component} from 'react';
import Banner from "./Banner";
import {connect} from "react-redux";
import axios from 'axios';
import PersonalInformation from "./PersonalInformation";
import SectionHeader from "./Widgets/SectionHeader";
import Experiences from "./Experiences";
import Educations from "./Educations";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Publications from "./Publications";
import References from "./References";
import Sidebar from "../Sidebar";
import Topbar from "./Topbar";
import Volunteerings from "./Volunteerings";

// import {Link} from 'react-router-dom';

class GeneralCv extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    }
  }

  handleDownload = () => {
    this.props.handleChange("SET_LOADING", true);
    let that = this;
    // axios.post('http://localhost:8000/api/v1/process-pdf',
    axios.post('https://secret-castle-60004.herokuapp.com/api/v1/process-pdf',
      {...this.props.values})
      .then(function (response) {
        const linkSource = `data:application/pdf;base64,${response.data.pdf}`;
        const downloadLink = document.createElement("a");
        const fileName = "cv.pdf";

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
        that.props.handleChange("SET_LOADING", false);
      })
      .catch(function (error) {
        alert("Something went wrong!");
        console.log(error);
        that.props.handleChange("SET_LOADING", false);
      });
  };

  saveInputs = () => {
    this.props.handleChange("SET_LOADING", true);
    let that = this;
    axios.post('https://secret-castle-60004.herokuapp.com/api/v1/save-inputs',
      {inputs: JSON.stringify(this.props.values), email: this.props.values.generalInformation.email})
      .then(function (response) {
        const linkSource = `data:application/json;base64,${response.data.json}`;
        const downloadLink = document.createElement("a");
        const fileName = "cv.json";

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
        that.props.handleChange("SET_LOADING", false);
      })
      .catch(function (error) {
        that.props.handleChange("SET_LOADING", false);
        alert("Something went wrong!");
        console.log(error);
      });
  }

  load = (e) => {
    this.props.handleChange("SET_ROOT_REDUCER", JSON.parse(e.target.result));
  }

  render() {
    return (
      <div>
        <div style={{position: "fixed", zIndex: "1000", height: "100%", width: "100%", textAlign: "center",
          background: "#000", opacity: "0.6", top: "0px", display: this.props.values.loading ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center"}}>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Topbar/>
        <Sidebar download={this.handleDownload} save={this.saveInputs} handlejson={this.load}/>
        <div className="root">
          <Banner/>
          <PersonalInformation/>
          <SectionHeader title={"Work experience"} icon={"work"}/>
          <Experiences/>
          <SectionHeader title={"Education"} icon={"education"}/>
          <Educations/>
          <SectionHeader title={"Skills"} icon={"skill"}/>
          <Skills/>
          <SectionHeader title={"Certifications"} icon={"certification"}/>
          <Certifications/>
          <SectionHeader title={"Publications"} icon={"publication"}/>
          <Publications/>
          <SectionHeader title={"Volunteering and other experiences"} icon={"volunteering"} />
          <Volunteerings/>
          <SectionHeader title={"References"} icon={"reference"}/>
          <References/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, value) => dispatch({type: type, value: value})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralCv);