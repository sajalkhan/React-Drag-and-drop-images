import React, { useState } from "react";

import FilterScreen from "../component/filterScreen";

export default function SettingsPopup({ item, indx }) {
  const [OpenImg, setOpenImg] = useState(true);
  const [, setFilter] = useState(false);

  const handleImgtab = () => {
    setOpenImg(true);
    setFilter(false);
  };

  const handleFiltertab = () => {
    setOpenImg(false);
    setFilter(true);
  };

  const imgStyle = {
    filter: `sepia(${item.sepia}) grayscale(${item.grayscale}) blur(${item.blur}px) brightness(${item.brightness})`,
  };

  return (
    <div className="settings-modal">
      <div className="settings-button">
        <p className="img_txt" onClick={handleImgtab}>
          Image
        </p>
        <p className="filter_txt" onClick={handleFiltertab}>
          Filter
        </p>
      </div>
      {OpenImg ? (
        <div className="settings-div">
          <img src={item.img} style={imgStyle} className="img" alt="" />
          <div className="settings-chooseimg">
            <p>Choose Photo</p>
          </div>
        </div>
      ) : (
        <FilterScreen item={item} indx={indx} />
      )}
    </div>
  );
}
