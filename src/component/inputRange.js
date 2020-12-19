import React from "react";

export default function InputRange({ rangeUpdate, value, min, max }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={rangeUpdate}
      style={{ width: "140px" }}
    />
  );
}
