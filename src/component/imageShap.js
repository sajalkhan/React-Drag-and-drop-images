import React from "react";
import logo from "../assets/images/logo.jpg";

const divstyle = {
  div: {
    height: "300px",
    width: "400px",
    border: "2px dotted #DDE2E8",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
  },
  img: {
    width: "100px",
    height: "100px",
    alignSelf: "center",
  },
  span: {
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    fontSize: "18px",
    marginTop: "5px",
    color: "gray",
  },
};
export default function imageShap() {
  return (
    <div style={divstyle.div}>
      <img src={logo} style={divstyle.img} alt="" />
      <span style={divstyle.span}>Drag an image from media panel</span>
    </div>
  );
}
