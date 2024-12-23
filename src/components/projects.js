import React from "react";
import "./projects.css";
import "./imgPart.js";
import "./whitepart.js";
import ImgPart from "./imgPart.js";
import WhitePart from "./whitepart.js";

function MenuBar() {
  return (
    <div className="row1">
      <div className="return1">
        <WhitePart></WhitePart>
      </div>
      <div className="return2">
        <ImgPart></ImgPart>
      </div>
    </div>
  );
}

export default MenuBar;
