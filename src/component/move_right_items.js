import React, { useRef, useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";

//Redux connect
import { connect } from "react-redux";

import {
  moveRightCard,
  addRightCard,
  rmoveRightCard,
} from "../redux/column_2/right_column_action";

import DeletePopup from "../component/deletePopup";
import SettingsPopup from "../component/settingsPopup";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const MovableItem = ({
  id,
  item,
  index,
  image,
  currentColumnName,
  moveRightCard,
  rmoveRightCard,
}) => {
  const ref = useRef(null);

  const [DeleteImg, setDeleteImg] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  let dragIndex = null;
  let hoverIndex = null;

  const [, drop] = useDrop({
    accept: "Our first type",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      dragIndex = item.index;
      hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveRightCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { index, id, currentColumnName, type: "Our first type" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  const handleDelete = (confirm, itemIndx) => {
    setDeleteImg(false);
    if (confirm) rmoveRightCard(itemIndx);
  };

  const imgStyle = {
    filter: `sepia(${item.sepia}) grayscale(${item.grayscale}) blur(${item.blur}px) brightness(${item.brightness})`,
  };

  let domNode = useClickOutside(() => {
    setDeleteImg(false);
    setOpenSettings(false);
  });

  return (
    <div ref={ref} className="movable-item" style={{ opacity, margin: 70 }}>
      <div ref={domNode} className="movable-item-img">
        <img
          src={image}
          alt=""
          style={imgStyle}
          className="movable-item-img"
          onClick={() => {
            setDeleteImg(false);
            setOpenSettings(false);
          }}
        />

        <span className="img-div" target="img">
          <i
            className="fa fa-cog fa-xs btn-settings"
            onClick={() => {
              setOpenSettings(!openSettings);
              setDeleteImg(false);
            }}
          />
          <i
            className="fa fa-trash fa-xs btn-settings"
            onClick={() => {
              setDeleteImg(!DeleteImg);
              setOpenSettings(false);
            }}
          />
        </span>

        {DeleteImg ? (
          <DeletePopup item={index} selectedOption={handleDelete} />
        ) : null}
        {openSettings ? <SettingsPopup item={item} indx={index} /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    load_left_column: state.LoadleftColumnImageState,
    load_right_column: state.LoadrightColumnImageState,
  };
};

export default connect(mapStateToProps, {
  addRightCard,
  moveRightCard,
  rmoveRightCard,
})(MovableItem);
