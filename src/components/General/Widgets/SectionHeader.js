import React from "react";

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
    cursor: "pointer",
    overflow: "hidden",
    backgroundColor: "inherit"
  },
  rectangleSection: {
    background: "#546e7a",
    minHeight: "42px",
    height: "auto",
    width: "100%",
    position: "relative",
    boxShadow: "0px 0px 4px rgba(0,0,0,0.55)",
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
  }
};

const SectionHeader = (props) => {
  return (
    <div className="section_container">
      <div style={styles.rectangleSection}>
        <div
          style={{
            ...styles.imageHolder, backgroundImage: `url(${props.image})`,
            backgroundRepeat: "no-repeat", backgroundSize: "cover"
          }}>
        </div>
      </div>
      <div className="r">
        <div className="r-triangle-top-section"/>
        <div className="r-triangle-bottom-section"/>
      </div>
    </div>);
}

export default SectionHeader;