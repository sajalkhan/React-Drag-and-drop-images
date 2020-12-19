import React, { useState } from "react";

export default function SettingsPopup({ img }) {
  const [OpenImg, setOpenImg] = useState(true);
  const [Filter, setFilter] = useState(false);

  const handleImgtab = () => {
    setOpenImg(true);
    setFilter(false);
  };

  const handleFiltertab = () => {
    setOpenImg(false);
    setFilter(true);
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
      <div className="settings-div">
        {OpenImg ? <img src={img} className="img" /> : null}
        {Filter ? <div>filter screen</div> : null}
      </div>
      <div className="settings-chooseimg">
        <p>Choose Photo</p>
      </div>
    </div>
  );
}
