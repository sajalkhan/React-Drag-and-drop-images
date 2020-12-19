import React, { useRef, useState } from "react";
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

const MovableItem = ({
  name,
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

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveRightCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { index, name, currentColumnName, type: "Our first type" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      // const images = load_left_column.images.filter(
      //   (img) => img.name === item.name
      // );

      if (dropResult) {
        const { name } = dropResult;

        switch (name) {
          case "In Progress":
            // rmoveleftCard(images);
            // addRightCard(images);
            break;
          case "Start":
            // addCardHandler(item, "Alive");
            break;
          default:
            break;
        }
      }
    },
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
  return (
    <div ref={ref} className="movable-item" style={{ opacity, margin: 70 }}>
      <div className="movable-item-img">
        <img
          src={image}
          alt=""
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
        {openSettings ? <SettingsPopup img={image} /> : null}
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
