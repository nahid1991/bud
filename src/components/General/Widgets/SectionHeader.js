import React from "react";
import IconSelector from "../../../IconSelector";

const styles = {
  imageHolder: {
    position: "absolute",
    top: "-15%",
    marginLeft: "125px",
    zIndex: "501",
    height: "50px",
    width: "50px",
    borderStyle: "solid",
    border: "10",
    borderRadius: "50%",
    borderColor: "#ffffff",
    overflow: "hidden",
    backgroundColor: "inherit"
  },
  rectangleSection: {
    background: "#546e7a",
    minHeight: "42px",
    height: "auto",
    width: "100%",
    position: "relative",
    zIndex: "500",
    margin: "0 auto",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  rTriangleTop: {
    marginTop: "6px",
    borderColor: "#546e7a transparent transparent",
    borderStyle: "solid",
    borderTopWidth: "50px",
    borderRightWidth: "5px",
    borderBottomWidth: "50px",
    borderLeftWidth: "50px",
    height: "0px",
    width: "0px",
    position: "relative",
    float: "right",
    right: "-48px",
    top: "-72px"
  },

  rTriangleBottom: {
    marginTop: "6px",
    borderColor: "transparent transparent #546e7a #546e7a",
    borderStyle: "solid",
    borderTopWidth: "50px",
    borderRightWidth: "50px",
    borderBottomWidth: "50px",
    borderTopLeftRadius: "110%",
    height: "0px",
    width: "0px",
    position: "relative",
    float: "right",
    top: "-102px",
    right: "-148px"
  },
  nameHolder: {
    position: "absolute",
    color: "white",
    top: "-5px",
    zIndex: "501",
    width: "70%",
    display: "flex",
    justifyContent: "flex-start"
  },
};

const SectionHeader = (props) => {
  return (
    <div className="section_container">
      <div style={styles.rectangleSection}>
        <div
          style={{
            ...styles.imageHolder, backgroundImage: `url(${IconSelector(props.icon)})`,
            backgroundRepeat: "no-repeat", backgroundSize: "60%", backgroundPosition: "center"
          }}>
        </div>
        <div>
          <div className="nameholder" style={{...styles.nameHolder}}>
            <p><b>{props.title}</b></p>
          </div>
        </div>
      </div>
      <div className="r">
        <div className="r-triangle-top-section"/>
        <div className="r-triangle-bottom-section"/>
      </div>
    </div>);
}

export default SectionHeader;