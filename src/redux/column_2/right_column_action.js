import { ADD_RIGHT_CARD, MOVE_RIGHT_CARD, REMOVE_RIGHT_CARD } from "./type";

// move image
export const moveRightCard = (dragIndex, hoverIndex) => async (dispatch) => {
  dispatch({
    type: MOVE_RIGHT_CARD,
    payload: { dragIndex, hoverIndex },
  });
};

// Remove image
export const rmoveRightCard = (dragIndex, hoverIndex) => async (dispatch) => {
  console.log("remove");
  dispatch({
    type: REMOVE_RIGHT_CARD,
    payload: { dragIndex, hoverIndex },
  });
};

// Add image
export const addRightCard = (item) => async (dispatch) => {
  dispatch({
    type: ADD_RIGHT_CARD,
    payload: item,
  });
};
