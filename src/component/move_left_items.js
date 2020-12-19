import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

//Redux connect
import { connect } from "react-redux";
import {
  moveleftCard,
  rmoveleftCard,
} from "../redux/column_1/left_column_action";

import { addRightCard } from "../redux/column_2/right_column_action";

const MovableItem = ({
  id,
  index,
  image,
  currentColumnName,
  moveleftCard,
  addRightCard,
  rmoveleftCard,
  load_left_column,
}) => {
  const ref = useRef(null);

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

      moveleftCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { index, id, currentColumnName, type: "Our first type" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      const images = load_left_column.images.filter(
        (img) => img.char_id === item.id
      );

      if (dropResult) {
        const { name } = dropResult;

        switch (name) {
          case "In Progress":
            rmoveleftCard(images);
            addRightCard(images);
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

  return (
    <div
      ref={ref}
      className="movable-item"
      style={{ opacity, marginBlock: 40 }}
    >
      <img
        src={image}
        style={{
          height: "140px",
          width: "140px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        alt=""
      />
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
  moveleftCard,
  rmoveleftCard,
})(MovableItem);
