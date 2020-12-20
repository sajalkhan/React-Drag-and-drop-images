import {
  ADD_RIGHT_CARD,
  MOVE_RIGHT_CARD,
  REMOVE_RIGHT_CARD,
  FILTER_IMAGE,
  UPDATE_IMAGE,
} from "./type";

// move image
export const moveRightCard = (dragIndex, hoverIndex) => async (dispatch) => {
  dispatch({
    type: MOVE_RIGHT_CARD,
    payload: { dragIndex, hoverIndex },
  });
};

// Remove image
export const rmoveRightCard = (Index) => async (dispatch) => {
  console.log("remove");
  dispatch({
    type: REMOVE_RIGHT_CARD,
    payload: Index,
  });
};

// Add image
export const addRightCard = (item) => async (dispatch) => {
  let data = item[0];
  data["sepia"] = 0;
  data["brightness"] = 1;
  data["blur"] = 0;
  data["grayscale"] = 0;

  dispatch({
    type: ADD_RIGHT_CARD,
    payload: data,
  });
};

//Add filter
export const addFilter = (
  item,
  indx,
  blur,
  brightness,
  sepia,
  grayscale
) => async (dispatch) => {
  let data = item;
  data.blur = +blur;
  data.brightness = +brightness;
  data.sepia = +sepia;
  data.grayscale = +grayscale;

  dispatch({
    type: FILTER_IMAGE,
    payload: { data, indx },
  });
};

//update image
export const updateImage = (image, indx) => async (dispatch) => {
  let img = image[0].src;
  dispatch({
    type: UPDATE_IMAGE,
    payload: { img, indx },
  });
};
