import axios from "axios";

import { LOAD_SUCCESS, MOVE_LEFT_CARD, REMOVE_LEFT_CARD } from "./type";

// Load data
export const loadData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://www.breakingbadapi.com/api/characters?limit=20"
    );

    dispatch({
      type: LOAD_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log("error --", err);
  }
};

// move image
export const moveleftCard = (dragIndex, hoverIndex) => async (dispatch) => {
  dispatch({
    type: MOVE_LEFT_CARD,
    payload: { dragIndex, hoverIndex },
  });
};

// Remove image
export const rmoveleftCard = (item) => async (dispatch) => {
  dispatch({
    type: REMOVE_LEFT_CARD,
    payload: item,
  });
};
