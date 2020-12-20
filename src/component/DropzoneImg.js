import React from "react";

const ImageList = ({ images }) => {
  return images && images.length ? (
    <img src={images[0].src} alt="" className="img" />
  ) : null;
};

export default ImageList;
