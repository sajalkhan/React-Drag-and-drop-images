import React from "react";
import { useDrop } from "react-dnd";

const Column = ({ children, className, title }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Our first type",
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),

    // Override monitor.canDrop() function
    canDrop: (item) => {
      const { currentColumnName } = item;

      return (
        currentColumnName === title ||
        (currentColumnName === "Start" && title === "In Progress") ||
        (currentColumnName === "In Progress" && title === "Start")
      );
    },
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return "rgb(188,251,255)";
      } else if (!canDrop) {
        return "rgb(255,188,188)";
      }
    } else {
      return "";
    }
  };

  return (
    <div
      ref={drop}
      className={className}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {children}
    </div>
  );
};

export default Column;
