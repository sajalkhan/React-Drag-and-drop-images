import React, { useState, useEffect, useCallback } from "react";

import FilterScreen from "../component/filterScreen";
import Dropzone from "../component/Dropzone";
import DropzoneImage from "../component/DropzoneImg";

//Redux connect
import { connect } from "react-redux";
import { updateImage } from "../redux/column_2/right_column_action";

const SettingsPopup = ({ item, indx, updateImage }) => {
  const [OpenImg, setOpenImg] = useState(true);
  const [images, setImages] = useState([]);
  const [, setFilter] = useState(false);

  useEffect(() => {
    if (images && images.length) updateImage(images, indx);
  }, [updateImage, images, indx]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages(() => [{ src: e.target.result }]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

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
          {images && images.length ? (
            <DropzoneImage images={images} style={imgStyle} />
          ) : (
            <img src={item.img} style={imgStyle} className="img" alt="" />
          )}
          <Dropzone onDrop={onDrop} accept={"image/*"} />
        </div>
      ) : (
        <FilterScreen item={item} indx={indx} />
      )}
    </div>
  );
};

export default connect(null, { updateImage })(SettingsPopup);
