import React, { useState, useEffect } from "react";
import InputRange from "../component/inputRange";

//Redux connect
import { connect } from "react-redux";
import { addFilter } from "../redux/column_2/right_column_action";
const FilterScreen = ({ item, indx, addFilter }) => {
  const [blur, setBlur] = useState(item.blur);
  const [brightness, setBrightness] = useState(item.brightness);
  const [sepia, setSepia] = useState(item.sepia);
  const [grayscale, setGrayscale] = useState(item.grayscale);

  useEffect(() => {
    addFilter(item, indx, blur, brightness, sepia, grayscale);
  }, [blur, brightness, sepia, grayscale]);

  return (
    <div className="controls">
      <div className="input-range">
        <span className="fas fa-adjust xs"></span>
        <InputRange
          max={10}
          min={0}
          value={blur}
          rangeUpdate={(e) => setBlur(e.target.value)}
        />
        <span style={{ fontSize: "14px" }}>{blur} px</span>
      </div>
      <div className="input-range">
        <span className="fas fa-sun xs"></span>
        <InputRange
          max={10}
          min={0}
          value={brightness}
          rangeUpdate={(e) => setBrightness(e.target.value)}
        />
        <span style={{ fontSize: "14px" }}>{brightness} %</span>
      </div>

      <div className="input-range">
        <span className="fas fa-burn xs"></span>
        <InputRange
          max={100}
          min={0}
          value={sepia}
          rangeUpdate={(e) => setSepia(e.target.value)}
        />
        <span style={{ fontSize: "14px" }}>{sepia} %</span>
      </div>

      <div className="input-range">
        <span className="fas fa-tint xs"></span>
        <InputRange
          max={100}
          min={0}
          value={grayscale}
          rangeUpdate={(e) => setGrayscale(e.target.value)}
        />
        <span style={{ fontSize: "14px" }}>{grayscale} %</span>
      </div>
    </div>
  );
};

export default connect(null, { addFilter })(FilterScreen);
