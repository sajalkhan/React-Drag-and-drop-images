import React from "react";

export default function DeletePopup({ selectedOption, item }) {
  return (
    <div className="delete-modal">
      <div>
        <span>Are you sure?</span>
      </div>
      <div className="delete_modal_content">
        <button
          name="Yes"
          className="btn-yes"
          onClick={() => selectedOption(true, item)}
        >
          Yes
        </button>
        <button
          name="No"
          className="btn-no"
          onClick={() => selectedOption(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}
